function commonCalculation(inputId){
    const inputIncome =  document.getElementById(inputId);
    const textIncome = inputIncome.value;
    const income = parseFloat(textIncome);
    inputIncome.value = '';
    return income;
}

function commonText(text,expenses){
    const totalExpenses = document.getElementById(text);
    const totalExpensesInText = totalExpenses.innerText;
    totalExpenses.innerText = expenses;
}
//common function ends

document.getElementById('calculate-button').addEventListener('click',function(){
    
//  calling functions and calculate total expenses
    const income = commonCalculation('income');
   
    const foodAmount = commonCalculation('food');

    const rentAmount = commonCalculation('rent');
   
    const clothesAmount = commonCalculation('clothes');

    if(income>0 && foodAmount>0 && rentAmount>0 && clothesAmount>0)
    {
        const expenses = foodAmount + rentAmount + clothesAmount;


        //    calling function to calculate the expenses
                commonText('total-expenses',expenses);
        
                 const balance = income - expenses;
        
        //    calling function to calculate the balance
                commonText('balance',balance);

               
                    document.getElementById('save-button').addEventListener('click',function(){
                        if (balance > expenses)
                        {
                        const inputPercent = document.getElementById('parcentage-input');
                        const inputPercentText = inputPercent.value;
                        const percentageInput = parseFloat(inputPercentText);
                    
                        const savingAmount = (balance) * (percentageInput/100);
                    
                        const finalAmount = document.getElementById('final-saving-amount');
                        const finalAmountText = finalAmount.innerText;
                        finalAmount.innerText = savingAmount;
                    
                        const totalRemainingBalance = balance - savingAmount;
                    
                        const remainingBalance = document.getElementById('final-balance');
                        const remainingBalanceText = remainingBalance.innerText;
                        remainingBalance.innerText = totalRemainingBalance;
                    }
                    else
                {
                    window.prompt("you can't save money because of your low balance than expenses");
                }

            });
                

                
    }
    else
    {

        window.prompt("Enter valid number");
    }

   


  

   
  
   
});

