import { Component, Input } from 'ng-metadata/core';
import { Person } from './models/person';
import { PeopleService } from './people.service';
import styles from './people.component.scss';

@Component({
  selector: 'np-people',
  styles: [ styles ],
  template: `
    <h3>Some people:</h3>
    <ul>
      <li ng-repeat="person in $ctrl.people">
        <a ui-sref="person({ personId: person.id })">
          {{ person.name }}
        </a>
      </li>
    </ul>
  `,
  providers: [
    PeopleService
  ]
})
export class PeopleComponent {
  @Input() people: Person[];
}
