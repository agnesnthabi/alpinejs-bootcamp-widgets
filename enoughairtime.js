function enoughAirtime(projectedUsage, availAirtime) {
    let usage = projectedUsage.split(',');
    let totalUsage = 0;

    for (let i = 0; i < usage.length; i++) {
        if (usage[i].trim() === 'call') {
            totalUsage += 1.88;
        } else if (usage[i].trim() === 'sms') {
            totalUsage += 0.75;
        } else if (usage[i].trim() === 'data') {
            totalUsage += 12;
        }
    }

    // Calculate the remaining airtime
    let remainingAirtime = availAirtime - totalUsage;

    // Ensure the remaining airtime doesn't go below 0
    if (remainingAirtime < 0) {
        remainingAirtime = 0;
    }

    return remainingAirtime.toFixed(2);
}

function airtimeCalculator() {
    return {
        projectedUsage: '',
        availAirtime: '',
        remainingAirtime: '',
        enoughAirtime
    };
}

document.addEventListener('alpine:init', function(){
    Alpine.data('enoughAirtime',enoughAirtime)
})