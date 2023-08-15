document.getElementById('btn-deposite').addEventListener('click',function(){
         const depositeField=document.getElementById('deposite-field');
         const newDepositeAmmount= parseFloat(depositeField.value);
         depositeField.value='';

        if(isNaN(newDepositeAmmount)){
         alert('please enter your ammount')
         return
        }
          

       const depositeTotalElement = document.getElementById('totalDeposite');
       const previousDepositeTotal= parseFloat(depositeTotalElement.innerText) ;
      
          const currentDipositeTotal=newDepositeAmmount+previousDepositeTotal
       depositeTotalElement.innerText=currentDipositeTotal;
     

       const totalBalanceElement=document.getElementById('total-balance')
       const previousbalancetotal=parseFloat(totalBalanceElement.innerText);
       const currentBalanceTotal =previousbalancetotal+newDepositeAmmount;
       totalBalanceElement.innerText=currentBalanceTotal;

    //    const totalDeposites=newDepositeAmmount+previousDepositeTotal;
    //    depositeTotalElement.innerText=totalDeposite;
      
})