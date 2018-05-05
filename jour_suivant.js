// Jour suivant 

var jour = prompt('Saisissez un jour de la semaine: ');

switch (jour) {
  case "lundi": 
  alert('Demain, il sera mardi.');
  break;
  
  case "mardi":
  alert('Demain, il sera mercredi.');
  break;
  
  case "mercredi": 
  alert('Demain, il sera jeudi.');
  break;
  
  case "jeudi": 
  alert('Demain, il sera vendredi.');
  break;
  
  case "vendredi": 
  alert('Demain, il sera samedi.');
  break;
  
  case "samedi": 
  alert('Demain, il sera dimanche.');
  break;
  
  case "dimanche": 
  alert('Demain, il sera lundi.');
  break;
  
  default: 
  alert("Ceci n'est pas un jour de la semaine."); // On gère les erreurs de saisie
  }
