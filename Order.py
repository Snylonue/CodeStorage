def loca(funcl,maxi,insert):         #二分法函数
    min,max=0,maxi
    while (min<max):
        mid=(max+min)//2
        if (insert<funcl[mid]):
            max=mid
        elif (insert>funcl[mid]):
            min=mid
        if(max-min==1):
            return mid
a=input()
a=a.split(',')                     
for x in range(len(a)):
    a[x]=int(a[x])                   #整数list
for x in range(len(a)-1):            #迭代list进行排序（有问题）
    if (a[x]>a[x+1]):
        b=a[:x]
        t=a[x+1]
        point=loca(b,x,a[x+1])
        y=x+1
        while(y>point):
           a[y]=a[y-1]
           y-=y
        a[point]=t
for out in a:                       #输出                     
    print(out)
