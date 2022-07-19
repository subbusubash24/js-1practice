let num = 153;
let temp=num;
p=0;
x=0;

while(temp!=0)
{
let lastDigit=temp%10;
p=p+1;
temp=(temp-lastDigit)/10;
}

temp= num;
while(temp!=0)
{ lastDigit=temp%10;
x=x+(lastDigit**p);
temp=(temp-lastDigit)/10;
}
if(x==num)
{
    console.log(num + " Is an Armstrong number");
}
else{
    console.log(num + " Is Not an Armstrong number");
}