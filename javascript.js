 
    //     remove button 
   
   let tab = document.getElementsByClassName('stylebutton')
    for (let element of tab) {
       element.addEventListener('click',function () {      
         element.parentElement.parentElement.remove();
       } 
       )}


           //   plus button

    let arr=document.querySelectorAll('.plus');
     let  sum = 0 ;
     
    for(let el of arr){
      el.onclick=function(){
        el.previousElementSibling.innerHTML=parseInt(el.previousElementSibling.innerHTML)+1
        sum+= parseInt(el.parentElement.nextElementSibling.innerHTML)
        document.getElementById('total-price').innerHTML = parseInt(sum) 
      }
      
    }


    //  munis button

    let tableau=document.querySelectorAll('.munis');
    for(let elm of tableau){
     
     elm.onclick=function(){
      if (elm.nextElementSibling.innerHTML>0){
      elm.nextElementSibling.innerHTML=parseInt(elm.nextElementSibling.innerHTML)-1
      sum -= parseInt(elm.parentElement.nextElementSibling.innerHTML)
        document.getElementById('total-price').innerHTML = parseInt(sum)
      }
    }
  }



         //like button
             
        
         let tab11 = document.getElementsByClassName('fas fa-heart')

         for (let element of tab11) {
         
          element.addEventListener ('click',function () {  
             if( element.style.color === "red"){return element.style.color='black'}
            else{ element.style.color = "red"}
          })
        }
          
