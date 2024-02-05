const people = [
    {name: 'Alice', age: 30},
    {name: 'Bob', age: 25},
    {name: 'Charlie', age: 35},
    {name: 'David', age: 28},
];

const olderThan30 = people.filter(person => person.age > 30);
console.log('People Older than 30:', olderThan30);