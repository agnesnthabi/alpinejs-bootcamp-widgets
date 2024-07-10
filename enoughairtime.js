function calculateRemainingAirtime(projectedUsage, availAirtime) {
    let usage = projectedUsage.split(', ');
    let totalUsage = 0;

    for (let i = 0; i < usage.length; i++) {
        if (usage[i] === 'call') {
            totalUsage += 1.88;
        } else if (usage[i] === 'sms') {
            totalUsage += 0.75;
        } else if (usage[i] === 'data') {
            totalUsage += 12;
        }
    }

    // Calculate the remaining airtime
    let remainingAirtime = availAirtime - totalUsage;

    // Ensure the remaining airtime doesn't go below 0
    if (remainingAirtime < 0) {
        remainingAirtime = 0;
    }

    return 'R' + remainingAirtime.toFixed(2);
}

document.getElementById('calculateBtn').addEventListener('click', function() {
    const projectedUsage = document.getElementById('usage').value;
    const availAirtime = parseFloat(document.getElementById('airtime').value);

    const result = calculateRemainingAirtime(projectedUsage, availAirtime);
    document.getElementById('result').textContent = 'Remaining Airtime: ' + result;
});

