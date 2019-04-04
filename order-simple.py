a=input()	
a=a.split(',')
for x1 in range(len(a)):   
    a[x1]=float(a[x1])            #Input
def correct(num):
	for numx in range(len(num)-1):
		if (num[numx]<num[numx+1] and numx==len(num)-1):
			return True
		if (num[numx]>num[numx+1]):
			return False
while (correct(a)==False):
	for x2 in range(len(a)-1):
		if (a[x2]>a[x2+1]):
			a[x2],a[x2+1]=a[x2+1],a[x2]
for out in a:
	print(out,)