let num = [5, 8, 2, 9, 3]
/*
num[5] = 18 adicionar um elemento, através do índice
num.push(22) aicionar um elemnto no ultimo índice
num.length comprimento do array
num.sort(num)
*/

num.push(1)
num.sort()

/*
num.sort()
num.push()
a ordem das linhas influencia no resultado
*/ 

console.log(`Nosso vetor é o ${num}`)
console.log(num)
console.log(`O vetor tem ${num.length} elementos`)
console.log(num[0])
console.log(`O primeiro elemento do vetor é ${num[0]}`)

let pos = num.indexOf(8)
// let pos = num.indexOf(4)
if (pos == -1) {
    console.log('O valor não foi encontrado!')
} else{
    console.log(`O valor 8 está na posição ${pos}`)    
}
console.log(`O valor está na posição ${pos}`)