def loca(funcl,insert):
    min,max=0,len(funcl)-1
    while (True):
    	mid=(max+min)//2
    	if(max-min<=1):
    		return mid
    	else:
    		if (insert<funcl[mid]):
    			max=mid
    		elif (insert>funcl[mid]):
    			min=mid
a=input()	
a=a.split(',')
for x1 in range(len(a)):
	a[x1]=float(a[x1])
for x2 in range(len(a)-1):
    if (a[x2]>a[x2+1]):
    	if (x2==0):
    		a[x2],a[x2+1]=a[x2+1],a[x2]
    	else:
    		b=a[:x2+1]
    		t=a[x2+1]
    		point=loca(b,t)
    		for x3 in range(x2+1,point,-1):
    			a[x3]=a[x3-1]
    		a[point]=t
for out in a:
    print(out,)
