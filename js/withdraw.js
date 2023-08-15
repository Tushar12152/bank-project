document.getElementById('btn-withdraw').addEventListener('click',function(){
         const withdrawField=document.getElementById('withdrow-field');
         const newWitrhdraw= parseFloat(withdrawField.value);
         


         const totalWithdraw=document.getElementById('total-withdraw');
         const previoustotalWithdraw=parseFloat(totalWithdraw.innerText);
      
        const currentTotalWithdraw=newWitrhdraw+previoustotalWithdraw

         totalWithdraw.innerText=currentTotalWithdraw;
         withdrawField.value='';


         const totalBalanceElement=document.getElementById('total-balance')
       const previousbalancetotal=parseFloat(totalBalanceElement.innerText);
       const currentBalanceTotal =previousbalancetotal-newWitrhdraw;
       totalBalanceElement.innerText=currentBalanceTotal;
})

