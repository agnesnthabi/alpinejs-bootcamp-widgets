function transportFeeWidget() {
    return {
        selectedShift: '',
        get transportFee() {
            return this.calculateTransportFee(this.selectedShift);
        },
        calculateTransportFee(shift) {
            switch(shift) {
                case 'morning':
                    return 'R20';
                case 'afternoon':
                    return 'R10';
                case 'nightshift':
                    return 'Free';
                default:
                    return 'No shift selected';
            }
        }
    };
}

