//id="4times"
//id="custom"
let x4 = document.getElementById('4times')
let x5 = document.getElementById('5times')
let x6 = document.getElementById('6times')
let custom    = document.getElementById('custom')
let eingabecustom = document.getElementById('eingabecustom')
let versuchercounter = document.getElementById('versuchercounter')
let guessInputUser = document.getElementById('UserInput')
let ausgabe = document.getElementById('ausgabe')
let disbut= document.getElementById('disableButton')
let box =document.getElementById('form-box')
let demo =document.getElementById('demo')
let i =0;
function getRound() {
 
    if(custom.checked)
    {
        eingabecustom.style.display="block"


    }else{ eingabecustom.style.display="none"} 

}


getRound()



 



const random = (Math.random()*100).toFixed(0)
console.log(random)

let versuche;
    function  guess(){

        let userinput;
        userinput = guessInputUser.value;
           
       if (x4.checked ){
        versuche= 4;
        if( userinput < random)
        { i++
            box.style.display='none'
            versuchercounter.style.display ="block"
            versuchercounter .innerHTML = `${i} / ${versuche}`
            ausgabe.innerHTML += `${i} .You need to guess heigher than ${userinput} <br>`
    
    
        }  if (userinput === random){
            i++ 
             versuchercounter.style.display ="block"
             versuchercounter .innerHTML = `${i} / ${versuche}`
             ausgabe.innerHTML += `Congratulatios! You won after ${i} rounds. <button onclick = " play_again()" >Play again!</button> `
             disableButton.style.background='green'
             disableButton.style.color='white'
             //ausgabe.style.color = "red"
             box.style.display='none'
     
         } else if ( userinput > random){
            i++

            
            box.style.display='none'
            versuchercounter.style.display ="block"
            versuchercounter .innerHTML = `${i} / ${versuche}`
            ausgabe.innerHTML += `${i} .You need to guess lower than ${userinput} <br>`
        } 
           
        
    }else if (x5.checked){
        versuche=5;
        //console.log(versuche)
        if( userinput < random)
        { i++
            box.style.display='none'
            versuchercounter.style.display ="block"
            versuchercounter .innerHTML = `${i} / ${versuche}`
            ausgabe.innerHTML += `${i} .You need to guess  heigher than ${userinput} <br>`
    
    
        }  if (userinput === random){
            i++ 
             versuchercounter.style.display ="block"
             versuchercounter .innerHTML = `${i} / ${versuche}`
             ausgabe.innerHTML += `Congratulatios! You won after ${i} rounds. <button onclick = " play_again()" >Play again!</button> `
             disableButton.style.background='green'
             disableButton.style.color='white'
             //ausgabe.style.color = "red"
             box.style.display='none'
     
         } else if ( userinput > random){
            i++

            
            box.style.display='none'
            versuchercounter.style.display ="block"
            versuchercounter .innerHTML = `${i} / ${versuche}`
            ausgabe.innerHTML += `${i} .You need to guess lower than ${userinput} <br>`
        }
          
    
    }else if (x6.checked){
        versuche=6;
        if( userinput < random)
        { i++
            box.style.display='none'
            versuchercounter.style.display ="block"
            versuchercounter .innerHTML = `${i} / ${versuche}`
            ausgabe.innerHTML += `${i} .You need to guess heigher than ${userinput} <br>`
    
    
        }  if (userinput === random){
            i++ 
             versuchercounter.style.display ="block"
             versuchercounter .innerHTML = `${i} / ${versuche}`
             ausgabe.innerHTML += `Congratulatios! You won after ${i} rounds. <button onclick = " play_again()" >Play again!</button> `
             disableButton.style.background='green'
             disableButton.style.color='white'
             //ausgabe.style.color = "red"
             box.style.display='none'
     
         } else if ( userinput > random){
            i++

            
            box.style.display='none'
            versuchercounter.style.display ="block"
            versuchercounter .innerHTML = `${i} / ${versuche}`
            ausgabe.innerHTML += `${i} .You need to guess lower than ${userinput} <br>`
        } 
    
        
    }else if ( custom.checked){
        
       
       
        
        versuche= eingabecustom.value ;
        { 
            box.style.display='none'
            versuchercounter.style.display ="block"
            versuchercounter .innerHTML = `${i} / ${versuche}`
            // ausgabe.innerHTML += `${i} .You need to guess heigher than ${userinput} <br>`
            if( userinput < random)
        { i++
            box.style.display='none'
            versuchercounter.style.display ="block"
            versuchercounter .innerHTML = `${i} / ${versuche}`
            ausgabe.innerHTML += `${i} .You need to guess heigher than ${userinput} <br>`
        
       
        
        }   else if ( userinput > random){
            i++

            
            box.style.display='none'
            versuchercounter.style.display ="block"
            versuchercounter .innerHTML = `${i} / ${versuche}`
            ausgabe.innerHTML += `${i} .You need to guess lower than ${userinput} <br>`
        } 
    
    
    
        }  if (userinput === random){
            i++ 
             versuchercounter.style.display ="block"
             versuchercounter .innerHTML = `${i} / ${versuche}`
             ausgabe.innerHTML += `Congratulatios! You won after ${i} rounds. <button onclick = " play_again()" >Play again!</button> `
             disableButton.style.background='green'
             disableButton.style.color='white'
             //ausgabe.style.color = "red"
             box.style.display='none'
            }   
        
        
}

   
  
   
  
    
      if (i == versuche){
        disableButton.disabled=true;

       
        ausgabe.innerHTML += `Sorry, you lost after ${i} Rounds. The number was ${versuche}. <button onclick = " play_again()" >Play again!</button>`;
       
    } 


   

  
   
}

function play_again()
{
    location.reload()

}
 