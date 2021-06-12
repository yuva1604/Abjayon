function leftRotate(arr, d,n) {
d=d%n
for (var i = 1; i < d+1; i++) {
    arr.push(arr.shift());
}
return arr;
}

d=prompt("enter array length:");
n=prompt("enter how many times rotate:");
arr=[]
for(var i=0; i<d; i++) {
	arr[i] = prompt('Enter Element ' + (i+1));
}

console.log(leftRotate(arr,d,n));
