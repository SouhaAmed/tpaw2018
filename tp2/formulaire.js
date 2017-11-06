function validation()
 {
              
	/*vérifier le nom*/
	if(document.getElementById("nom").value=="")
		{
			document.getElementById("resultat").setAttribute("hidden","hidden");
       		 document.getElementById("error").removeAttribute("hidden");
			document.getElementById("error").innerHTML = "La saisie du nom est obligatoire";
		}
	
else if((document.getElementById("nom").value.length<5)|| (document.getElementById("nom").value.length>20))
	{
		document.getElementById("resultat").setAttribute("hidden","hidden");
        document.getElementById("error").removeAttribute("hidden");
		document.getElementById("error").innerHTML = "le nom doit contenir au entre 5 et 20 caractères";
	}
	/*verifier le prenom*/

else if(document.getElementById("prenom").value=="")
		{
			document.getElementById("resultat").setAttribute("hidden","hidden");
       		 document.getElementById("error").removeAttribute("hidden");
			document.getElementById("error").innerHTML = "La saisie du prenom est obligatoire";
		}
	
else if((document.getElementById("prenom").value.length<5) || (document.getElementById("prenom").value.length>20))
	{
		document.getElementById("resultat").setAttribute("hidden","hidden");
        document.getElementById("error").removeAttribute("hidden");
		document.getElementById("error").innerHTML = "le prenom doit contenir entre 5 et 20 caractères";
	}
else if(document.getElementById("dateN").value=="")
		{
			document.getElementById("resultat").setAttribute("hidden","hidden");
       		 document.getElementById("error").removeAttribute("hidden");
			document.getElementById("error").innerHTML = "La saisie de la date est obligatoire";
		}
	
else if(document.getElementById("dateN").value.length<5)
	{
		document.getElementById("resultat").setAttribute("hidden","hidden");
        document.getElementById("error").removeAttribute("hidden");
		document.getElementById("error").innerHTML = "la date doit contenir au moins 5 caractères";
	}

else if(document.getElementById("adresse").value=="")
		{
			document.getElementById("resultat").setAttribute("hidden","hidden");
       		 document.getElementById("error").removeAttribute("hidden");
			document.getElementById("error").innerHTML = "La saisie de l'adresse  est obligatoire";
		}
	
else if((document.getElementById("adresse").value.length<5)|| (document.getElementById("adresse").value.length>50))
	{
		document.getElementById("resultat").setAttribute("hidden","hidden");
        document.getElementById("error").removeAttribute("hidden");
		document.getElementById("error").innerHTML = "l'adresse' doit contenir entre 5 et 50 caractères";
	}
else if(document.getElementById("mail").value=="")
		{
			document.getElementById("resultat").setAttribute("hidden","hidden");
       		 document.getElementById("error").removeAttribute("hidden");
			document.getElementById("error").innerHTML = "La saisie de l'e-mail est obligatoire";
		}
	
else if((document.getElementById("mail").value.length<5)|| (document.getElementById("mail").value.length>30))
	{
		document.getElementById("resultat").setAttribute("hidden","hidden");
        document.getElementById("error").removeAttribute("hidden");
		document.getElementById("error").innerHTML = "l'e-mail doit contenir entre 5 et 30 caractères";
	}

else
{
		document.getElementById("error").setAttribute("hidden","hidden");
        document.getElementById("resultat").removeAttribute("hidden");
        document.getElementById("resultat").innerHTML = "Bienvenue " + document.querySelector("#nom").value;
}


}