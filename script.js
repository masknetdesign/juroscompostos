// Função para atualizar o valor inicial com base no broker selecionado
function updateInitialValue() {
    const broker = document.getElementById('broker').value;
    const initialValueField = document.getElementById('initialValue');

    // Definir o valor mínimo e o valor inicial de acordo com o broker selecionado
    let minValue;
    let initialValue;
    switch (broker) {
        case 'Anne Richards':
            minValue = 20;
            initialValue = 20;
            break;
        case 'Pepperstone':
            minValue = 10;
            initialValue = 10;
            break;
        case 'Tradovate':
            minValue = 30;
            initialValue = 30;
            break;
        default:
            minValue = 20; // Valor padrão
            initialValue = 20; // Valor padrão
    }

    // Atualizar o valor mínimo no campo de entrada
    initialValueField.min = minValue;

    // Definir o valor inicial no campo de entrada
    initialValueField.value = initialValue;
}

// Função para calcular o juro composto
function calculateCompoundInterest() {
    const initialValueField = document.getElementById('initialValue');
    const initialValue = parseFloat(initialValueField.value);

    // Verificar se o campo de valor inicial está vazio ou é menor que o valor mínimo
    if (isNaN(initialValue) || initialValue <= 0) {
        alert('Por favor, insira um valor inicial válido.');
        return;
    }

    const broker = document.getElementById('broker').value;
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

// Adicionar listeners para atualizar o valor inicial quando o broker for alterado
document.getElementById('broker').addEventListener('change', updateInitialValue);

// Inicializar o valor inicial de acordo com o broker padrão ao carregar a página
document.addEventListener('DOMContentLoaded', updateInitialValue);
