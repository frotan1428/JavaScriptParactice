function Count (){
    let number= document.querySelector("#text1").value;

    if(!number  || isNaN(number) || number<1){
        alert("please Enter  a Positive naumber");
        return;
    }

    number =Number(number);
    let divded=0;

    for(i=2; i<number; i++){
       if( number % i==0){
            divded++;
       }
  
    }

    let message ="This is Prime Number"

    if(divded>0){
        message=`This number is not primeNumber because it  has ${divded}   factors`
    }
    document.querySelector("#result").innerHTML=message;
}