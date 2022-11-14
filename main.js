let is_pair = (a) => {
    let module = a % 2;
    if (module == 0) {
        return true;
    }
    else {
        return false;
    }
}

let arr = ['a','b'];
let y = '1';

let foo = (array, x) => {
    let l = array.length;
    for (i=0; i < l; i++) {
        if (x === array[i]) {
            return i;
        }
    }
    return null;
}

let factorial = (a) => {
    if (a == 1) {
        return a;
    }
    else {
        return a * factorial(a-1);
    }
}

let factorial_ite = (a) => {
    if (a == 1) {
        return a;
    }
    else {
        let value = 1;
        for (i=1; i<=a; i++) {
            value = i * value;
        }
        return value;
    }
}