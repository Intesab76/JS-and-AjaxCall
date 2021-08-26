qTeams = {
    aaeic: 400,
    aaiwc: 60,
    qai: 200,
    poc: 100,
    gtm: 50,
    hr: 10
};

sortedKeys = Object.keys(qTeams).sort(function(value1 , value2) {
    return qTeams[value2] - qTeams[value1];
});

console.log(sortedKeys);