 const Count=() => {

    const num= document.querySelector("#text1").value;

    if(!num  || isNaN(num) ||num<0){
        alert("Please Enter a positive Number");
        return;
    }

    let prodcut=1;

    for(let i=num; i>0; i--){

        prodcut = prodcut*i;
    }
    document.querySelector("#result").innerHTML=prodcut;

 }