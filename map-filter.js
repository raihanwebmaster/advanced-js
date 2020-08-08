// map
const numbers = [2,3,33,44];
const output = [];
            
for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    const result = element * element;
    output.push(return);
}


 numbers.map(function(element, index , array ){
     console.log(element, index, array );
 });

 const square = element => element * element;
 const square = x  => x * x ;
 
 const result = numbers.map(x => x * x);
 


 const result = numbers.map(function(element){
     return element * element;
 })
 
 console.log(result);

//  filter
const result = numbers.filter (x => x >5 );
console.log(result);
6, 7 ,8 
// find
const isThere = numbers.find (x => x > 5 );
console.log(isThere);
6