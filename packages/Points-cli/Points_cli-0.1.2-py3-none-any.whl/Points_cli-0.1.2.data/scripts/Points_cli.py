#!python

import sys,time
import numpy as np, math
import itertools
import matplotlib.pyplot as plt
from mpl_toolkits import mplot3d
from tqdm import tqdm

class Calc:

    def __init__(self,*args):
        self._args = args
    
    def args(self):
        return self._args
    
    def points_check(self):
        """ This method takes points that are given and checks if they are in the correct format.
            Only one dimensional arrays of three coordinates are allowed."""
        args = self.args()
        if len(args) <= 1: raise TypeError(f"Expected 2 or more arguments but got {len(args)}")
        elif len(args) >= 2:
            for arg in [str(type(arg)) for arg in args]:
                if arg != "<class 'numpy.ndarray'>":
                    raise ValueError(f"Expected 'numpy.ndarray' but got {arg}")
            for arg in args:
                if arg.shape != (3,):
                    raise TypeError(f"Expected (3,) shaped array but got {arg.shape}")
        return args
  
    def points_distances(self):
        """ This method takes the correct points provided by points_check and calculates the distances between them.
            Creates unique identities for each entry and stores them in a dictionary 'ind'.
            Stores all those distances in a dictionary 'distances' with their unique ids. """
        args = self.points_check()
        ind = {f"{k}":v for v,k in enumerate(args)}
        tot = math.factorial(len(args))/(math.factorial(2)*math.factorial(len(args)-2))
        distances = {}
        for i,j in tqdm(itertools.combinations(args,r=2), total=int(tot)):
            k = i == j
            if k.all() == False:
                dist = np.sqrt((i[0]-j[0])**2 + (i[1]-j[1])**2 + (i[2]-j[2])**2)
                k,m = ind[f"{i}"], ind[f"{j}"]
                upd1,upd2 = {f"{k}-{m}":round(dist,4)}, {f"{m}-{k}":round(dist,4)}
                distances.update(upd1)
                distances.update(upd2)
        return distances

    def points_angles(self):
        """This method takes the correct points provided by points_check and creates 
           unique identities for each entry and stores them in a dictionary 'ind'.
           Stores all those angles in a dictionary angles with their unique ids."""
        args = self.points_check()
        ind = {f"{k}":v for v,k in enumerate(args)}
        tot = math.factorial(len(args))/(math.factorial(len(args)-3))
        angles = {}
        for i,j,k in tqdm(itertools.permutations(args,r=3),total=int(tot)):
            m,n,p = ind[f"{i}"], ind[f"{j}"], ind[f"{k}"]
            test_k1,test_k2 = f"{m}-{n}-{p}", f"{p}-{n}-{m}"
            if test_k1 and test_k2 not in angles.keys():
                upd1,upd2 = {test_k1:0}, {test_k2:0}
                angles.update(upd1)
                angles.update(upd2)
        return angles

class fill_box:
    
    def __init__(self,num_points,dims,centre=(0,0,0)):
        self._num_points = num_points
        self._dims = dims
        self._centre = centre
        
    def dims(self):
        return self._dims

    def centre(self):
        return self._centre

    def num_points(self):
        return self._num_points
   
    def dims_check(self):
        """This method checks if the given dimensions are valid for generating a box of dimensions L*W*H"""
        dims = self.dims()
        if len(dims) < 3: raise TypeError(f"Expected a list of length 3 but got length {len(dims)}")
        elif dims[0] <= 0: raise ValueError(f"Dimensions can't be <= 0")
        elif dims[1] <= 0: raise ValueError(f"Dimensions can't be <= 0")
        elif dims[2] <= 0: raise ValueError(f"Dimensions can't be <= 0")
        return dims
    
    def centre_check(self):
        """This method checks if the given center is valid for generating a box of dimensions L*W*H"""
        centre = self.centre()
        if len(centre) < 3: raise TypeError(f"Expected a list of length 3 but got length {len(centre)}")
        return centre

    def create_box(self):
        """This method creates a box with lower and upper boundaries and a defined centre"""
        d = self.dims_check()
        x,y,z = self.centre_check()
        lower,upper = [0,0,0],[0,0,0]
        lower[0],upper[0] = x-(d[0]/2)+0.005, x+(d[0]/2)+0.005
        lower[1],upper[1] = y-(d[1]/2)+0.005, y+(d[1]/2)+0.005
        lower[2],upper[2] = z-(d[2]/2)+0.005, z+(d[2]/2)+0.005
        box_size = (lower,upper)
        return box_size
    
    def rand_points(self,start=0,stop=None,step=1):
        """This method fills the box with random points and returns the list of points.
           The list of points are arrays which are formatted to be easier to display but their actual value is retained.
           A slice of the points to be given can be decided by providing start,stop and step arguments respectively in the method.
           NOTE: Any random number generator that you choose must produce ONLY real numbers."""
        ind = slice(start,stop,step)
        num_points = self.num_points()
        box_size = self.create_box()
        list_points = []
        lower,upper = box_size
        for i in tqdm(range(num_points)):
            float_format = "{:.4f}".format
            np.set_printoptions(formatter={'float_kind':float_format})
            list_points.append(np.random.default_rng().uniform(lower,upper,3))
        return list_points[ind]

