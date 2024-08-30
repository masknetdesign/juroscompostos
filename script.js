// script.js

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

    for (let i = 1; i <= totalPeriods; i++) { // Começa de 1 para evitar linha inicial vazia
        const days = i * periodDays;
        const months = (days / 30).toFixed(1);
        const investedValue = currentValue.toFixed(2);

        currentValue = currentValue * (1 + interestRate);
        const balance = currentValue.toFixed(2);

        const row = resultsTable.insertRow();
        row.innerHTML = `
            <td>$${investedValue}</td>
            <td>$${balance}</td>
            <td>${days}</td>
            <td>${months}</td>
        `;
    }
}
