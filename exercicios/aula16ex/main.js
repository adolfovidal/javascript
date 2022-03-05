let indexOfNumber = document.querySelector('input#fnumber')
let listForm =  document.querySelector('select#flist')
let accountResult = document.querySelector('div#res')
let value = []

function isNumber(n) {
    if(Number(n >= 1 && Number(n) <= 100)) {
        return true
    } else {
        return false
    }
}

function inList(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if(isNumber(indexOfNumber.value) && !inList(indexOfNumber.value)) {

    } else {
        window.alert('Valor inválido ou já encontrado na lista')
    }
  
}