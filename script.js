var con= document.querySelector(".container")

var love= document.querySelector("i")

con.addEventListener("dblclick",()=>{
    love.style.transform='translate(-50%, -50%) scale(1.5)'     //👂👂 phle to single quotes m likhege
   /*👂translate vali chij bhi vaps likhege kyo ki js css ki pure transform ki property ko yha di gyi
   property se bdle ga to hm yha vaps translate(-50%, -50%) likhege*/
   love.style.opacity="0.8"
   //love.style.display="initial"

   //👂👂ab suno dyan se ab heart ko thodi der bad gayb bhi krna h
   setTimeout(function(){        
    love.style.opacity="0"
    love.style.transform='translate(-50%, -50%) scale(0)' 
   }, 1000);        //   <--------------------- dbl click hone ke 1 second bad heart gayb(isliye event listener m ke ander likha h)
})


//sarthak n bnvaya
/*
con.addEventlistener("dblclick",()=>{
    love.style.transform='translate(-50%, -50%) scale(1.5)'
    love.style.opacity="0.8"

    setTimeout(function(){        
    love.style.opacity="0"
   }, 1000);

   setTimeout(function(){        
    love.style.transform='translate(-50%, -50%) scale(0)' 
   }, 2000);
)}
*/ 