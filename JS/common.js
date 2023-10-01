function amountElement (elementId){
    const phonecaseTotal = document.getElementById(elementId)
    const updateSubTotal = parseInt(phonecaseTotal.innerText);
    return updateSubTotal;
}

function calculatesubTotal(){
    const phoneTotal = amountElement('phone-price')
    const caseTotal = amountElement('case-price')

    const subTotal = phoneTotal + caseTotal;
    const Total = document.getElementById('totalSub')
    Total.innerText = subTotal;

    
    const tax = document.getElementById('tax')
    tax.innerText= parseFloat((subTotal * 0.1).toFixed(2))

    const totalAmount = document.getElementById('totalAmount')
    totalAmount.innerText = parseFloat(Total.innerText) + parseFloat(tax.innerText)

}