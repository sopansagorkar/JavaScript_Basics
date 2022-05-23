
const calculator=require('../homeTask3/calculator.js');
const months=14;
const principle=10000;
var SI;
var CI;
function calculateInterest(){

    if(months<12){
        SI=(principle*6*months)/(100*12);
        console.log("Simple Interest is = "+SI);
    }
    else{
        CI = principle * (Math.pow((1 + 5.5 / 100), months));
        console.log("Compond Interest is = "+CI);
    }
}
calculateInterest();
