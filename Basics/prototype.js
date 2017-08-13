function Player(){
    this.name = "";
    this.points = 100;
    this.givepoints = function givepoints(targetPlayer){
        targetPlayer.points += 1;
        console.log(this.name + " gave 1 points to " + targetPlayer.name);
        this.points -= 1;
    };
}

var Avi = new Player();
var Jittu = new Player();

Avi.name = "Avinash";
Jittu.name = "Jitendra";
console.log("Before Giving points.");
console.log("Avinash points : " + Avi.points);
console.log("Jitendra points : " + Jittu.points);
Avi.givepoints(Jittu);
console.log("After Giving points.");
console.log("Avinash points : " + Avi.points);
console.log("Jitendra points : " + Jittu.points);

// You can add functions to all objects.
Player.prototype.takePoints = function takePoints(targetPlayer, pointsCount){
    targetPlayer.points -= pointsCount;
    console.log(this.name + " took " + pointsCount + " points from " + targetPlayer.name);
    this.points += pointsCount;
};

Avi.takePoints(Jittu, 4);
console.log("After Taking points.");
console.log("Avinash points : " + Avi.points);
console.log("Jitendra points : " + Jittu.points);

// You can add properties to all objects.
Player.prototype.magic = 60;
console.log("Avinash magic points : " + Avi.magic);
console.log("Jitendra magic points : " + Jittu.magic);