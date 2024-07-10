function totalPhoneBill(bills) {
    const billList = bills.split(', ');
    const callCost = 2.75;
    const smsCost = 0.65;
    let total = 0;

    for (let i = 0; i < billList.length; i++) {
        const bill = billList[i].trim();

        if (bill.includes('call')) {
            total += callCost;
        } else if (bill.includes('sms')) {
            total += smsCost;
        }
    }

    return 'R' + total.toFixed(2);
}

document.getElementById('calculateBtn').addEventListener('click', function() {
    const phoneString = document.getElementById('phoneString').value;
    const totalBill = totalPhoneBill(phoneString);
    document.getElementById('result').textContent = 'Total Bill: ' + totalBill;
});
