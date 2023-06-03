
interface Human {
    firstname : string;
    lastname : string;
    nationality: string;
    age :number;
    height: number;
    weight: number;
    education: string;
}

interface Animals {
    weight: number;
    colour: string;
    sounds_dz:number;
    eatable: boolean;
}


function printHuman(intern : Human){

    console.log(intern.firstname);
    console.log(intern.lastname);
    console.log(intern.weight);
    console.log(intern.age);
    console.log(intern.nationality);

}
console.log("\nHere Human");
printHuman({
    education: "Bachelors", height: 0, firstname : "Vinoth", age : 15, lastname : "Vigneswaran",
    weight : 13, nationality : "German"});


function printAnimals(dog : Animals){
    console.log(dog.weight);
    console.log(dog.colour);
    console.log(dog.sounds_dz);
    console.log(dog.eatable);

}
console.log("\nBelow is an Animal");
printAnimals({colour: "Black", eatable: true, sounds_dz: 21, weight: 78});