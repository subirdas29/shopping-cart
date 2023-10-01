document.getElementById('btn-case-plus').addEventListener('click',function(){
    const caseValue = document.getElementById('input-value-case')
    const newCaseValue = parseInt(caseValue.value);
    const updateCaseValue = newCaseValue +1;
    caseValue.value = updateCaseValue;
    
    const casePrice = document.getElementById('case-price')
    const updateCasePrice = caseValue.value * 59;
    casePrice.innerText = updateCasePrice
})

document.getElementById('btn-case-minus').addEventListener('click',function(){
    const caseValue = document.getElementById('input-value-case')
    const newCaseValue = parseInt(caseValue.value);
    const updateCaseValue = newCaseValue -1;
    caseValue.value = updateCaseValue;

    const casePrice = document.getElementById('case-price')
    const updateCasePrice = caseValue.value * 59;
    casePrice.innerText = updateCasePrice
})

