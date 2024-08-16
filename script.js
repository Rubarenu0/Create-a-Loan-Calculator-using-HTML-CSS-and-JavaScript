function calculate() {
    const amount = parseFloat(document.getElementById("amount").value);
    const interestRate = parseFloat(document.getElementById("interest").value);
    const years = parseFloat(document.getElementById("years").value);
    const monthlyInterestRate = interestRate / 12 / 100;
    const numberOfPayments = years * 12;
    const monthlyPayment = (amount * monthlyInterestRate) / (1 - Math.pow(1 + monthlyInterestRate, -numberOfPayments));
    document.getElementById("result").innerHTML = `Monthly Payment: $${monthlyPayment.toFixed(2)}`;
}