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

it('should have a hunger level of 1 after 2000 milliseconds', function() {
  jasmine.clock().tick(2001);
  bulba.increaseHunger();
  expect(bulba.hunger).toEqual(1);
});

 it('should run away when its hunger level is 10 or above', function() {
   bulba.hunger = 10;
   expect(bulba.tooHungryWeOut()).toEqual(true);
 });

it('should decrease hunger level by 1 when bulbasaur is fed', function() {
  bulba.increaseHunger();
  jasmine.clock().tick(2001);
  bulba.feed();
  expect(bulba.hunger).toEqual(1);
});

it('it should run away after 18 seconds of not being fed', function() {
  bulba.increaseHunger();
  jasmine.clock().tick(18000);
  expect(bulba.tooHungryWeOut()).toEqual(true);
});




});
