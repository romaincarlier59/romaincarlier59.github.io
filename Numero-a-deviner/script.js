$(document).ready(function(){
    
let randomNumber = Math.floor(Math.random()*10)
console.log(randomNumber);




 $("#formUser").on("submit", function(e){
    e.preventDefault()
    let input = $("input[type=text]")
    
  let userValue= parseInt($(input).val())
  if (randomNumber !== userValue){
    input.val("")
    input.addClass("error animate__animated animate__swing")

    setTimeout(function(){
        input.removeClass("error animate__animated animate__swing")
    }, 1000)
    
  }
  if (randomNumber === userValue){
    console.log("Gagné");
    //input.remove()
    $(".fa-sharp").show()

  }
  
  
 })


})