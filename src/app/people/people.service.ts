import { Injectable, Inject } from 'ng-metadata/core';
import { Person } from './models/person';

@Injectable()
export class PeopleService {

  constructor(
    @Inject('$http') private $http: ng.IHttpService,
  ) {}

  getAllPeople(): ng.IPromise<Person[]> {
    return this.$http
      .get('/assets/data.json', {cache: true})
      .then((resp) => resp.data );
  }

  getPerson(id: number): ng.IPromise<Person> {
    return this.getAllPeople().then((people) => people.find(personMatchesParam) );
    function personMatchesParam(person) { return person.id === id; }
  }
}
