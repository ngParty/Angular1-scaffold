import { Component } from 'ng-metadata/core';

@Component({
  selector: 'np-home',
  template: `
    <h3>{{ $ctrl.greeting }} solar sytem!</h3>
    <button ng-click="$ctrl.toggleGreeting()">toggle greeting</button>
  `
})
export class HomeComponent {
  greeting: string;
  toggleGreeting() {
    this.greeting = (this.greeting === 'Hello') ? 'Whats up' : 'Hello'
  }
}
