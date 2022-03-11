let indexOfNumber = document.querySelector('input#fnumber')
let listForm =  document.querySelector('select#flist')
let accountResult = document.querySelector('div#res')
let valueOfNumber = []

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
    if(isNumber(indexOfNumber.value) && !inList(indexOfNumber.value, valueOfNumber)) {
        valueOfNumber.push(Number(indexOfNumber.value))
        let optionsElement = document.createElement('option')
        optionsElement.text = `Valor ${indexOfNumber.value} adicionado.`
        listForm.appendChild(optionsElement)
        accountResult.innerHTML = ''
    } else {
        window.alert('Valor inválido ou já encontrado na lista')
    }
    indexOfNumber.value = ''
    indexOfNumber.focus()
}

function finalizar() {
    if (valueOfNumber.length == 0) {
        windows.alert('Adicione valores antes de finalizar!')
    } else {
        let totalOfElements = valueOfNumber.length
        let biggestElement = valueOfNumber[0]
        let smallestElement = valueOfNumber[0]
        let sumOfAllElements = 0
        let averageOfAllElements = 0
        for(let positionElement in valueOfNumber) {
            sumOfAllElements += valueOfNumber[positionElement]
            if (valueOfNumber[positionElement] > biggestElement)
                biggestElement = valueOfNumber[positionElement]
            if (valueOfNumber[positionElement] < smallestElement)
                smallestElement = valueOfNumber[positionElement]
        }
        averageOfAllElements = sumOfAllElements / totalOfElements
        accountResult.innerHTML = ''
        accountResult.innerHTML += `<p> Ao todo, temos ${totalOfElements} números cadastrados.</p>`
        accountResult.innerHTML += `<p> O maior valor informado foi ${biggestElement}.</p>`
        accountResult.innerHTML += `<p> O menor valor informado foi ${smallestElement}.</p>`
        accountResult.innerHTML += `<p> Somando todos os valores, temos ${sumOfAllElements}.</p>`
        accountResult.innerHTML += `<p> A média dos valores digitados é ${averageOfAllElements}.</p>`
    }
}