let row = 4, col = 6;
function Path(matrix)
{
	let res = -1;
	for(let i = 0; i < col; i++)
		res = Math.max(res, matrix[0][i]);
	for(let i = 1; i < row; i++)
	{
		res = -1;
		for(let j = 0; j < col; j++)
		{
			
			
			if (j > 0 && j < col - 1)
				matrix[i][j] += Math.max(matrix[i - 1][j],
							Math.max(matrix[i - 1][j - 1],
									matrix[i - 1][j + 1]));

			
			else if (j > 0)
				matrix[i][j] += Math.max(matrix[i - 1][j],
									matrix[i - 1][j - 1]);

			
			else if (j < col - 1)
				matrix[i][j] += Math.max(matrix[i - 1][j],
									matrix[i - 1][j + 1]);
			res = Math.max(matrix[i][j], res);
		}
	}
	return res;
}


let matrix = [ [ 10, 10, 2, 0, 20, 4 ],
			[ 1, 0, 0, 30, 2, 5 ],
			[ 0, 10, 4, 0, 2, 0 ],
			[ 1, 0, 2, 20, 0, 4 ] ];

console.log(Path(matrix));