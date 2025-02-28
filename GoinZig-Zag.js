function ZigZag(matrix){
    let m =matrix.length
    let n = matrix[0].length
    let result =[]

    for(let i=0;i<m;i++){
        if(i%2==0){
            for(let j=n-1;j>=0;j--){
                result.push(matrix[i][j])
            }
        }
        else{
            for(let j=0;j<n;j++){
                result.push(matrix[i][j])
            }
        }
    }

    console.log(result.join(" "))
}

let matrix =[
    [1,2,3,4,5],
    [6,7,8,9,1],
    [2,3,4,5,6],
    [7,8,9,1,2]
];
ZigZag(matrix)