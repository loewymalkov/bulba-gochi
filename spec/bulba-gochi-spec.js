import { Bulbasaur } from './../src/bulbasaur.js'

describe('Bulbasaur', function() {
  let bulba;

beforeEach(function() {
  bulba = new Bulbasaur();
  jasmine.clock().install();
});

afterEach(function() {
  jasmine.clock().uninstall();
});

it('should have a name and a hunger level of 0 when it is created', function() {
  expect(bulba.name).toEqual("Bulbasaur");
  expect(bulba.hunger).toEqual(0);
});

it('should have a hunger level of 1 after 3000 milliseconds', function() {
  jasmine.clock().tick(3000);
  bulba.increaseHunger();
  expect(bulba.hunger).toEqual(1);
});

 it('should run away when its hunger level is 10 or above', function() {
   bulba.hunger = 11;
   expect(bulba.tooHungryWeOut()).toEqual(true);
 });



});
