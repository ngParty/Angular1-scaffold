import { Component, Input } from 'ng-metadata/core';
import { Person } from './models/person';

@Component({
  selector: 'np-person-detail',
  template: `
    <h3>Detail of: {{$ctrl.person.name}}</h3>
    <div>Name: {{$ctrl.person.name}}</div>
    <div>Id: {{$ctrl.person.id}}</div>
    <div>Company: {{$ctrl.person.company}}</div>
    <div>Email: {{$ctrl.person.email}}</div>
    <div>Address: {{$ctrl.person.address}}</div>

    <button ui-sref="people">Close</button>
  `
})
export class PersonDetailComponent {
  @Input() person: Person;
}
