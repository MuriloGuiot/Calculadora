function Calculator(numero1, numero2, op){
    
    let res
    let num1 = Number(numero1)
    let num2 = Number(numero2)

    switch (op){
        case "+":
            res = num1 + num2 
            break;
        case "-":
            res = num1 - num2 
            break;
        case "*":
            res = num2 * num1
            break
        case "e":
            let contador = 1
            res = num1 * num1
            while (contador < num2 - 1){
                res = res * num1
                contador++
            }
        break;
        }

    if (res == undefined || res > 1000000000000000)
        res = '404'

        return res
}