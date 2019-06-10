let matrix = [ [ 11, 2, 4 ], [ 4, 5, 6 ], [ 10, 8, -12 ] ];

console.log(matrix[0].reverse());


DiagonalDifference = (arr) =>{
    return Math.abs(arr.reduce((s, r, i) => s += r[i] - r.reverse()[i], 0));
}

console.log(DiagonalDifference(matrix));