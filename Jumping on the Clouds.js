function jumpingOnClouds(c) {
    let jumps = 0;
    let i = 0;

    while (i < c.length) {

        let count = -1;

        for (let i = 0; i < c.length; i++, count++) {
            if (i < c.length - 2 && c[i + 2] == 0) i++;
        }

        return count;
    }
}

console.log(jumpingOnClouds([0, 0, 1, 0, 0, 1, 0]))