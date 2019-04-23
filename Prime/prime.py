import numpy
def check_prime(num):
	t=2
	max=int(numpy.sqrt(num))
	if (num<=0 or num==1 or num%2==0):
		return False
	elif (num==3):
		return True
	else:
		while (t<=max):
			if (num%t==0):
				return False
			elif (t==max):
				return True
			else:
				t+=1
x=int(input())
a=list(range(x+1))
b=list(filter(check_prime,a))
print(b)
