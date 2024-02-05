const people = [
    {name: 'Alice', age: 30},
    {name: 'Bob', age: 25},
    {name: 'Charlie', age: 35},
    {name: 'David', age: 28},
];

const  uppercaseNames= people.map(person => person.name.toUpperCase());
console.log('Uppercase Names:', uppercaseNames);