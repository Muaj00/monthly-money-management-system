document.getElementById('calculate-button').addEventListener('click',function(){
    
   const inputIncome =  document.getElementById('income');
   const textIncome = inputIncome.value;
   const income = parseFloat(textIncome);
   inputIncome.value = '';
   

   const inputfood =  document.getElementById('food');
   const textFoodaAmount = inputfood.value;
   const foodAmount = parseFloat(textFoodaAmount);
   inputfood.value = '';
    
   

   const inputrent =  document.getElementById('rent');
   const textRentAmount = inputrent.value;
   const rentAmount = parseFloat(textRentAmount);
   inputrent.value = '';
   

   const inputclothes =  document.getElementById('clothes');
   const textclothesAmount = inputclothes.value;
   const clothesAmount = parseFloat(textclothesAmount);
   inputclothes.value = '';

   const expenses = foodAmount + rentAmount + clothesAmount;


   const totalExpenses = document.getElementById('total-expenses');
   const totalExpensesInText = totalExpenses.innerText;
   totalExpenses.innerText = expenses;

   const balance = income - expenses;

   const previusBalance = document.getElementById('balance');
   const totalBalanceText = previusBalance.innerText;
   previusBalance.innerText = balance;


   document.getElementById('save-button').addEventListener('click',function(){

    const inputPercent = document.getElementById('parcentage-input');
    const inputPercentText = inputPercent.value;
    const percentageInput = parseFloat(inputPercentText);
    inputPercent.value = '';

    const savingAmount = (balance) * (percentageInput/100);

    const finalAmount = document.getElementById('final-saving-amount');
    const finalAmountText = finalAmount.innerText;
    finalAmount.innerText = savingAmount;

    const totalRemainingBalance = balance - savingAmount;

    const remainingBalance = document.getElementById('final-balance');
    const remainingBalanceText = remainingBalance.innerText;
    remainingBalance.innerText = totalRemainingBalance;

    });


   
});

