import { GreetingService } from './greeting-service.js';

let greetingService = new GreetingService();
let greetings = greetingService.getGreetings();

for (let i = 0; i < greetings.length; i++) {
  let div = document.createElement('div');
  div.innerText = greetings[i];
  div.className = 'badge badge-secondary';
  document.body.appendChild(div);
}
