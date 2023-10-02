document.addEventListener('DOMContentLoaded', function () {
    const servicoQualiSelect = document.getElementById('servicoQuali');
    const valor = document.getElementById('valorConta');
    const calcularBtn = document.getElementById('calculateBtn');
    const tip = document.getElementById('tipAmount');

    calcularBtn.addEventListener('click', function () {
        const servicoQuali = parseFloat(servicoQualiSelect.value);
        const valorConta = parseFloat(valor.value);

        if (!isNaN(servicoQuali) && !isNaN(valorConta)) {
            const tipAmount = valorConta * servicoQuali;
            tip.textContent = `Gorjeta: R$ ${tipAmount.toFixed(2)}`;
        } else {
            tip.textContent = 'Por favor, insira valores.';
        }
    });
});

