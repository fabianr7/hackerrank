var steps = 12;
var path = "DDUUDDUDUUUD"

function countingValleys(n, s) {
    var a = 0;
    var valleys = 0;
    var under = false;
    for(var i=0; i<path.length; i++){
        if(path.charAt(i)=="U"){
            a++
            console.log("Arriba");
        }
        else{
            a--
            console.log("Abajo");
        }
        if(a<0){
            under = true;
        }

        if(under == true){
            if(a>=0){
                valleys++
                under = false
            }
        }
        console.log(a);
        console.log(valleys);
    }
}

countingValleys(steps, path);