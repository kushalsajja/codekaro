function emi(){
    let amount = document.getElementById('amount');
    // console.log("amount entered is"+ " " +amount.value);
    let tenure = document.getElementById('tenure');
    // console.log("tenure entered is"+ " " +tenure.value);
    let rate = document.getElementById('interest');
    // console.log("Rate of interested entered is"+ " " +interest.value);

    let n=tenure.value*12
    // console.log(n);

    // !principal amount declaration
    let p=amount.value;
    // console.log("amount is"+p);

    // calculation of r in decimals
    let r=(interest.value/12)/100;
    // console.log(r);

    // calculation of division part of formula ((1+r)^n/((1+r)^n)-1)
    res=Math.pow((1+r),n);
    // console.log("res"+res);

    // calculation of division part of formula ((1+r)^n/((1+r)^n)-1)
    div=(res)/(res-1);
    // console.log("divisor "+div);

    // calculation of emi
    let emid=p*r*div;
    // console.log(emid);

    

    document.getElementById('vikas').innerText='Your Monthly EMI Is Rs'+" "+emid.toFixed(2);



}