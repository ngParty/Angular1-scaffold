import { Transition, StateProvider, Ng1StateDeclaration } from 'angular-ui-router';
import { Inject, getInjectableName } from 'ng-metadata/core';
import { PeopleService } from './people/people.service';

export const STATES: Ng1StateDeclaration[] = [
  {
    name: 'home',
    url: '/home',
    // We need to use template instead of component ( because component is
    // magically created in ui-routr internalls )
    template: '<np-home></np-home>',
  },
  {
    name: 'about',
    url: '/about',
    template: '<np-about></np-about>'
  },
  {
    name: 'people',
    url: '/people',
    template: '<np-people [people]="$resolve.people"></np-people>',
    // This state defines a 'people' resolve
    // It delegates to the PeopleService to HTTP fetch (async)
    // The people component receives this via its `bindings: `
    resolve: {
      people: [
        getInjectableName(PeopleService),
        function(PeopleService: PeopleService) {
          return PeopleService.getAllPeople();
        }
      ]
    }
  },

  {
    name: 'person',
    // This state takes a URL parameter called personId
    url: '/people/{personId}',
    template: '<np-person-detail [person]="$resolve.person"></np-person-detail>',
    // This state defines a 'person' resolve
    // It delegates to the PeopleService, passing the personId parameter
    resolve: {
      person: [
        getInjectableName(PeopleService),
        '$transition$',
        function(PeopleService: PeopleService, $transition$: Transition) {
          const {personId} = $transition$.params() as {personId: number};
          return PeopleService.getPerson(personId);
        }
      ]
    }
  }
];



