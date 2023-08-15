document.getElementById('btn-submit').addEventListener('click',function(){
     const emailBox=document.getElementById('email-field');
     const mail=emailBox.value;
     

     const passBox=document.getElementById('pass-field');
     const pass=passBox.value;
    
    if(mail==='baperbank@gmail.com' && pass==='takadorkar'){
        window.location.href = "bank.html";
    }
    else{
        alert('please type right password')
    }
})