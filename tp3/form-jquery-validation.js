$( document ).ready(function() {
    
    $("#submit").on("click",function(event)
    {
        event.preventDefault();
        console.log("click");

        if ($("#nom").val()=="" || $("#prenom").val()=="" || $("#dateN").val()=="" || $("#adresse").val()=="" || $("#mail").val()=="")
        { $('#myModal').modal("show"); }
        else{
             $(".modal-title").text("Bienvenu "+$("#nom").val());
             $(".modal-title").text("Vous êtes né le : "+$("#dateN").val());
             $(".modal-body").html('<img style="max-width:100%" src="https://maps.googleapis.com/maps/api/staticmap?center='+$("#adresse").val()+'&markers='+$("#adresse").val()+'&size=800x400&zoom=13"/></br> <a href="http://maps.google.com/maps?q='+$("#adresse").val()+'">cliquer ici</a>');
             $('#myModal').modal("show");
            
        }

        
    });
 
console.log( "DOM ready!" );




    
    
    // Y mettre le code jQuery pour valider tous les champs du formulaire
})