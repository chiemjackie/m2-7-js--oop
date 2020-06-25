// Exercise 1.4
// ------------
// Creating a Cat class - Part 4

// A) So far so good.
//    In real life, we naturally get more tired/hungry/lonely as time passes.
//    Let's add a new method, `wait`. It accepts a number of minutes as the
//    parameter. The cat's tiredness, hunger, and loneliness should increase
//    as the amount of time increases. They should also become less happy.
//
//    It's up to you to decide how quickly these values should change.

// B) Make Boots wait 20 minutes and call then console.log(boots);

class Cat {
  constructor(name, breed) {
    this.species = 'cat';
    this.name = name;    
    this.breed = breed;
    this.tiredness = 50;
    this.hunger = 50;
    this.loneliness = 50;
    this.happiness = 50;
  }

  sleep = (hours) => {
    this.tiredness -= hours * 5;
    this.happiness += hours * 3;
  }

  eat = (kibbles) => {
    this.hunger -= kibbles / 5;
    this.happiness += kibbles / 5;
  }

  play = (minutesPlayed) => {
    this.loneliness -= minutesPlayed * 3;
    this.happiness += minutesPlayed;
  }

  wait = (minutesElapsed) => {
    this.tiredness += minutesElapsed;
    this.hunger += minutesElapsed;
    this.loneliness += minutesElapsed * 2;
    this.happiness -= minutesElapsed * 3;
  }
}

const boots = new Cat('Boots', 'Siamese');

console.log(boots);

boots.sleep(5);
boots.eat(10);
boots.play(20);
boots.wait(30);

console.log(boots);