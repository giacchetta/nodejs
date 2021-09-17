/*
A video game consists of two players floating using 100 helium balloons.
The players shoot pellets at each other’s balloons and after 10 minutes the player with the most balloons left wins.

class Player {
  constructor(name, hitsPerMinute) {
    this.name = name;
    this.hitsPerMinute = hitsPerMinute;
    this.balloonCount = 100;
  }
 
  status() {
    console.log(`Player: ${this.name} -- Balllons Left: ${this.balloonCount}`)
  }
}
Write a game function balloonAttack that takes two Player instances,
calculates the balloons left for each player after 10 minutes (using the hitsPerMinute property)
and returns the name of the winner. If the result is a tie, return the string 'Tie'.

You can test your balloonAttack function by creating two instances of the Player class to use as arguments for your function like below:

const p1 = new Player('p1', 5);
const p2 = new Player('p2', 2);
 
balloonAttack(p1, p2);
Feel free to use the status() method to output each player’s balloon count at any given time.
*/

class Player {
    constructor(name, hitsPerMinute) {
      this._name = name;
      this._hitsPerMinute = hitsPerMinute;
      this._balloonCount = 100;
    }

    get name(){
        return this._name;
    }

    get hitsPerMinute(){
        return this._hitsPerMinute;
    }
  
    status() {
      console.log(`Player: ${this.name} -- Balllons Left: ${this.balloonCount}`)
    }

    totalHits() {
        const total = this.hitsPerMinute * 10;
        return total;
    }
  }
  
const p1 = new Player('p1', 5);
const p2 = new Player('p2', 7);

function balloonAttack(p1,p2){
    if (p1.totalHits() > p2.totalHits()){
        return console.log(p1.name);
    } else if (p1.totalHits() < p2.totalHits()){
        return console.log(p2.name);
    } else {
        return console.log('Tie');
    }
}

balloonAttack(p1, p2);
  