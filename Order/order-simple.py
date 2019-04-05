def correct(num):                 
	for numx in range(len(num)-1):
		if (num[numx]>num[numx+1]):
			return False
		elif (numx==len(num)-2):
			return True
a=input()	
a=a.split(',')
for x1 in range(len(a)):
    a[x1]=float(a[x1])
while (correct(a)==False):           
	for x2 in range(len(a)-1,0,-1):
		max=0;
		for x3 in range(x2+1):
			if (a[x3]>a[max]):
				max=x3
		a[max],a[x2]=a[x2],a[max]
for out in a:
	print(out,)
	
