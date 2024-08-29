// script.js
function calculateCompoundInterest() {
    // Pegando valores dos inputs
    const initialValue = parseFloat(document.getElementById('initialValue').value);
    const interestRate = parseFloat(document.getElementById('interestRate').value) / 100;
    const periods = parseInt(document.getElementById('periods').value);
    const periodDays = 15; // Cada período tem 15 dias
    const totalPeriods = periods / periodDays;

    // Limpando tabela de resultados
    const resultsTable = document.getElementById('resultsTable').getElementsByTagName('tbody')[0];
    resultsTable.innerHTML = '';

    // Valores iniciais
    let currentValue = initialValue;

    for (let i = 0; i <= totalPeriods; i++) {
        const days = i * periodDays;
        const months = (days / 30).toFixed(1);
        const investedValue = currentValue.toFixed(2);

        // Calculando o saldo com juros compostos
        currentValue = currentValue * (1 + interestRate);
        const balance = currentValue.toFixed(2);

        // Adicionando linha à tabela
        const row = resultsTable.insertRow();
        row.innerHTML = `
            <td>${days}</td>
            <td>${months}</td>
            <td>$${investedValue}</td>
            <td>$${balance}</td>
        `;
    }
}
