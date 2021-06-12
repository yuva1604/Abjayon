function leftRotate(arr, d,n) {
d=d%n
for (var i = 1; i < d+1; i++) {
    arr.push(arr.shift());
}
return arr;
}

arr=[1,2,3,4,5]
var d=2
var n=5

console.log(leftRotate(arr,d,n));