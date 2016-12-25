import { Ng1StateDeclaration, StateProvider } from 'angular-ui-router';

export class RouterModule {
  static forRoot(ROUTES: Ng1StateDeclaration[]) {
    stateConfig.$inject = ['$stateProvider'];
    function stateConfig($stateProvider: StateProvider) {
    // Loop over the state definitions and register them
      ROUTES.forEach(function(state) {
        $stateProvider.state(state);
      });
    }
    return stateConfig
  }
}
