var n=10;

function createFibonacci(n){
    if(n<=1){
        return n;
    }
    else{
        return createFibonacci(n-1)+createFibonacci(n-2);
    }
    
}

if(n <=0) {
    console.log('provide positive integer.');
}
else {
    for(let i = 0; i < n; i++) {
        console.log(createFibonacci(i));
    }
}