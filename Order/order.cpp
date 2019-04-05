#include <bits/stdc++.h>
using namespace std;
bool order(float num[],int number)
{
	for(int i=0;i<=number;i++)
	{
		if(num[i]>num[i+1])
		{
			return false;
		}
		else if(i==number)
		{
			return true;
		}
	}
}
int main()
{
	int maxin;
	cin>>maxin;
	float a[maxin];
	for(int i=0;i<maxin;i++)
	{
		cin>>a[i];
	}
	for(int i=maxin-1;i>=0;i--)
	{
		if(order(a,maxin-1)==true)
		{
			break;
		}
		int max=0;
		float t;
		for(int j=0;j<=i;j++)
		{
			if(a[j]>a[max])
			{
				max=j;
			}
		}
		t=a[max];
		a[max]=a[i];
		a[i]=t;
	}
	for (int i=0;i<maxin;i++)
	{
		cout<<a[i]<<endl;
	}
	return 0;
}
