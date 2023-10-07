
        function appendToDisplay(value) {
            document.getElementById('display').value += value;
        }

        function clearDisplay() {
            document.getElementById('display').value = '';
        }

        function calculateResult() {
            try {
                const expression = document.getElementById('display').value;
                const result = eval(expression);
                document.getElementById('display').value = result;
            } catch (error) {
                document.getElementById('display').value = 'Error';
            }
        }

        function calculateSquareRoot() {
            const value = parseFloat(document.getElementById('display').value);
            if (!isNaN(value)) {
                const result = Math.sqrt(value);
                document.getElementById('display').value = result;
            } else {
                document.getElementById('display').value = 'Error';
            }
        }
   