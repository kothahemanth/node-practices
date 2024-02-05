let a = "She sells sea shells on the sea shore";
let count = 1;
let count1=0;
for(let i of a){
    if(i == " ")
    {
        count1++;
    }
    count++;
}
console.log(count +" letters "+ count1 +" words ")