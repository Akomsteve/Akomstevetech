function validate()
 {
    let psd=document.getElementById('psd');
    let cpsd= document.getElementById('cpsd');
   
    if(psd.value.trim()=="")
    {
        alert("Incorrect Password ‼️");
        return false;
    }
    
    else {
        return true;
    }
    if(
   document.getElementById('psd') !==document.getElementById('cpsd'))
   {
       alert('Not matching');
       return false;
   }
 }

