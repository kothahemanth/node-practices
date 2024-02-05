let arr = [2,3,4,5,6];
console.log(arr);
function add(a){
    this.arr = a;
    let sum = 0;
    for(i=0;i<this.arr.length;i++)
    {
        sum = sum + this.arr[i];
    }
    console.log("sum is: "+sum);
}
add(arr)