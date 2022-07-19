 let range=8;
 for(let num=1;num<=range;num++)
 {
     let count=0;
     for( let i=1;i<=num;i++)
 {
    let r=num%i;
    if (r==0)
    {
        count++;
    }
 }
    if (count==2)
    {
    console.log("the number",num, "is a prime number");
    }
}
