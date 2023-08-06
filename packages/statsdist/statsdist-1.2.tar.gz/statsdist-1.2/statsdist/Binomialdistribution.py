import math
import matplotlib.pyplot as plt
from .Generaldistribution import Distribution

class Binomial(Distribution):
    """ Binomial distribution class for calculating and 
    visualizing a Binomial distribution.
    
    Attributes:
        mean (float) representing the mean value of the distribution
        stdev (float) representing the standard deviation of the distribution
        data_list (list of floats) a list of floats to be extracted from the data file
        p (float) representing the probability of an event occurring
        n (int) number of trials
    
    
    TODO: Fill out all functions below
            
    """
    
    
    def __init__(self, probability=.5, size=20):
                
        self.p = probability
        self.n = size
        
        Distribution.__init__(self, mu=self.calculate_mean(), sigma=self.calculate_stdev())
    
                        
    
    def calculate_mean(self):
    
        """Function to calculate the mean from p and n
        
        Args: 
            None
        
        Returns: 
            float: mean of the data set
    
        """
        
        self.mean = self.p * self.n
                
        return self.mean



    def calculate_stdev(self):

        """Function to calculate the standard deviation from p and n.
        
        Args: 
            None
        
        Returns: 
            float: standard deviation of the data set
    
        """
        
        self.stdev = math.sqrt(self.n * self.p * (1 - self.p))
        
        return self.stdev
        
        
    def replace_stats_with_data(self):
    
        """Function to calculate p and n from the data set
        
        Args: 
            None
        
        Returns: 
            float: the p value
            float: the n value
    
        """
    
        self.n = len(self.data)
        self.p = sum(self.data) / self.n
        self.mean = self.calculate_mean()
        self.stdev = self.calculate_stdev()
        
        return self.p,  self.n
    
        
    def plot_bar(self):
        """Function to output a histogram of the instance variable data using 
        matplotlib pyplot library.
        
        Args:
            None
            
        Returns:
            None
        """
                
        plt.bar(x = ['0', '1'], height = [(1 - self.p) * self.n, self.p * self.n], align='center')
        plt.xlabel('data')
        plt.ylabel('frequency')
        plt.title('Bar chart of data')
        plt.plot()
        
        return
        
        
        
    def pdf(self, k):
        """Probability density function calculator for the gaussian distribution.
        
        Args:
            x (float): point for calculating the probability density function
            
        
        Returns:
            float: probability density function output
        """
        
        k = float(k)
        combination = math.factorial(self.n) / (math.factorial(k) * math.factorial(self.n - k)) 
        pdf = combination * (self.p ** k) * (1-self.p)**(self.n-k)
        
        return pdf
        

    def plot_bar_pdf(self):

        """Function to plot the pdf of the binomial distribution
        
        Args:
            None
        
        Returns:
            list: x values for the pdf plot
            list: y values for the pdf plot
            
        """
        
        x = range(self.n+1)
        y = []
        
        for i in x:
            y.append(self.pdf(i))
            
        plt.bar(x, y, align='center')
        plt.xlabel('data points')
        plt.ylabel('probability density')
        plt.title('Bar plot of probability density of data')
        plt.show()

        return x, y
        
    def __add__(self, binomial_2):
        
        """Function to add together two Binomial distributions with equal p
        
        Args:
            binomial_2 (Binomial): Binomial instance
            
        Returns:
            Binomial: Binomial distribution
            
        """
        
        try:
            assert self.p == binomial_2.p, 'p values are not equal'
        except AssertionError as error:
            raise
                
        sum_binomial = Binomial()
        sum_binomial.n = self.n + binomial_2.n
        sum_binomial.p = self.p
        sum_binomial.mean = self.calculate_mean()
        sum_binomial.stdev = self.calculate_stdev()
        
        return sum_binomial
        
        
    def __repr__(self):
    
        """Function to output the characteristics of the Binomial instance
        
        Args:
            None
        
        Returns:
            string: characteristics of the Gaussian
        
        """
        
        return f'mean {self.mean}, standard deviation {self.stdev}, p {self.p}, n {self.n}'