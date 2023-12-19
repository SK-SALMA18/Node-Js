// let number=[1,2,3,4,5,6,7,8,9,10]
// let evenNumber=number.filter((num=>num%2===0));
// console.log(evenNumber)

// let number=[1,2,3,4,5,6,7,8,9,10]
// let evenNumber=number.filter((num=>num%2!=0));
// console.log(evenNumber)

// let names=['vasu','salma','karishma','divya','lakshmi']
// let Lnames=names.filter((names=>names.length==4));
// console.log(Lnames)

let Arr=[
    {
        name1:'salma',
        age:22,
        designation:'software developer'
    },
    {
        name1:'vasu',
        age:22,
        designation:'software developer' 
    },
    {
        
        age:22
        
    },
];
let filterArr=Arr.filter((obj=>obj.hasOwnProperty("name1")));
console.log(filterArr)