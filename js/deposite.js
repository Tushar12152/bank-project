document.getElementById('btn-deposite').addEventListener('click',function(){
         const depositeField=document.getElementById('deposite-field');
         const newDepositeAmmount= parseFloat(depositeField.value);
        
          

       const depositeTotalElement = document.getElementById('totalDeposite');
       const previousDepositeTotal= parseFloat(depositeTotalElement.innerText) ;
      
          const currentDipositeTotal=newDepositeAmmount+previousDepositeTotal
       depositeTotalElement.innerText=currentDipositeTotal;
       depositeField.value='';

       const totalBalanceElement=document.getElementById('total-balance')
       const previousbalancetotal=parseFloat(totalBalanceElement.innerText);
       const currentBalanceTotal =previousbalancetotal+newDepositeAmmount;
       totalBalanceElement.innerText=currentBalanceTotal;

    //    const totalDeposites=newDepositeAmmount+previousDepositeTotal;
    //    depositeTotalElement.innerText=totalDeposite;
      
})