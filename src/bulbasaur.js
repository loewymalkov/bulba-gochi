export class Bulbasaur {
  constructor() {
    this.hunger = 0;
    this.name = 'Bulbasaur';
  }



  increaseHunger(output) {
    setInterval(() => {
      this.hunger ++;
      console.log('updated hunger status', this.hunger);
      output.text(this.hunger);
    }, 2000);
  }

  tooHungryWeOut() {
    if (this.hunger < 10) {
      return false;
    } else {
      return true;
    }
  }

  feed() {
    this.hunger --;

  }

}
