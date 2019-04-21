# include<iostream>
using namespace std;
int location(float a[],int maxin,int num)
{
	int max=maxin,min=0,mid;
	for (;;)
	{
		mid=(max+min)/2;
		if (max-min<=1)
		{
			return mid;
			break;
		}
		else if (num>a[mid])
		{
			min=mid;
		}
		else if (num<a[mid])
		{
			max=mid;
		}
	}
}
int main()
{
	int maxin;
	cin>>maxin;
	float a[maxin];
	for (int i=0;i<maxin;i++)
	{
		cin>>a[i];
	}
	for (int i=0;i<maxin;i++)
	{
		if (a[i]>a[i+1])
		{
			if (i=0)
			{
				a[i]=a[i]+a[i+1];
				a[i+1]=a[i]-a[i+1];
				a[i]=a[i]-a[i+1];
			}
			else
			{
				float b[i];
				float t=a[i+1];
				for (int j=0;j<=i;j++)
				{
					b[j]=a[j];
				}
				int point=location(b,i,t);
				for (int j=i+1;j>point;j--)
				{
					a[j]=a[j-1];
				}
				a[point]=t;
			}
		}
	}
	for (int i=0;i<maxin;i++)
	{
		cout<<a[i]<<endl;
	}
	return 0;
}
