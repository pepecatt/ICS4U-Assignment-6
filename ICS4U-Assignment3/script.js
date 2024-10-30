function heronsFormula(a, b, c) {
    if (a + b <= c || a + c <= b || b + c <= a) {
        const s = (a + b + c) / 2; 
        const area = Math.sqrt(s * (s - a) * (s - b) * (s - c)); 
        return area.toFixed(2);
    }
}

document
    .getElementById("calculateHerons")
    .addEventListener("click", function () {
        const a = parseFloat(document.getElementById('sideA').value);
        const b = parseFloat(document.getElementById('sideB').value);
        const c = parseFloat(document.getElementById('sideC').value);

        if (a + b <= c || a + c <= b || b + c <= a) {
            document.getElementById('result').value = 'Invalid triangle sides';
            return;
        }
        document.getElementById('result').value = heronsFormula(a, b, c);
        document.write(result);
    });



function solveAmbiguousCase() {
    const angleA = parseFloat(document.getElementById('angleA').value) * (Math.PI / 180); // Convert to radians
    const sideA = parseFloat(document.getElementById('sideA2').value);
    const sideB = parseFloat(document.getElementById('sideB2').value);
    let result = '';

    // find height
    const height = sideB * Math.sin(sideA);
    if (angleA < 90) {
        if (height > sideA) {
            result = 'No triangle.';
        }
        else if (sideA > sideB) result = 'One triangle.';
    }

    const angleB1 = Math.asin(ratio); // First possible angle B
    const angleB2 = Math.PI - angleB1; // Second possible angle B

    

    document.getElementById('ambiguousResult').value = result;
}

