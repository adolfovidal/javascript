function getmultab() {
    let indexOfNumber = document.querySelector('input#ntxt')
    let areaOfMultipicationTable = document.querySelector('select#selecttab')
    if (indexOfNumber.value.length == 0) {
        window.alert('Please, enter a number!')
    } else {
        let typedNumber = Number(indexOfNumber.value)
        let counter = 1
        while (counter <= 10) {
            let optionElement = document.createElement('option')
            optionElement.text = `${typedNumber} x ${counter} = ${typedNumber*counter}`
            areaOfMultipicationTable.appendChild(optionElement)
            c++
        }
    }

}