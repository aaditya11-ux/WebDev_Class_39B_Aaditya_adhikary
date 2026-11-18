let purchasing_amount=100;
let actual_amount;
if (purchasing_amount>100){
    actual_amount=purchasing_amount-((20/100)*purchasing_amount);
    console.log(actual_amount);
}else if(purchasing_amount>50){
    actual_amount=purchasing_amount-((10/100)*purchasing_amount);
    console.log(actual_amount);
}else{
    console.log(purchasing_amount);
}