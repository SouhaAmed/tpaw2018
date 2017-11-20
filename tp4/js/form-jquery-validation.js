$( document ).ready(function() {  
      
   $("#submit").on("click",function(event)  
  {  
    event.preventDefault();  
       console.log("click");  
 
       if ($("#name").val()=="" || $("#firstname").val()=="" || $("#birth").val()=="" || $("#adresse").val()=="" || $("#mail").val()=="") 
         { $('#myModal').modal("show"); } 
       
        else{ var contactList=contactStore.getList();
              contactStore.add($('#name').val(), $('#firstname').val(), $('#birth').val(),$('#adresse').val(),$('#mail').val());
                              
                contactList=contactStore.getList();

                document.querySelector("table tbody").innerHTML ="";

                for(var index in contactList ){
                  
                    document.querySelector("table tbody").innerHTML = document.querySelector("table tbody").innerHTML
                     + '<tr><td>'+contactList[index].name+'</td><td>'+contactList[index].firstname+'</td><td>'+contactList[index].date
                     +'</td><td> <a href="https://maps.google.com/?q='+contactList[index].adress+'">'+contactList[index].adress+'</a></td><td>'
                     +contactList[index].mail +'</td></tr>';


                  }
 }
              
  
             
   
  
  });

  $("#gps").on("click",function(event)  
  {  
    event.preventDefault();  
       console.log("click");  
 		
       getLocation();

  
  });  
  

  $(document).ready(function()
{

    $("#name").keydown(function(e)

    {
      if (e.which==9) { }
     
      else  if(e.which!=8)   { $("#span1").text($("#name").val().length+1); }
      else           
      { 
            if ($("#name").val().length-1<0)       {$("#span1").text(0);}
            else
            {$("#span1").text($("#name").val().length-1  ); }
      }
    

    });

});




$(document).ready(function(){

  $("#firstname").keydown(function(c)

    {
      if (c.which==9) { }
     
      else  if(c.which!=8)   { $("#span2").text($("#firstname").val().length+1); }
      else           
      { 
            if ($("#firstname").val().length-1<0)       {$("#span2").text(0);}
            else
            {$("#span2").text($("#firstname").val().length-1  ); }
      }
    

    });

    
});

 
console.log( "DOM ready!" );  
 
 }) 
