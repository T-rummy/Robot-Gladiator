var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

console.log(playerName, playerAttack, playerHealth);

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function (enemyNames) {

         while (enemyHealth > 0 && playerHealth > 0) {

            var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

             if (promptFight === "skip" || promptFight === "SKIP") {

                var confirmSkip = window.confirm("Are you sure you'd like to quit?");
              if (confirmSkip) {
    
                    window.alert (playerName + " has decided to leave the fight. Goodbye!");

                    playerMoney = playerMoney - 10;

                    console.log("Player Money " + playerMoney);
                    break;
    
                }
            }


                //Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable

                 enemyHealth = enemyHealth - playerAttack;
  
                 // Log a resulting message to the console so we know that it worked.

                console.log(playerName + " attacked " + enemyNames + ". " + enemyNames + " now has " + enemyHealth + " health remaining.");

                 //check enemy health
  

                if (enemyHealth <= 0) {
                 window.alert(enemyNames + " has died!");

                 break;
                    
                }
            
                    else{
                
                    window.alert(enemyNames + " still has " + enemyHealth + " health left.");

                    }
        
                    // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.

                        playerHealth = playerHealth - enemyAttack;
        
                    // Log a resulting message to the console so we know that it worked.

                    console.log(enemyNames + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining.");

                //chack players health 

                    if (playerHealth <= 0) {

                        window.alert(playerName + " has died!");

                        break;

                        }
                        else {
                        window.alert (playerName + " still has " + playerHealth + " health left." );
                        }

                    }
                

        }



for (var i = 0; i < enemyNames.length; i++) {
   
    var pickedEnemyNames = enemyNames[i];

    enemyHealth = 50;
    
   fight(pickedEnemyNames);
}

