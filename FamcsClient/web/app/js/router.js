angular.module("app").config(function($routeProvider, $locationProvider, $httpProvider) {

  $locationProvider.html5Mode({enabled:true});

  $routeProvider.when('/login', {
    templateUrl: 'login.html',
    controller: 'LoginController'
  });

  $routeProvider.when('/home', {
    templateUrl: 'home.html',
    controller: 'HomeController'
  });


  $routeProvider.when('/specialities/add', {
    templateUrl: 'spec-item.html',
    controller: 'SpecItemController'
  });

  $routeProvider.when('/specialities', {
    templateUrl: 'spec.html',
    controller: 'SpecController',
    resolve: {
      'specialities': function() {
        return [
          {
            "Name":"Прикладная математика",
            "FacultyId":"1"
          },
          {
            "Name":"Прикладная информатика",
            "FacultyId":"1"
          },
          {
            "Name":"Информатика",
            "FacultyId":"1"
          }
        ];
      }
    }
  });

  $routeProvider.when('/departments', {
    templateUrl: 'dep.html',
    controller: 'DepController',
    resolve: {
      'departments': function() {
        return [
          {
            "Name":"Информационных систем управления",
            "FacultyId":"1"
          },
          {
            "Name":"Вычислительной математики",
            "FacultyId":"1"
          },
          {
            "Name":"Многопроцессорных систем и сетей",
            "FacultyId":"1"
          }
        ];
      }
    }
  });

  $routeProvider.when('/students', {
    templateUrl: 'stud.html',
    controller: 'StudController',
    resolve: {
      'students': function() {
        return [
          {
            "FirstName":"Вячеслав",
            "LastName":"Талдыкин",
            "Email":"slava@mail.com"
          },
          {
            "FirstName":"Томас",
            "LastName":"Блажукас",
            "Email":"tomas@mail.com"
          },
          {
            "FirstName":"Игнат",
            "LastName":"Климчук",
            "Email":"ignat@mail.com"
          },
          {
            "FirstName":"Павел",
            "LastName":"Савик",
            "Email":"ignat@mail.com"
          },
          {
            "FirstName":"Александр",
            "LastName":"Полторацкий",
            "Email":"ignat@mail.com"
          }
        ];
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
