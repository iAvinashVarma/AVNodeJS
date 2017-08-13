module.exports = {
    printGladiator: function(){
        console.log("Gladiator is awesome movie.");
    },
    printDalapathi: function(){
        console.log("Dalapathi is my favorite movie.");
    },
    favMovie: "Rang De Basanthi" 
};

function printAvatar(){
    console.log("Avatar: PG-13");
}

function printChappie(){
    console.log("Chappie: R");
}

module.exports.avatar = printAvatar;
module.exports.chappie = printChappie;