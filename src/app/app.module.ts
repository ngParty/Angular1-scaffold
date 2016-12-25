import UiRouter from 'angular-ui-router';
import { NgModule } from 'ng-metadata/core';
import { RouterModule } from './shared/router.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PeopleComponent } from './people/people.component';
import { PersonDetailComponent } from './people/person-detail.component';
import { STATES } from './app.routing';

@NgModule( {
  imports: [
    UiRouter,
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    PeopleComponent,
    PersonDetailComponent,
  ],
  providers: [
    // angular 1 config functions are registered here
    RouterModule.forRoot(STATES)
  ]
} )
export class AppModule {
}
