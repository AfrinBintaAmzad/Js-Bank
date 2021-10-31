// function getDepositValue(){
//     const depositTotal=document.getElementById('deposit-total'); //h1,p (text hole ) .innerText dibo
//     // console.log(depositTotal); //deposit total er moddhe ki ache oita show korlam
//     const depositTotalText=depositTotal.innerText;
//     const depositTotalNumber=parseFloat(depositTotalText);
//     const newDeposit=document.getElementById('deposit-input')
//     newDeposit.value='';
//     return depositTotalNumber;
// }


const depositButton=document.getElementById('deposit-button');
const withdrawButton=document.getElementById('withdraw-button');

depositButton.addEventListener('click',function(){
    //About Deposit
    // console.log('deposit button clicked');
    const depositTotal=document.getElementById('deposit-total'); //h1,p (text hole ) .innerText dibo
    // console.log(depositTotal); //deposit total er moddhe ki ache oita show korlam
    const depositTotalText=depositTotal.innerText;
    const depositTotalNumber=parseFloat(depositTotalText);
    // console.log(depositTotalNumber);
    
    const newDeposit=document.getElementById('deposit-input')
    const newDepositNumberText=newDeposit.value; //input textArea hole .value dibo
    const newDepositNumber=parseFloat(newDepositNumberText);

    depositTotal.innerText=depositTotalNumber+ newDepositNumber;
    newDeposit.value='';
    // console.log(newDepositNumber+5); 

    //About Balance
    const balanceTotal=document.getElementById('balance-total');
    const balanceTotalText=balanceTotal.innerText;
    const balanceTotalNumber=parseFloat(balanceTotalText);
    
    balanceTotal.innerText=balanceTotalNumber+newDepositNumber;

    
})
//About Withdraw
withdrawButton.addEventListener('click',function(){
    const withDrawTotal=document.getElementById('withdraw-total');
    // console.log(withdrawTotal);
    const withDrawTotalText=withDrawTotal.innerText;
    // console.log(withDrawTotalText);
    const withDrawTotalNumber=parseFloat(withDrawTotalText);
    // console.log(withDrawTotalNumber)


    const newWithdraw=document.getElementById('withdraw-input');
    // console.log(newDeposit)
    const newWithdrawNumberText=newWithdraw.value;
    // console.log(newWithdrawText)
    const newWithdrawNumber=parseFloat(newWithdrawNumberText);
    // console.log(newWithdrawNumber);

    withDrawTotal.innerText=withDrawTotalNumber+newWithdrawNumber;
    newWithdraw.value='';

    //About WithdrawBalance
    const withdrawBalanceTotal=document.getElementById('balance-total');
    const withdrawBalanceTotalText=withdrawBalanceTotal.innerText;
    withdrawBalanceTotalNumber=parseFloat(withdrawBalanceTotalText);
    withdrawBalanceTotal.innerText=withdrawBalanceTotalNumber-newWithdrawNumber;
})

