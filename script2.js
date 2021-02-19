$( function() {
    $( ".draggable" ).draggable();
  } );
function f(evenement){
    
    
    var element = evenement.target;
    
    
    var p = document.querySelector("#donnees");
    
    
    var position = $(element).position();

    p.innerText = position.x
    
    var element = document.getElementById(id);
}


$( function() {
    
    $( ".draggable" ).draggable();
    
    
    var les_draggables = document.querySelectorAll(".draggable");
    for(i=0; i < les_draggables.length; i++){
        var d = les_draggables[i];
        d.ondrag = f;
        d.ondragend = f;
    }
} );
$( function() {
    $( ".draggable" ).draggable();
  } );
function g(evenement){
    
    
    var element = evenement.target;
    
    
    var p = document.querySelector("#donnees");
    
    
    var position = $(element).position();

    p.innerText = position.x
    
    var element = document.getElementById(id);
}


$( function() {
    
    $( ".draggable" ).draggable();
    
    
    var les_draggables = document.querySelectorAll(".draggable");
    for(i=0; i < les_draggables.length; i++){
        var d = les_draggables[i];
        d.ondrag = g;
        d.ondragend = g;
    }
} );





if  (f) =  (g) {
    result = 'positive';
  } else {
    result = 'NOT positive';
{
  return result;

  }
  if result = "positive"  
  	document.getElementById("bouton_pres"+position).style.display="";
  else result ="Not positive "
 	document.getElementById("bouton_pres"+position).style.display="none";
  	
  console.log(g)