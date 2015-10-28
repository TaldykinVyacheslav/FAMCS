angular.module("app").config(function($routeProvider, $locationProvider, $httpProvider) {

  $locationProvider.html5Mode({enabled:true});

  $routeProvider.when('/login', {
    templateUrl: 'login.html',
    controller: 'LoginController'
  });

  $routeProvider.when('/general', {
    templateUrl: 'general.html',
    controller: 'GeneralController',
    resolve: {
      'settings': function(SettingsResource) {
        return SettingsResource.get().$promise;
      },
      'lastSyncReport': function(SynchroResource) {
        return SynchroResource.getLastSyncReport().$promise;
      },
      'syncStatus': function(SynchroResource) {
        return SynchroResource.getSyncStatus().$promise;
      }
    }
  });


  $routeProvider.when('/specialities/add', {
    templateUrl: 'spec-add.html',
    controller: 'SpecAddController'
  });

  $routeProvider.when('/specialities', {
    templateUrl: 'spec.html',
    controller: 'SpecController',
    resolve: {
      'settings': function(SettingsResource) {
        return SettingsResource.get().$promise;
      }
    }
  });

  $routeProvider.when('/history', {
    templateUrl: 'history.html',
    controller: 'HistoryController',
    resolve: {
      'reports': function(HistoryResource) {
        return HistoryResource.list({pageNum : 0, orderBy: 'startTime', sortDir: 'DESC'}).$promise;
      },
      'reportsSize': function(HistoryResource) {
        return HistoryResource.getSize().$promise;
      }
    }
  });

  // todo: implement specific report info page
  /*$routeProvider.when('/history/:id', {
    templateUrl: 'history-details.html',
    controller: 'HistoryDetailsController',
    resolve: {
      'statisticsDetails': function($routeParams) {
        return {
          id: $routeParams.id,
          start: 'June 18th 2015, 09:56',
          end: 'June 18th 2015, 10:44',
          duration: '00:33:22',
          resouces: [
            {id: 1, url: 'http://www.sage.com/'},
            {id: 2, url: 'http://www.sage.com/'},
            {id: 3, url: 'http://www.sage.com/'},
            {id: 4, url: 'http://www.sage.com/'}
          ]
        };
      }
    }
  });*/

  $routeProvider.otherwise({ redirectTo: '/login' });

  $httpProvider.defaults.useXDomain = true;
  $httpProvider.defaults.withCredentials = true;
  delete $httpProvider.defaults.headers.common["X-Requested-With"];
  $httpProvider.defaults.headers.common["Accept"] = "application/json";
  $httpProvider.defaults.headers.common["Content-Type"] = "application/json";

});
