import numpy as np
import os
import time as tm
import matplotlib.pyplot as plt

def log_gp(X_train, Y_train, lin, mean, var, gp, path=None):
    name = "GP_log.txt"
    if path is not None:
        name = os.path.join(path, name)

    else:
        with open(name, "w") as f:
            f.write(f'#===============LOG of Gaussian Process==============\n\n')
            f.write(str(gp))


def log_bo(bayOpt, path):
    path = os.path.join(path, str(np.random.randn(1)) + "_test.txt")
    f = open(path, "w")
    f.write(str(bayOpt))
    f.close()



class time_log():
    """
    Time logger class to being able to take the time required for an optimization.
    ...

    Attributes:
    -----------
        start : float (defalt __call__)
        intervall : list (default start)
        end : float (default None)
        count : int (default 0)

    Methods
    --------
    """

    def __init__(self, start=tm.time()):
        """
        When created it created the starting time for the measures
        start : float (defalt __call__)
            Time of the call
        intervall : list (default start)
            List of the different calls
        end : float (default None)
            Time of the end
        count : int (default 0)
            Counter of the calls
        """
        self.start = start
        self.intervall = [start]
        self.end = None
        self.count = 0

    def time(self, t=tm.time()):
        self.intervall.append(t - self.intervall[self.count])
        self.count += 1

    def time_end(self):
        """
        Compute the ending e final time
        """
        fin=tm.time()
        self.time(t=fin)
        self.end = fin

    def total(self):
        if self.end is None:
            self.time_end()
        return str(self.end - self.start)

    def __str__(self):
        start = f'Time: {str(self.end - self.start)} seconds\n'
        return start

class Observer():

    def __init__(self, type_opt):
        self.type=type_opt
        self.best={}
        self.iterator=iter(self)
        self.all=[]

    def __iter__(self):
        self.iterations = 0
        return self

    def __next__(self):
        it = self.iterations
        self.iterations += 1
        return it

    def compute_distance(self):
        x=self.all
        tmp=[]
        for i in range(len(x)-1):
            tmp.append(np.linalg.norm(x[i] - x[i + 1]))
        return tmp


    def compute_convergence(self):
        values, rep, conv = [], [], []
        dic=self.best
        for i in dic:
            values.append(dic[i][0][0])
            rep.append(dic[i][1])
            conv.append(np.full(dic[i][1], dic[i][0][0]))
        return (values, rep, np.concatenate(conv, axis=0))

    def convergence_plot(self, conv):
        n = len(conv)

        plt.figure()
        ax=plt.subplot(1,2,1)
        ax.set_title("Convergence Plot")
        ax.plot(np.arange(1, n + 1, 1), conv, color="red", linestyle="--")
        ax.scatter(np.arange(1, n + 1, 1), conv, color="red",label="Y")
        ax.set(xlabel="Iteration", ylabel="y value")
        ax.legend()

        ax1=plt.subplot(1,2,2)
        dist=self.compute_distance()
        ax1.set_title("Distance Plot")
        ax1.plot(np.arange(2, n+1 , 1), dist,color="Black")
        ax1.scatter(np.arange(2, n+1 , 1),dist,color="Black", marker="o",label="d")
        ax1.set(xlabel="Iteration", ylabel="d([x_n]-x[n-1])")
        ax1.legend()

        plt.show()

    def plot(self):
        _,_,conv=self.compute_convergence()
        self.convergence_plot(conv)

    def observe(self, value, proposition):

        def security_check(best, value):
            if np.squeeze(best[0])<=np.squeeze(value):
                return False
            else:
                return True

        self.all.append(proposition)

        #self.all.append(value) devo passare le x non le y
        if hasattr(self, "flag"):
            index=str(len(self.best)-1)
            best=self.best[index]

            if not security_check(best,value):
                self.best[index][1] += 1
            else:
                self.best[str(next(self))]=[value,1]
        else:
            self.flag=True
            self.best[str(next(self))] = [value, 1]

    def remove_observation(self):
        if hasattr(self, "iterations"):
            self.iterations-=1
        else:
            print("No Observation pending")






