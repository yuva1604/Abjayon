let arr=[]
function matrix(matrix) {
    for (let row = 0; row < matrix.length; row++) {
        let c=0
        for(let j=0;j<matrix[row].length;j++){
        if (matrix[row][j]===1){
            c=c+1
        }
        }
        arr.push(c)
    }
    let max = Math.max( ...arr)
    console.log(arr.indexOf(max))
}
let mat = [[0,1,1,1], [0,0,1,1],[1,1,1,1],[0,0,0,0]];
matrix(mat);