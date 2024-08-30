// script.js
function updateInitialValue() {
    const broker = document.getElementById('broker').value;
    const initialValueField = document.getElementById('initialValue');

    // Definir o valor inicial e o mínimo de acordo com o broker selecionado
    let minValue;
    switch (broker) {
        case 'Anne Richards':
            minValue = 20;
            break;
        case 'Pepperstone':
            minValue = 10;
            break;
        case 'Tradovate':
            minValue = 30;
            break;
        default:
            minValue = 20; // Valor padrão
    }

    initialValueField.value = minValue;
    initialValueField.min = minValue;

    // Adiciona o evento de input para forçar o valor mínimo
    initialValueField.addEventListener('input', function() {
        if (parseFloat(this.value) < minValue) {
            this.value = minValue;
        }
    });
}

function calculateCompoundInterest() {
    const broker = document.getElementById('broker').value;
    const initialValue = parseFloat(document.getElementById('initialValue').value);
    const interestRate = parseFloat(document.getElementById('interestRate').value) / 100;
    const periods = parseInt(document.getElementById('periods').value);

    // Definir a base de cálculo de acordo com o broker selecionado
    let periodDays;
    switch (broker) {
        case 'Anne Richards':
            periodDays = 15;
            break;
        case 'Pepperstone':
            periodDays = 7;
            break;
        case 'Tradovate':
            periodDays = 30;
            break;
        default:
            periodDays = 15; // Padrão se algo der errado
    }

    const totalPeriods = Math.floor(periods / periodDays);
    const resultsTable = document.getElementById('resultsTable').getElementsByTagName('tbody')[0];
    resultsTable.innerHTML = '';

    let currentValue = initialValue;

    for (let i = 0; i <= totalPeriods; i++) {
        const days = i * periodDays;
        const months = (days / 30).toFixed(1);
        const investedValue = currentValue.toFixed(2);

        currentValue = currentValue * (1 + interestRate);
        const balance = currentValue.toFixed(2);

        const row = resultsTable.insertRow();
        row.innerHTML = `
            <td>${days}</td>
            <td>${months}</td>
            <td>$${investedValue}</td>
            <td>$${balance}</td>
        `;
    }
}
