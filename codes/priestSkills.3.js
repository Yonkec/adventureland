function priestSkills(target){

    //How much Mana should be kept in reserve
    let manaReserve = 0.7;
    let hurtPartyMembers = 0;
    let healingThreshold = 0.8;

    //Priest heals himself
    if(character.hp < (character.max_hp * healingThreshold)
        //&& can_heal(character)
        && !is_on_cooldown("heal")){
        heal(character);
        game_log("Priest is healing himself");
    }

    //parent.party_list is an array with the names of PartyMembers
    //We iterate over it
    parent.party_list.forEach(function(otherPlayerName){ 
        // !!! IMPORTANT !!! parent.entities only holds OTHER players, not
        //the current player running this code!! Therefor....
        let partyMember = parent.entities[otherPlayerName];
        //...we have to check if party member holds something or is undefined!!!
        if (partyMember) {

            //Heal COMPLETE Party
            if(character.hp < (character.max_hp * healingThreshold))    hurtPartyMembers++;
            if(partyMember.hp < (partyMember.max_hp * healingThreshold)
            && partyMember.rip === false) hurtPartyMembers++;

            if(hurtPartyMembers >= 2
            && character.mp >= G.skills.partyheal.mp
            && !is_on_cooldown("partyheal")){
                use_skill("partyheal");
                game_log("Priest is healing Party");
            }
            //Heal ONE Partymember
            if(partyMember.hp < (partyMember.max_hp * healingThreshold)
                && !partyMember.rip
                //&& can_heal(partyMember)
                && is_in_range(partyMember, "heal")
                && !is_on_cooldown("heal")){
                heal(partyMember).then((message) => {
                    reduce_cooldown("heal", character.ping);
                    game_log("Priest is healing " + partyMember.name);
                }).catch((message) => {
                    log(character.name + " Heal failed: " + message.reason);
                });
            }
        }
    });
    if(target
        && character.mp > (character.max_mp * manaReserve)
        && character.mp > G.skills.curse.mp
        && is_in_range(target, "curse")
        && !is_on_cooldown("curse")){
        use_skill("curse");
        game_log("Priest cursed the enemy");
    }
}