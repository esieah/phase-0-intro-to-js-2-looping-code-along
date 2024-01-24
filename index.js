// Code your solutions in this file
/*for (let age = 30; age < 40; age++){
  console.log(`I'm ${age} years old. Happy birthday to me!`);
  
}
*/

//const gifts = ["teddy bear", "drone", "doll"];
  

function writeCards(gift, name) {

 
   let card = [];

  for (let i = 0; i < gift.length; i++) {
    
  
    
   card.push( `Thank you, ${gift[i]}, for the wonderful ${name} gift!`);

    
    

  }

  return card;
}

writeCards(["Guadalupe", "Ollie", "Aki"], " surprise ");




function countDown(a){
  while(a >= 0 ){
    console.log(a)
    --a
  }
}
