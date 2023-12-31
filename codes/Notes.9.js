/*
//############# Start Characters ############# 

start_character("Magos", "MainLoop");
start_character("Hierophant", "MainLoop");
start_character("Patroclus", "MainLoop");
start_character("Plutus", "MainLoop");

//############# Create Party ############# 

send_party_invite("Magos");
send_party_invite("Hierophant");
send_party_invite("Patroclus");
send_party_invite("Plutus");


//############# Stop Characters ############# 

stop_character("Magos");
stop_character("Hierophant");
stop_character("Patroclus");
stop_character("Plutus");

//############# Send Item ############# 

send_item(StringPlayerName, InventorySlotStartingFrom Zero, Quantity);

send_item("Patroclus", 0, 1);


for(let i = 0; i <= 34; i++){
	send_item("Plutus", i, 500);
}

//############# HOLIDAY BUFF ##############

smart_move({to:"town"}, () => {
	parent.socket.emit("interaction",{type:"newyear_tree"});
});

//############# Save CPU Power ############# 

In Chat: /pause
In Code: pause()

Stops Rendering

//############# Move Somewhere ############# 

//Short:
smart_move({to:"goo"});

//or long...
smart_move({to:"goo"}, function(){
	game_log("Arrived at Goo!", "#4CE0CC");
});

//############# Log ############# 

game_log( "Text", "#00FF00");

//############# Max HP / MP ############# 

character.max_hp
character.max_mp

//############# Use a Skill ############# 

use_skill("curse");

//############# Check Cooldown of Skill ############# 

//Check if the cooldown of a class skill has passed 
can_use(name)

//############# Party List Array ############# 

//Returns Array of current party Members
parent.party_list

//############# Target same target as other player ############# 

let other_player = parent.entities["warrior's name"];
if (other_player) {
    target_id = other_player.target;
    target = parent.entities[target_id];
}

//Iterate over parent.party_list Array to fill other_player

//######## Access certain LIMITED properties of other players ######## 

game_log(parent.party["Patroclus"].level);

//############# Read other player's properties ############# 

let x = parent.party_list;
let x1 = x[1];
game_log(parent.entities[x1].max_hp);

//############# Iterate over OTHER players ############# 

//parent.party_list is an array with the names of PartyMembers
//We iterate over it
parent.party_list.forEach(function(otherPlayerName){ 
	// !!! IMPORTANT !!! parent.entities ONLY holds OTHER players, NOT
	//the current player running this code!! Therefor....
	let partyMember = parent.entities[otherPlayerName];
	//...we have to check if party member holds something or is undefined!!!
	if (partyMember) {
		game_log(partyMember.name)
	}
});

//############# Buy Item ############# 

//Buys 10 Mana Potions
buy_with_gold("mpot0", 10);

//############# Log your Items th Console ############# 

character.items.forEach((element) => game_log("Element " + element.name + "Quantity: " + element.q));

//############# Define a Leader ############# 

var leader = get_player("Playername");

//############# Go to Leader ############# 

    if (distance(character, leader) > 100) {
        move(
            character.real_x+(leader.x-character.real_x) / 2,
            character.real_y+(leader.y-character.real_y) / 2
        );
    }

//############# Find item in inventory ############# 

log(locate_item("mpot0"))

//############# Quantity of an Item in Inventory ############# 

log(quantity("mpot0"));

//############# List inventory of Character ############# 

log(character.items.filter(element => element));

//############# Log all NPCs ############# 

log(parent.npcs);

//############# Character Queue ############# 

if(character.q.upgrade) log("Already upgrading something!");

//############# Chat ############# 

say(); // For Chat
party_say() // For Party Chat

//############# Absolute Position of Party Member ############# 

parent.party.Magos.x

//############# Load code from File System ############# 

const STARTUP = 'C:/projects/adventureCode/basicBot/startup.js';
const fs = require('fs');
const data = fs.readFileSync(STARTUP, 'utf8');
eval.apply( window, [data] );

//############# Hotkeys ############# 

map_key("5","snippet","loadCharacters()");

//############# All Monsters ############# 

//Coordinates where monsters sparn, their number etc
G.maps.main.monsters

//############# All Map Data! ############# 

G.maps

//############# TEXT ############# 

//############# TEXT ############# 

//############# TEXT ############# 

//############# TEXT ############# 

//############# TEXT ############# 

//############# TEXT ############# 

//############# TEXT ############# 

//############# TEXT ############# 

//############# TEXT ############# 

//############# TEXT ############# 

//############# TEXT ############# 

//############# TEXT ############# 

//############# TEXT ############# 

//############# Multiple Steam Windows ############# 

/new_window

//############# See Chat Functions ############# 

/help

//############# Open and Close Merchant Stand ############# 

parent.socket.emit("merchant",{num:}) and parent.socket.emit("merchant",{close:1})
num in the first one being whatever item spot you have your stand in

*/
