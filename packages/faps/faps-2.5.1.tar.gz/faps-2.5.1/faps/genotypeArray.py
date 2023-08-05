import numpy as np
from warnings import warn
from faps.calculate_geno_probs import calculate_geno_probs

class genotypeArray(object):
    """
    Genotype information about a sample of individuals, the identity of any known
    relatives, and metadata about the dataset.

    Currently only SNP data are supported. Data are recorded as integers: zeros
    and twos indicate opposing homozygous genotypes, and ones heterozygous
    genotypes.

    Parameters
    ----------
    geno: array
        3-dimensional array of genotype data indexing (1) individual, (2) locus,
        and (3) chromosome pair.
    names: array-like
        Unique identifiers for each individual.
    mothers: array-like
        Identifiers of the mother of each individual, if known.
    fathers: array-like
        Identifiers of the father of each individual, if known.
    markers: array-like, optional
        Marker names.

    Returns
    -------
    size: int
        Number of indivudals
    nloci: int
        Number of markers in the dataset
    parents: array
        Names of parent pairs for each indivudals.
    families: array
        List of unique full-sib families, based on the names of parents.
    nfamilies: int
        Number of full-sib families, based on the names of parents.
    """
    def __init__(self, geno, geno_probs, names, mothers, fathers, markers=None):
        self.geno      = geno
        self.geno_probs= geno_probs
        self.names     = names
        self.mothers   = mothers
        self.fathers   = fathers
        self.markers   = markers
        self.size      = self.geno.shape[0]
        self.nloci     = self.geno.shape[1]
        self.parents   = np.array([str(self.mothers[o]) + '/' + str(self.fathers[o]) for o in range(self.size)])
        self.families  = np.unique(self.parents)
        self.nfamilies = len(self.families)

    def allele_freqs(self):
        """
        Allele frequencies of each locus. The reference allele is whichever is
        labelled as 1.
        """
        diploid = self.geno.sum(2) * 0.5
        return np.nanmean(diploid, axis = 0)

    def drop(self, individuals):
        """
        Remove specific individuals from the genotype array.

        Parameters
        ----------
        individuals: an integer or list of integers indexing the individuals to be removed.

        Returns
        -------
        A genotype array with the target individuals removed.
        """
        # If indices are given
        if isinstance(individuals, int):
            if individuals > self.size or individuals < 0:
                raise ValueError("The index for the individual to drop is greater than the number of individuals, or less than zero.")
            individuals = [individuals]
        # If a names are given, find the positions in the list of names
        if isinstance(individuals, str):
            if individuals not in self.names:
                raise ValueError("The name for the individual to drop is not present in the list of names for this genotypeArray object.")
            individuals = [individuals]
        if all(isinstance(x, str) for x in individuals):
            if (~np.isin(individuals, self.names)).any():
                raise ValueError("The name of one or more individuals to drop is not present in the list of names for this genotypeArray object.")
            individuals = [np.where(self.names == x)[0][0] for x in individuals]

        if any([i < 0 or i > self.size for i in individuals]):
            raise ValueError("One or more indices for individuals to drop is greater than the total number of individuals, or less than zero.")

        # Indices of candidates to keep.
        new_index = ~np.isin(np.arange(self.size), individuals)
        new_index = np.where(new_index)[0]

        # create new genotypeArray.
        output = genotypeArray(
            geno = self.geno[new_index],
            geno_probs = self.geno_probs[new_index],
            names = self.names[new_index],
            mothers = self.mothers[new_index],
            fathers = self.fathers[new_index]
            )
        return output

    def dropouts(self, dr):
        """
        Add allelic dropouts to an array of genotypic data.

        Parameters
        ----------
        dr: float
            Diploid dropout rate.

        Returns
        -------
        A copy of the input genotype data, but with dropouts (shown as nan).
        """

        # pick data points to dropout
        vals = np.random.binomial(1, dr, self.size * self.nloci)
        positions = np.reshape(vals, [ self.size, self.nloci])
        positions = positions.astype("bool")

        # make a copy of the genotype data, just in case
        new_geno       = np.copy(self.geno).astype(float)
        new_geno_probs = np.copy(self.geno_probs).astype(float)
        # insert missing data into parental genotypes
        new_geno[positions] = np.nan
        new_geno_probs[positions] = np.nan

        output = genotypeArray(
            geno = new_geno,
            geno_probs = new_geno_probs,
            names = self.names,
            mothers = self.mothers,
            fathers = self.fathers
            )

        return output

    def heterozygosity(self, by='marker'):
        """
        Mean heterozygosity, either averaged across markers for each individual,
        or across individuals for each marker.

        Parameters
        ----------
        by: str
            If 'individual', values are returned averaged across markers for each
            individual. If 'marker' values are returned averaged across
            individuals for each marker. Defaults to 'marker'.

        Returns
        -------
        Vector of floats.
        """
        if by == 'marker' or by == 0:
            return (self.geno.sum(2) == 1).mean(0)
        elif by == 'individual' or by == 1:
            return (self.geno.sum(2) == 1).mean(1)
        else:
            raise ValueError("`by` should be either 'marker' or 'individual'.")

    def missing_data(self, by='marker'):
        """
        Mean genotype drop-out rate, either averaged across markers for each individual,
        or across individuals for each marker.

        Parameters
        ----------
        by: str
            If 'individual', values are returned averaged across markers for each
            individual. If 'marker' values are returned averaged across
            individuals for each marker. Defaults to 'marker'.

        Returns
        -------
        Vector of floats.
        """
        d = np.copy(self.geno).astype(float)
        d[d == -9] = np.nan
        if by == 'marker' or by == 0:
            return np.isnan(d[:,:,0]).mean(0)
        elif by == 'individual' or by == 1:
            return np.isnan(d[:,:,0]).mean(1)
        else:
            raise ValueError("`by` should be either 'marker' or 'individual'.")

    def mutations(self, mu):
        """
        Introduce mutations at random to an array of genotype data for multiple individuals.
        For all alleles present draw mutations given error rate mu, then swap zeroes and
        ones in the array.

        Parameters
        ----------
        mu: float
            Haploid genotyping error rate.

        Returns
        -------
        A copy of the input genotype data, but with point mutations added.
        """
        # make a copy of the data, and make it an integer
        new_alleles = np.copy(self.geno)

        # for an array of the same shape as newAlleles, draw mutations at each
        # position with probability mu.
        vals = np.random.binomial(1, mu, self.size * self.nloci * 2)
        mutate = np.reshape(vals, [ self.size, self.nloci, 2])
        mutate = (mutate == 1)
        # swap zeroes and ones.
        new_alleles[mutate] ^= 1

        # Apply to geno_probs
        new_geno_probs = calculate_geno_probs(new_alleles, mu=mu)

        output = genotypeArray(
            geno = new_alleles,
            geno_probs = new_geno_probs,
            names = self.names,
            mothers= self.mothers,
            fathers = self.fathers
            )

        return output

    def parent_index(self, parent, parent_names):
        """
        Finds the position of parental names in a vector of possible parental
        names. This can be the name of the mother or the father.

        This is essentially a convenient wrapper for np.where().

        Parameters
        ----------
        parent: str
            A string indicating whether the offspring's mother or father is to
            be located. Valid arguments are 'mother', 'father' and 'parents',  or
            equivalently 'm' and 'f' respectively.

        parent_names: array
            1-d array of parental names to be found in the lists of mothers,
            father or parents.

        Returns
        -------
        A list of positions of the parent for each entry in offs_names.

        Example
        -------
        from faps import *
        import numpy as np
        # create genotypes
        allele_freqs = np.random.uniform(0.3,0.5,10)
        parents = make_parents(5, allele_freqs, family_name='my_population')
        progeny = make_sibships(mypop, 0, [1,2,3], 4, 'myprogeny')

        progeny.parent_index('mother', parents.names) # position of the mother
        progeny.parent_index('father', parents.names) # positions of the fathers
        """
        if parent is 'mother' or parent is 'm':
            return [np.where(parent_names == x)[0][0] for x in self.mothers]
        if parent is 'father' or parent is 'f':
            return [np.where(parent_names == x)[0][0] for x in self.fathers]
        if parent is 'parents' or parent is 'p':
            return [np.where(parent_names == x)[0][0] for x in self.parents]
        else:
            raise ValueError("parent must be 'mother', 'father', or 'parents'.")

    def split(self, by, return_dict=True):
        """
        Split up a gentotypeArray into groups according to some grouping
        factor. For example, divide an array containing genotype data for
        multiple half-sibling arrays by the ID of their mothers.

        Parameters
        ----------
        by: array-like
            Vector containing grouping labels for each individual
        return_dict: logical
            If True, the output is returned as a dictionary of genotypeArray
            objects indexed by entries in `by`. If False, a list is returned.
            Defaults to True.

        Returns
        -------
        A dictionary of genotypeArray objects.

        Examples
        --------
        from faps import *
        import numpy as np

        # Generate a population of adults
        allele_freqs = np.random.uniform(0.3,0.5,50)
        adults = make_parents(20, allele_freqs)

        # Mate the first adult to the next three.
        mother = adults.subset(0)
        progeny = make_sibships(adults, 0, [1,2,3], 5, 'x')

        # Split by fathers
        progeny.split(progeny.fathers)
        """
        groups = np.unique(by)
        ix = [np.where(by == groups[i])[0] for i in range(len(groups))]
        if return_dict:
            output = {k:self.subset(i) for k,i in zip(groups, ix)}
        else:
            output = [self.subset(i) for i in ix]
        return output

    def subset(self, individuals=None, loci=None):
        """
        Subset the genotype array by individual or number of loci.

        To subset by both individuals and loci, call the function twice.

        Parameters
        ----------
        individuals: int, str, or a vector thereof
            Either a list of individual names, or integers indexing those
            individuals.

        loci: int, str, or a vector thereof
            Either a list of individual markers, or integers indexing those
            individuals.
        Returns
        -------
        A genotype array with only the target individuals included.
        """
        # if no subsetting indices are given, return the whole object.
        if individuals is None and loci is None:
            return self

        # Subset individuals if necessary
        if individuals is not None:
            # If only a single individual is given, make it a list.
            if isinstance(individuals, int):
                individuals = [individuals]
            if isinstance(individuals, str):
                individuals = [individuals]
            # If a names are given, find the positions in the list of names
            if all(isinstance(x, str) for x in individuals):
                individuals = [np.where(self.names == x)[0][0] for x in individuals]
            # Subset the genotypeArray
            output = genotypeArray(
                geno       = self.geno[individuals],
                geno_probs = self.geno_probs[individuals],
                names      = self.names[individuals],
                mothers    = self.mothers[individuals],
                fathers    = self.fathers[individuals],
                markers    = self.markers)

        # Subset loci if necessary
        if loci is not None:
            # If only a single locus is given, make it a list.
            if isinstance(loci, int):
                loci = [loci]
            if isinstance(loci, str):
                loci = [loci]
            # If a marker names are given, find the positions in the list of names
            if all(isinstance(x, str) for x in loci):
                loci = [np.where(self.markersz == x)[0][0] for x in loci]
            # If an array of boolean values are given, make to a list
            if isinstance(loci, np.ndarray):
                if np.result_type(loci) == 'bool':
                    loci = np.arange(len(loci))[loci]
                loci = loci.tolist()
            # Subset the genotypeArray
            output = genotypeArray(
                geno       = self.geno[:,loci],
                geno_probs = self.geno_probs[:,loci],
                names      = self.names,
                mothers    = self.mothers,
                fathers    = self.fathers,
                markers    = self.markers[loci])
        return output

    def true_partition(self):
        """
        For families of known parentage, usually simulated data, create a full sibship partition
        vector from the identities of known mothers and fathers contained in variables 'mothers'
        and 'fathers' of a genotype array.

        If one or more individuals has at least one missing parent they will be assigned to the
        same full sibship group.

        Returns
        -------
        An array of integers with an entry for each offspring individual. Individuals are labelled
        according to their full sibling group.
        """
        if 'NA' in self.mothers or 'NA' in self.fathers:
            warn('Warning: one or more individuals has at least one parent of unkown identity.')
            warn('All such individuals will be assigned to the same sibship group.')

        # concatenate mother and father names to create a vector of parent pairs.
        #parentage = np.array([str(self.mothers[o]) + '/' + str(self.fathers[o]) for o in range(noffs)])
        possible_families = np.unique(self.parents) # get a list of all unique parent pairs

        partitions = np.zeros(self.size).astype('int') # empty vector of zeros.
        for o in range(self.nfamilies):
            # for every possible family label individuals with an identical integer.
            partitions[self.parents == possible_families[o]] += o

        return partitions

    def write(self, filename, delimiter = ','):
	    """
	    Write data in a genotypeArray to disk. Columns for known mothers and fathers
	    are included, even if these are all NA.

	    Parameters
	    ----------
	    filename: stre
	    	System path to write to.
	    delimiter: str, optional
	    	Column delimiter. Defaults to commas to generate CSV files.

	    Returns
	    -------
	    A text file at the specified path.

	    """
	    # Names of individuals, plus mothers and fathers.
	    nms = np.column_stack([self.names, self.mothers, self.fathers])
	    # format genotype data as a strings
	    output = self.geno.sum(2).astype('str')
	    output[output == '-18'] = 'NA' # coerce missing data to NA

	    output = np.concatenate([nms, output], axis=1)
	    header = 'ID,mother,father,' + ','.join(self.markers)
	    np.savetxt(filename, output, delimiter=delimiter, fmt="%s", header=header, comments='')
