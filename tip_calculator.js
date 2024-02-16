let billAmount = document.getElementById('billAmount');
let percentageTip = document.getElementById('percentageTip');
let tipAmount = document.getElementById('tipAmount');
let total = document.getElementById('totalAmount');

let errMsg = document.querySelector('.error-message')


function calculate() {
    if(billAmount.value === '' || percentageTip.value === '') {
        errMsg.textContent = 'Please Enter a Valid Input.';
    }else {
        errMsg.textContent = '';
        let billAmountValue = parseInt(billAmount.value);
        let percentageTipValue = parseInt(percentageTip.value);
        let tipAmountValue = (percentageTipValue / 100) * billAmountValue
        // console.log(tipAmountValue);


        tipAmount.value = tipAmountValue;
        total.value = tipAmountValue + parseInt(billAmountValue)
    }
}


