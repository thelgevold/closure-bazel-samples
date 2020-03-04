import { Greeting } from './greeting.js';

export class GreetingService {
  getGreetings() {
    let greeting = new Greeting();
    return [
      greeting.createGreeting('Joe'),
      greeting.createGreeting('Jane'),
      greeting.createGreeting('Jim')
    ];
  }
}




