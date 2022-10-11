function getInputFieldElementById(elementId) {
    const incomeField = document.getElementById(elementId);
    const incomeFieldString = incomeField.value;
    const income = parseInt(incomeFieldString);
    // incomeField.value = '';
    return income;
}
function getTextById(elementntId) {
    const balanceElement = document.getElementById(elementntId);
    const balanceElementString = balanceElement.innerText;
    const totalBalance = parseInt(balanceElementString);
    return totalBalance;
}
    
function setTextElement(elementId, value) {
    const subTotalElement = document.getElementById(elementId);
    subTotalElement.innerText = value;
}
    
document.getElementById('btn-calculator').addEventListener('click', function () {
    const foodField = getInputFieldElementById('food-field');
    const rentField = getInputFieldElementById('rent-field');
    const clothesField = getInputFieldElementById('clothes-field');
    const totalmoney = foodField + rentField + clothesField;
     
    const expensesTotalBalance = document.getElementById('expenses-total');
    
    const expensesTotalBalanc = expensesTotalBalance.innerText;
    const expensesTotalBalancString = parseInt(expensesTotalBalanc)
    const totalBalance = expensesTotalBalancString + totalmoney;
    expensesTotalBalance.innerText = totalBalance;

    const incomeField = getInputFieldElementById('income-field');
    const Balance = incomeField - totalBalance;
    setTextElement('balance-total', Balance);
})

document.getElementById('btn-save').addEventListener('click', function () {

    const incomeField = getInputFieldElementById('income-field');

    const saveField = getInputFieldElementById('save-field');

    const totalPerchenteg = incomeField / saveField;
    setTextElement('saving-amount', totalPerchenteg);

    const balance = getTextById('balance-total');
    const savingAmount = getTextById('saving-amount');
    const ReamainungBalance = balance - savingAmount;
    setTextElement('remaiming-balance', ReamainungBalance);
})