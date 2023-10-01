// document.getElementById('btn-plus').addEventListener('click',function(){
//     const inputValue = document.getElementById('input-value')
//     const prevValue = parseInt(inputValue.value);
//     const newValue = prevValue +1;
//     inputValue.value = newValue;
// })




function plusMinus(isIncrease){
    const inputValue = document.getElementById('input-value')
    const prevValue = parseInt(inputValue.value);
    // console.log(prevValue)
    console.log(isIncrease)
    let newValue;

    if(isIncrease === true){
         newValue = prevValue + 1;
         
    }
    else{
        newValue = prevValue - 1;
       
    }
    inputValue.value = newValue;
    return newValue;
    }

  
    function totalNumber (newValue){
        const iphonePrice = document.getElementById('price');

        const newPrice = newValue * 1219;
    
        iphonePrice.innerText = newPrice
    }


document.getElementById('btn-plus').addEventListener('click',function(){

    const newValue = plusMinus(true)
    
    totalNumber(newValue);

})

document.getElementById('btn-minus').addEventListener('click',function(){

    const newValue = plusMinus(false)

    totalNumber(newValue);

  
})

