import { Bulbasaur } from './bulbasaur.js';
import $ from 'jquery';
import 'bootstrap';
import './styles.css';

$(document).ready(function() {
  let bulba = new Bulbasaur;
  bulba.increaseHunger($('#hunger-level'));
  if (bulba.tooHungryWeOut() === true) {
    $('#bulba-out').text('Bulba ran away cause you no feed him :( ');
    console.log('game has ended');
  } else if (bulba.tooHungryWeOut() === false) {
    $('#feed').click(function(event) {
      event.preventDefault();
      let btn = $(this);
      btn.prop('disabled', true);
      setTimeout(function() {
        btn.prop('disabled', false);
      }, 1000);
      bulba.feed();
      console.log('hunger after bulba fed', bulba.hunger);
    });
  }
});
