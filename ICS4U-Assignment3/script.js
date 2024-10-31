function heronsFormula(a, b, c) {
    const s = (a + b + c) / 2; 
    const area = Math.sqrt(s * (s - a) * (s - b) * (s - c)); 
    return area.toFixed(2);
}

document
    .getElementById("calculateHerons")
    .addEventListener("click", function () {
        const a = parseFloat(document.getElementById('sideA').value);
        const b = parseFloat(document.getElementById('sideB').value);
        const c = parseFloat(document.getElementById('sideC').value);

        // Check for valid triangle sides
        if (a <= 0 || b <= 0 || c <= 0 || a + b <= c || a + c <= b || b + c <= a) {
            document.getElementById('heronsResult').value = "Invalid input(s).";
            console.log("Invalid");
            return;
        }

        // Calculate area if valid
        document.getElementById('heronsResult').value = heronsFormula(a, b, c);
    });


function ambiguousCase(angle, a, b) {
    const h = b * Math.sin(angle * (Math.PI / 180));
    if (angle == 90) {
        return 'Right triangle.';
    }
    else if (angle < 90) {
        if (h > a) {
            return 'No triangle.';
        } if (a > b) {
            return 'One triangle.';
        } if (h < a < b) {
            return "Two triangles (Ambiguous Case)";
        }
    }
    else {
        if (a < b || a == h) {
            return 'No triangle.';
        }
        if (a > b) {
            return 'One triangle.';
        }
    }
}

document
    .getElementById("calculateAmb")
    .addEventListener("click", function () {
        const angle = parseFloat(document.getElementById('angleA').value);
        const a = parseFloat(document.getElementById('sideA2').value);
        const b = parseFloat(document.getElementById('sideB2').value);

        if (angle < 0 || angle > 180 || a < 0 || b < 0) {
            document.getElementById("ambResult").value = "Invalid input(s).";
            return;
        }

        document.getElementById("ambResult").value = ambiguousCase(angle, a, b);
    });


function polynomial(coefficients, exponents, x) {
    const arrayco = [];
    const arrayex = [];
    const result = [];
    let answer1 = "";
    let answer2 = 0;
    for (let i=0; i<coefficients.length; i++) {
        arrayco[i] = Number(coefficients[i]);
        arrayex[i] = Number(exponents[i]);
    }
    
    for (let i=0; i<arrayco.length; i++) {
        var co = arrayco[i];
        var ex = arrayex[i];
        if (i !== 0) {
            if (co > 0) answer1 += " + ";
            else if (co < 0) answer1 += " - ";
        }
        
        if (co !== 1 || co !== -1) {
            if (co < 0) answer1 += Math.abs(co);
            else answer1 += co;
        }

        if (ex > 0) {
            answer1 += "x";
            if (ex > 1) answer1 += "^" + ex;
        }

        answer2 += ((x ** ex) * co);
    }
    result[0] = answer1;
    result[1] = answer2.toString();
    return result;
} 

document
    .getElementById("calculatePoly")
    .addEventListener("click", function () {
        const string = document.getElementById('coefficients').value;
        const coefficients = string.split(" ");
        //console.log(coefficients[0]);
        const string2 = document.getElementById('exponents').value;
        const exponents = string2.split(" ");
        const x = document.getElementById('x').value;

        // for (let i=0; i<3; i++) {
        //     if (!isNaN(array[i])) {
        //         document.getElementById("polyResult").value = "Invalid input(s).";
        //         return;
        //     }
        // }

        const poly = polynomial(coefficients, exponents, x);
        document.getElementById("function").innerHTML = "Function: " + poly[0];
        document.getElementById("polyResult").value = poly[1];
    });
