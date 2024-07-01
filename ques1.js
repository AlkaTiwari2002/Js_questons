// Write a function to generate the first n numbers in the Fibonacci sequence.

function fibonacciSequence(n){
    let sequence = [];
    if (n<=0){
        return sequence;
    } 
    sequence.push(0);
    if(n>1){
        sequence.push(1)
    }
    for(i = 2; i<n; i++){
        sequence.push[i-1] + sequence[i-2];
    }
    return sequence;
}
let n = 10;
let nums = fibonacciSequence(n)
console.log(nums);