class CLI:
    
    def format_ind(self,index):
        """This method formats the index given from the command line interface"""
        ind = [int(i) for i in index]
        return ind
    
    def format_fl(self,fl):
        """This method formats the floats given from the command line interface"""
        fl = [float(i) for i in fl]
        return fl

    def format_input(self,arg):
        """This method takes input from req() and formats it into either a list or int or float."""
        if len(arg) == 2:
            num_points = int(arg[0])
            dims = [float(i) for i in arg[1]]
            return [num_points,dims]
        elif len(arg) == 3:
            num_points = int(arg[0])
            dims = [float(i) for i in arg[1]]
            centre = [float(i) for i in arg[2]]
            return [num_points,dims,centre]
    
    def req(self):
        """This method obtains the requirements needed to generate points and the box from the command line interface."""
        print("\n\nWe will now ask you to provide the dimensions of the box and the number of points that you want in it.")
        print("\nProvide the dimensions in the format length,width,height i.e 4,5,6\n")
        time.sleep(0.300)
        dims = input("$~ dimensions: ")
        dims = dims.split(',')
        time.sleep(0.300)
        print("""\nWould you like to center your box? \n\n\tIf yes Provide the center in the format x,y,z i.e 0,0,3
                   The default center is 0,0,0 \n\tIf no leave blank and press Enter to continue.\n""")
        pref = input("$~ ")
        if len(list(pref)) != 0:
            centre = pref.split(',')
        time.sleep(0.300)
        print("\nProvide the number of points as an integer without any commas i.e 45789")
        print("\t Choose fewer than 50 points for a smoother experience.\n")
        time.sleep(0.300)
        num_points = input("$~ no. of points: ")
        num_points = int(num_points)
        try:
            centre
        except NameError:
            return num_points,dims
        else:
            return num_points,dims,centre
    
    def interface1(self):
        """This method handles all inputs from the command line interface."""
        print("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx")
        print("xx Welcome to Points!                                                                                xx")
        print("xx Points helps you generate a chosen number of random points in a box of your desired size.         xx")
        print("xx After generation of the points and the box, you have the ability to calculate distances between-  xx")
        print("xx any two points in the box, van de Waals potentials and angles among any three points.             xx")
        print("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx")
        print("\n\n \tIf you are ready type 'Y/y' to continue or 'N/n' to exit")
        def inner():
            ans = input("$~ ")
            if ans in ["Y","y"]:
                print("\n\tOk, Let us begin :)\n")
                print("~"*103, end=' ',flush=True)
                time.sleep(0.500)
                inp = self.format_input(self.req())
                return inp
            elif ans in ["N","n"]:
                print("\nOk, see you next time :)")
            elif ans != "Y" or "N":
                print("\nPlease type Y/N to continue")
                inner()
        return inner()
    
    def interface2(self):
        """This method handles the slicing option given to the user."""
        print(" ",flush=True)
        print("~"*103, end=' ',flush=True)
        time.sleep(0.350)
        print("\n\nBefore we output your box, you have an option to view all or some of the points.")
        time.sleep(0.300)
        print("\n\tTo skip and continue leave blank and press Enter.")
        print("\t\t\t\tOR")
        print("\tProvide a slice in the format start:stop:step i.e 1:10:2\n")
        time.sleep(0.300)
        def inner():
            ans = input("$~ ")
            if len(list(ans)) != 0:
                index = ans.split(':')
                index = self.format_ind(index)
                return index
            else:
                return []
        return inner()
    
    def get_distance(self,points,distances,angles):
        """This method gets the distances of the given points."""
        print("\nTo measure the distance between two points, input the two points as follows a-b i.e 1-2.")
        print("\tTo go back to the menu type 3.\n")
        ans = input(">> ")
        if ans == '3': self.menu(points,distances,angles)
        else:
            try: distances[ans]
            except KeyError:
                print("\nError: Incorrect input or non-existent point!",flush=True)
                time.sleep(0.500)
                self.get_distance(points,distances,angles)
            else:
                print(f"\n---------- DISTANCE={distances[ans]} ----------")
                time.sleep(0.500)
                self.get_distance(points,distances,angles)
    
    def get_angle(self,points,distances,angles):
        """This method gets the angles of the given points."""
        print("\nTo measure the angle, input the three points as follows a-b-c i.e 1-2-3.")
        print("\tTo go back to the menu type 3.\n")
        ans = input(">> ")
        if ans == '3': self.menu(points,distances,angles)
        else:
            try: angles[ans]
            except KeyError:
                print("\nError: Incorrect input or non-existent point!")
                time.sleep(0.500)
                self.get_angle(points,distances,angles)
            else:
                key = ans.split('-')
                key = self.format_ind(key)
                ind = {k:v for k,v in enumerate(points)}
                i,j,k = ind[key[0]], ind[key[1]], ind[key[2]]
                f,e = i-j, j-k
                ijVec,jkVec = np.linalg.norm(f), np.linalg.norm(e)
                ijNorm,jkNorm = f / ijVec, e / jkVec
                res = np.dot(ijNorm,jkNorm)
                ang = 180 - np.degrees(np.arccos(res))
                ang = round(ang,2)
                print(f"\n---------- ANGLE={ang} ----------")
                time.sleep(0.500)
                self.get_angle(points,distances,angles)
    
    def interface_LJ(self):
        """This method is the mini interface fo noble gases in the L-J section."""
        print("\nChoose the noble gas that the points will emulate.")
        print("\tHe","Ne","Arg","Kr","Xe","Ra", "i.e Ne", end=' ')
        print(" \n")
        ans = input(">> ")
        noble = {"He":(2.628,5.465),"Ne":(2.775,36.831),"Arg":(3.401,116.81),"Kr":(3.601,164.56),"Xe":(4.055,218.18),"Ra":(4.36,283)}
        ans = ans.capitalize()
        try: noble[ans]
        except KeyError:
            print("\nError: Incorrect input or undefined noble gas!",flush=True)
            self.interface_LJ()
        else:
           print(f"""\nWould you like to specify L-J parameters? \n\n\tIf yes Provide the parameters in the format \u03C3,\u03B5/\u03BAb.
           The default parameters are {noble[ans]} for {ans} \n\tIf no leave blank and press Enter to continue.\n""")
           pref = input(">> ")
           if len(list(pref)) != 0:
               params = pref.split(',')
               params = self.format_fl(params)
           try: params
           except NameError:
               params = noble[ans]
               return params
           else:
            return params
     
    def interface_Morse(self):
        """This method is the mini interface fo noble gases in the Morse section."""
        print("\nChoose the noble gas that the points will emulate.")
        print("\tHe","Ne","Arg","Kr","Xe","i.e Ne", end=' ')
        print(" \n")
        ans = input(">> ")
        noble = {"He":(12.6,2.92,2.197),"Ne":(51.3,3.09,2.036),"Arg":(118.1,4.13,1.253),"Kr":(149.0,4.49,1.105),"Xe":(226.9,4.73,1.099)}
        ans = ans.capitalize()
        try: noble[ans]
        except KeyError:
            print("\nError: Incorrect input or undefined noble gas!",flush=True)
            self.interface_Morse()
        else:
           print(f"""\nWould you like to specify Morse parameters? \n\n\tIf yes Provide the parameters in the format De/\u03BAb,re,\u03B1.
           The default parameters are {noble[ans]} for {ans} \n\tIf no leave blank and press Enter to continue.\n""")
           pref = input(">> ")
           if len(list(pref)) != 0:
               params = pref.split(',')
               params = self.format_fl(params)
           try: params
           except NameError:
               params = noble[ans]
               return params
           else:
            return params

    def get_LJ(self,points,distances,angles,params):
        """This method gets the vdW Lennard-Jones potential of the given points."""
        params = params
        print("\nTo measure the vdW potential, input the two centers as follows a-b i.e 1-2.")
        print("\tTo choose a different noble gas type 2.")
        print("\tTo go back to the menu type 3.\n")
        ans = input(">> ")
        if ans == '2': self.intrm1(points,distances,angles)
        elif ans == '3': self.menu(points,distances,angles)
        else:
            try: distances[ans]
            except KeyError:
                print("\nError: Incorrect input or non-existent point!",flush=True)
                time.sleep(0.500)
                self.get_LJ(points,distances,angles,params)
            else:
                r = distances[ans]
                print(f"\n--dist={r} angstrom--")
                b,e = params
                v=(4*e*(1.3807*10**-23)*((b/r)**12-(b/r)**6))*(6.02214076*10**23)
                v = round(v,4)
                print(f"\n---------- vdW= {v}J/mol ----------")
                time.sleep(0.500)
                self.get_LJ(points,distances,angles,params)
    
    def get_Morse(self,points,distances,angles,params):
        """This method gets the vdW Lennard-Jones potential of the given points."""
        params = params
        print("\nTo measure the vdW potential, input the two centers as follows a-b i.e 1-2.")
        print("\tTo choose a different noble gas type 2.")
        print("\tTo go back to the menu type 3.\n")
        ans = input(">> ")
        if ans == '2': self.intrm2(points,distances,angles)
        elif ans == '3': self.menu(points,distances,angles)
        else:
            try: distances[ans]
            except KeyError:
                print("\nError: Incorrect input or non-existent point!",flush=True)
                time.sleep(0.500)
                self.get_Morse(points,distances,angles,params)
            else:
                r = distances[ans]
                print(f"\n--dist={r} angstrom--")
                De,re,a = params
                A,B = -2*a*(r-re), -a*(r-re)
                v=De*(1.3807*10**-23)*(math.exp(A)-2*math.exp(B))*(6.02214076*10**23)
                v = round(v,4)
                print(f"\n---------- vdW= {v}J/mol ----------")
                time.sleep(0.500)
                self.get_Morse(points,distances,angles,params)

    def intrm1(self,points,distances,angles):
        params = self.interface_LJ()
        self.get_LJ(points,distances,angles,params)

    def intrm2(self,points,distances,angles):
        params = self.interface_Morse()
        self.get_Morse(points,distances,angles,params)

    def menu(self,points,distances,angles):
        """This method controls menu options."""
        print("\nType the 'number' to choose from the menu.")
        print("\n\t 1. Measure Distance")
        print("\t 2. Measure Angle")
        print("\t 3. vdW Lennard-Jones")
        print("\t 4. vdW Morse")
        print("\t 5. Exit Points")
        ans = input("$~ ")
        if ans == '1': self.get_distance(points,distances,angles)
        elif ans == '2': self.get_angle(points,distances,angles)
        elif ans == '3': self.intrm1(points,distances,angles)
        elif ans == '4': self.intrm2(points,distances,angles)
        elif ans == '5': sys.exit()
        else: self.menu(points,distances,angles)
   
    def interface3(self,points,distances,angles):
        """ This method intergrates the interaction between the plot and the user.
            The plot will display indices of points when mouse hovers.
            The user can provide input to get the measurements between points
            Part of this code is found here:
                https://stackoverflow.com/questions/7908636/possible-to-make-labels-appear-when-hovering-over-a-point-in-matplotlib"""
        norm = plt.Normalize(1,4)
        cmap = plt.cm.RdYlGn
        x,y,z = zip(*points)
        c = np.random.randint(1,5,size=len(x))
        labels = []
        for i,j in enumerate(points):
            labels.append(i)
        fig,ax = plt.subplots()
        ax = plt.axes(projection='3d')
        sc = ax.scatter3D(x,y,z, c=c, s=30, edgecolor='black', cmap=cmap)
        annot = ax.annotate("", xy=(0,0), xytext=(20,20),textcoords="offset points",
                    bbox=dict(boxstyle="round", fc="w"),
                    arrowprops=dict(arrowstyle="->"))
        annot.set_visible(False)
        
        def update_annot(ind):
            pos = sc.get_offsets()[ind["ind"][0]]
            annot.xy = pos
            text = labels[ind["ind"][0]] 
            annot.set_text(text)
            annot.get_bbox_patch().set_facecolor(cmap(norm(c[ind["ind"][0]])))
            annot.get_bbox_patch().set_alpha(0.4)
        
        def hover(event):
            vis = annot.get_visible()
            if event.inaxes == ax:
                cont, ind = sc.contains(event)
                if cont:
                    update_annot(ind)
                    annot.set_visible(True)
                    fig.canvas.draw_idle()
                else:
                     if vis:
                        annot.set_visible(False)
                        fig.canvas.draw_idle()
        
        fig.canvas.mpl_connect("motion_notify_event", hover)
        fig.canvas.set_window_title("Points-cli")
        plt.show(block=False)
        self.menu(points,distances,angles)
        plt.show()

def main():
    block = CLI()
    block1 = block.interface1()
    if str(type(block1)) == "<class 'NoneType'>":
        sys.exit()
    else:
        points = fill_box(*block1)
        block2 = block.interface2()
        print("\n\t-----This might take a few minutes depending on the number of points chosen.-----")
        if len(block2) != 0:
            print("\nGenerating points......")
            points = points.rand_points(*block2)
        else:
            print("\nGenerating points......")
            points = points.rand_points()
        calc = Calc(*points)
        print("\nCalculating distances......")
        distances = calc.points_distances() 
        print("\nGenerating angles......")
        angles = calc.points_angles()
        block3 = block.interface3(points,distances,angles)
        

if __name__ == '__main__': main()

