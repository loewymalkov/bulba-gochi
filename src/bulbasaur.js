export let startGame;

export class Bulbasaur {
  constructor() {
    this.hunger = 0;
    this.name = 'Bulbasaur';
  }



  increaseHunger(output) {
    startGame = setInterval(() => {
      this.hunger ++;
      console.log('updated hunger status', this.hunger);
      output.text(this.hunger);
    }, 1000);
  }

  tooHungryWeOut() {
    if (this.hunger < 10) {
      return false;
    } else {
      return true;
    }
  }

  feed() {
    this.hunger -= 2;
  }

}
