export class Bulbasaur {
  constructor() {
      this.hunger = 0;
      this.name = 'Bulbasaur';
  }

  increaseHunger() {
    this.hunger = setInterval(() => {
      this.hunger ++;
    }, 3000);
  }

  tooHungryWeOut() {
    if (this.hunger <= 11) {
      return false;
    } else {
       return true;
    }
  }

  feed() {
    this.hunger --;
  }
}
