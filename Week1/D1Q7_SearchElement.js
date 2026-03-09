//7.Write a function that recieves an array and search element as args and returns the index of that search element in 
//array . It should return 'not found' if the element is not present in the array.
function findIndex(array,searchElement) {
    for (let i = 0; i < array.length; i++) {
        if(array[i] === searchElement) {
            return i;
        }
    }
    return 'not found';
}
let index = findIndex([1,2,3,4,5],3);
console.log('The index of the element is :',index) 