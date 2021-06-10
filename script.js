$("button").click(function() {
	let answer1= $(".inputbox").val();
    $("div").append(answer1);
	let values = $(".values").val();

   
	let awake =$(".awake").val();
	let answer2= $(".inputbox").val();
    $("div").append(answer2);
    console.log(awake);
    console.log(values);

     if (values === "adventure" && awake > 12) {
$(".results").text("electric type. You love excitement and adventure ");
console.log("electric");
 
     }else if (values=== "adventure" && awake <=12) {
$(".results").text("Fire type ");
console.log("fire You're passionate determined and spicy.");
  
     }else if (values=== "knowledge" && awake >12) {
$(".results").text("grass type. You love nature, and learning more about it.");

 	}else if (values=== "family/freinds" && awake <=12) {
$(".results").text("water type. You’re cool relaxed, and like to roll along with the waves of life.");
}  
        
});
   
    



  $(".fullsentence").append("you are a and you wake up at.");




