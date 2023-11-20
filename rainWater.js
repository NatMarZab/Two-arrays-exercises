const assert = require('assert');

function trap(height) {
    const n = height.length;
    let totalWater = 0;

    for (let i = 1; i < n - 1; i++) {
        const leftMax = Math.max(...height.slice(0, i));
        const rightMax = Math.max(...height.slice(i + 1));
        const minHeight = Math.min(leftMax, rightMax);

        if (minHeight > height[i]) {
            totalWater += minHeight - height[i];
        }
    }

    return totalWater;
}

// Automated tests
function runTests() {
    const testInput = [1, 34, 5, 1];
    const expectedOutput = 0; 
    const result = trap(testInput);

    assert.strictEqual(result, expectedOutput, 'La prueba falló');

    console.log('Todas las pruebas pasaron con éxito');
}

// Command line execution
if (require.main === module) {
    if (process.argv.length < 3) {
        runTests();
    } else {
        const inputArray = process.argv[2].split(',').map(Number);
        const result = trap(inputArray);
        console.log(`La cantidad de agua atrapada es: ${result}`);
    }
}


