function getmultab() {
    let indexOfNumber = document.querySelector('input#ntxt')
    let areaOfMultTable = document.querySelector('select#selecttab')
    if (indexOfNumber.value.length == 0) {
        window.alert('Please, enter a number!') // alerta de caixa sem elemento
    } else {
        let typedNumber = Number(indexOfNumber.value)
        let counter = 1
        areaOfMultTable.innerHTML = ''
        while (counter <= 10) {
            let optionsElement = document.createElement('option')
            optionsElement.text = `${typedNumber} x ${counter} = ${typedNumber*counter}`
            optionsElement.value = `multtable${counter}` // item selecioando
            areaOfMultTable.appendChild(optionsElement)
            counter++ // incrimento
        }
    }

}