len=prompt("enter array length:")
arr=[]
for(var i=0; i<len; i++) {
	arr[i] = prompt('Enter array ' + (i+1));
}
k=len/2
a=[]
var count=[];
for (var i = 0; i < len; i++) {
  var num = arr[i];
  count[num] = count[num] ? count[num] + 1 : 1;
 a.push(count[num])
}

x=Math.max(...a)
if (x>k){
    let index_x=(a.indexOf(x))
    
    console.log(arr[index_x])
}
else{
    console.log("No Majority Elements")
}