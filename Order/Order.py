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
for x in range(len(a)):
    a[x]=float(a[x])
for x in range(len(a)-1):
    if (a[x]>a[x+1]):
    	if (x==0):
    		a[x],a[x+1]=a[x+1],a[x]
    	else:
    		b=a[:x]
    		t=a[x+1]
    		point=loca(b,t)
    		y=x+1
    		while(y>point):
    			a[y]=a[y-1]
    			y-=y
    		a[point]=t
for out in a:
    print(out,)
