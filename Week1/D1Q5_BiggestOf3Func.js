//5.Write a function that recieves 3 number args and returns the big number
function findBiggest(a,b,c){
    if(a>b && a>c)  return a
    else if(b>c)    return b   
    else            return c
}
let big = findBiggest(10,20,30)
console.log('The biggest number is :',big)
