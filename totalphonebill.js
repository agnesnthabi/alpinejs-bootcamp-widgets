function phoneBillCalculator() {
    return {
        phoneString: '',
        totalBill: '',
        calculateTotalBill() {
            this.totalBill = this.totalPhoneBill(this.phoneString);
        },
        totalPhoneBill(bills) {
            const billList = bills.split(', ');
            const callCost = 2.75;
            const smsCost = 0.65;
            let total = 0;

            for (let i = 0; i < billList.length; i++) {
                const bill = billList[i].trim();

                if (bill === 'call') {
                    total += callCost;
                } else if (bill === 'sms') {
                    total += smsCost;
                }
            }

            return 'R' + total.toFixed(2);
        }
    }
}

document.addEventListener('alpine:init', function(){
    Alpine.data('phoneBillCalculator',phoneBillCalculator)
})