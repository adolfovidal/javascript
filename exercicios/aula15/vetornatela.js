var value = [8, 1, 7, 4, 2, 9]

console.log(value) 

/*

for (let pos = 0; pos<value.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${value[pos]}`) // percusso para exibição no vetor
}

*/

for(let pos in value ) {
    // console.log(value[pos])
    console.log(`A posição ${pos} tem o valor ${value[pos]}`)
}

