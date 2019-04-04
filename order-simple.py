a=input()	
a=a.split(',')
for x1 in range(len(a)):             #输入
    a[x1]=float(a[x1])            
def correct(num):                 
	for numx in range(len(num)-1):   #判断顺序是否正确
		if (num[numx]<num[numx+1] and numx==len(num)-1):
			return True
		if (num[numx]>num[numx+1]):
			return False
while (correct(a)==False):           #暴力排序
	for x2 in range(len(a)-1):
		if (a[x2]>a[x2+1]):
			a[x2],a[x2+1]=a[x2+1],a[x2]
for out in a:
	print(out,)
