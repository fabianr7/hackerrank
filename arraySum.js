var ar = [1,2,3,4,5,6];

function arraySum(ar){
    var sum = 0;
    ar.forEach(element => {
        sum+= element;
        console.log(sum)
    });
}

arraySum(ar);