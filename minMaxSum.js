function minSum(array) {
    const minValues = [...array].sort((a,b) => a - b)

    console.log(minValues)

    // Insira variáveis como "min3, min4..." para adicionar valores do array.
    // Atualmente "min1" e "min2" são os 2 valores mais baixos do array.
    const [min1, min2] = minValues

    
    return min1 + min2 + min3 + min4
}

function maxSum(array) {
    const maxValues = [...array].sort((a,b) => b - a)

    console.log(maxValues)
    
    // Insira variáveis como "max3, max4..." para adicionar valores do array.
    // Atualmente "max1" e "max2" são os 2 valores mais altos do array.
    const [max1, max2] = maxValues 

    
    return max1 + max2 + max3 + max4
}

const array = [] // Insira valores para o array...
console.log(minSum(array))
console.log(maxSum(array))