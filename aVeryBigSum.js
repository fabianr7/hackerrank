let ar = [1000000001, 1000000002, 1000000003, 1000000004, 1000000005]

aVeryBigSuM = (ar) => {
    /* let sum = 0;
    ar.forEach(element => {
        sum+=element;
    });
    return sum; */
    return ar.reduce((a, b) => a+b);
}

console.log(aVeryBigSuM(ar));