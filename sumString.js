function sumString(num1, num2) {

    let cero = '0';
    let ceros1 = [];
    let ceros2 = [];
    let num1WithValues = [];
    let num2WithValues = [];
    
    const num1Array = Array.from(num1);
    const num2Array = Array.from(num2);

    for(let i = num1Array.length; i > 0; i--){
        cero = '0'
        cero = cero.repeat(i-1)
        ceros1.push(cero)
    }

    for(let i = num2Array.length; i > 0; i--){
        cero = '0'
        cero = cero.repeat(i-1)
        ceros2.push(cero)
    }

    for(let i = 0; i < num1Array.length; i++){
        let aux = num1Array[i] + ceros1[i];
        num1WithValues.push(aux)
    }

    for(let i = 0; i < num2Array.length; i++){
        let aux = num2Array[i] + ceros2[i];
        num2WithValues.push(aux)
    }

    const allValues = [...num1WithValues, ...num2WithValues];

    const result = allValues.reduce((acc, curr) => Number(acc) + Number(curr));

    return result.toString();
}

console.log(sumString('17221516564865626', '45584652648428'));