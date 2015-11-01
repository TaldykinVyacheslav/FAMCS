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

  $routeProvider.when('/specialities', {
    templateUrl: 'spec.html',
    controller: 'SpecController',
    resolve: {
      'specialities': function(SpecResource) {
        return SpecResource.get().$promise;
      }
    }
  });

  $routeProvider.when('/specialities/add', {
    templateUrl: 'spec-item.html',
    controller: 'SpecItemController',
    resolve: {
      'addMode': function() { return true; },
      'spec': function() {
        return {
          "Name":"",
          "Description": "",
          "FacultyId":"1"
        };
      }
    }
  });

  $routeProvider.when('/specialities/:id', {
    templateUrl: 'spec-item.html',
    controller: 'SpecItemController',
    resolve: {
      'addMode': function() { return false; },
      'spec': function($route, SpecResource) {
        return SpecResource.get({id: $route.current.params.id}).$promise;
      }
    }
  });

  $routeProvider.when('/departments', {
    templateUrl: 'dep.html',
    controller: 'DepController',
    resolve: {
      'departments': function(DepResource) {
        return DepResource.get().$promise;
      }
    }
  });

  $routeProvider.when('/departments/add', {
    templateUrl: 'dep-item.html',
    controller: 'DepItemController',
    resolve: {
      'addMode': function() { return true; },
      'dep': function(DepResource) {
        return {
          "FacultyId":"1",
          "Name":"",
          "Description": ""
        };
      }
    }
  });

  $routeProvider.when('/departments/:id', {
    templateUrl: 'dep-item.html',
    controller: 'DepItemController',
    resolve: {
      'addMode': function() { return false; },
      'dep': function($route, DepResource) {
        return DepResource.get({id: $route.current.params.id}).$promise;
      }
    }
  });

  $routeProvider.when('/groups', {
    templateUrl: 'gr.html',
    controller: 'GrController',
    resolve: {
      'groups': function (GrResource) {
        return GrResource.get().$promise;
      }
    }
  });

  $routeProvider.when('/groups/add', {
    templateUrl: 'gr-item.html',
    controller: 'GrItemController',
    resolve: {
      'addMode': function() { return true; },
      'gr': function() {
        return {
          "Name":"",
          "DepartmentId":"",
          "SpecialtyId":"",
          "FacultyId":"1"
        };
      },
      'specialities': function(SpecResource) {
        return SpecResource.get().$promise;
      },
      'departments': function(DepResource) {
        return DepResource.get().$promise;
      }
    }
  });

  $routeProvider.when('/groups/:id', {
    templateUrl: 'gr-item.html',
    controller: 'GrItemController',
    resolve: {
      'addMode': function() { return false; },
      'gr': function($route, GrResource) {
        return GrResource.get({id: $route.current.params.id}).$promise;
      },
      'specialities': function(SpecResource) {
        return SpecResource.get().$promise;
      },
      'departments': function(DepResource) {
        return DepResource.get().$promise;
      }
    }
  });

  $routeProvider.when('/students/:id', {
    templateUrl: 'stud-item.html',
    controller: 'StudItemController',
    resolve: {
      'addMode': function() { return false; },
      'stud': function() {
        return {
          "FirstName": "Александр",
          "LastName": "Полторацкий",
          "Email": "alex@mail.com",
          "GroupId": "2",
          "DepartmentId": "1",
          "SpecialityId": "3"
        };
      },
      'specialities': function () {
        return [
          {
            "Name":"Прикладная математика",
            "Id":"1"
          },
          {
            "Name":"Информатика",
            "Id":"2"
          },
          {
            "Name":"Прикладная информатика",
            "Id":"3"
          }
        ];
      },
      'departments': function() {
        return [
          {
            "Name":"Информационных систем управления",
            "Id":"1"
          },
          {
            "Name":"Вычислительной математики",
            "Id":"2"
          },
          {
            "Name":"Многопроцессорных систем и сетей",
            "Id":"3"
          }
        ];
      },
      'groups': function() {
        return [
          {
            "Name": "1",
            "Id": "1"
          },
          {
            "Name": "2",
            "Id": "2"
          },
          {
            "Name": "3",
            "Id": "3"
          },
          {
            "Name": "4",
            "Id": "4"
          },
          {
            "Name": "5",
            "Id": "5"
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
            "Email":"pavel@mail.com"
          },
          {
            "FirstName":"Александр",
            "LastName":"Полторацкий",
            "Email":"alex@mail.com"
          }
        ];
      },
      'specialities': function () {
        return [
          {
            "Name":"Прикладная математика",
            "Id":"1"
          },
          {
            "Name":"Информатика",
            "Id":"2"
          },
          {
            "Name":"Прикладная информатика",
            "Id":"3"
          }
        ];
      },
      'departments': function() {
        return [
          {
            "Name":"Информационных систем управления",
            "Id":"1"
          },
          {
            "Name":"Вычислительной математики",
            "Id":"2"
          },
          {
            "Name":"Многопроцессорных систем и сетей",
            "Id":"3"
          }
        ];
      },
      'groups': function() {
        return [
          {
            "Name": "1",
            "Id": "1"
          },
          {
            "Name": "2",
            "Id": "2"
          },
          {
            "Name": "3",
            "Id": "3"
          },
          {
            "Name": "4",
            "Id": "4"
          },
          {
            "Name": "5",
            "Id": "5"
          }
        ];
      }
    }
  });

  $routeProvider.when('/students/add', {
    templateUrl: 'stud-item.html',
    controller: 'StudItemController',
    resolve: {
      'addMode': function() { return true; },
      'stud': function() {
        return {
          "Name":"",
          "Description": ""
        };
      },
      'specialities': function () {
        return [
          {
            "Name":"Прикладная математика",
            "Id":"1"
          },
          {
            "Name":"Информатика",
            "Id":"2"
          },
          {
            "Name":"Прикладная информатика",
            "Id":"3"
          }
        ];
      },
      'departments': function() {
        return [
          {
            "Name":"Информационных систем управления",
            "Id":"1"
          },
          {
            "Name":"Вычислительной математики",
            "Id":"2"
          },
          {
            "Name":"Многопроцессорных систем и сетей",
            "Id":"3"
          }
        ];
      },
      'groups': function() {
        return [
          {
            "Name": "1",
            "Id": "1"
          },
          {
            "Name": "2",
            "Id": "2"
          },
          {
            "Name": "3",
            "Id": "3"
          },
          {
            "Name": "4",
            "Id": "4"
          },
          {
            "Name": "5",
            "Id": "5"
          }
        ];
      }
    }
  });

  $routeProvider.when('/students/:id', {
    templateUrl: 'stud-item.html',
    controller: 'StudItemController',
    resolve: {
      'addMode': function() { return false; },
      'stud': function() {
        return {
          "FirstName": "Александр",
          "LastName": "Полторацкий",
          "Email": "alex@mail.com",
          "GroupId": "2",
          "DepartmentId": "1",
          "SpecialityId": "3"
        };
      },
      'specialities': function () {
        return [
          {
            "Name":"Прикладная математика",
            "Id":"1"
          },
          {
            "Name":"Информатика",
            "Id":"2"
          },
          {
            "Name":"Прикладная информатика",
            "Id":"3"
          }
        ];
      },
      'departments': function() {
        return [
          {
            "Name":"Информационных систем управления",
            "Id":"1"
          },
          {
            "Name":"Вычислительной математики",
            "Id":"2"
          },
          {
            "Name":"Многопроцессорных систем и сетей",
            "Id":"3"
          }
        ];
      },
      'groups': function() {
        return [
          {
            "Name": "1",
            "Id": "1"
          },
          {
            "Name": "2",
            "Id": "2"
          },
          {
            "Name": "3",
            "Id": "3"
          },
          {
            "Name": "4",
            "Id": "4"
          },
          {
            "Name": "5",
            "Id": "5"
          }
        ];
      }
    }
  });

  $routeProvider.otherwise({ redirectTo: '/login' });

  $httpProvider.defaults.useXDomain = true;
  $httpProvider.defaults.withCredentials = true;
  delete $httpProvider.defaults.headers.common["X-Requested-With"];
  $httpProvider.defaults.headers.common["Accept"] = "application/json";
  $httpProvider.defaults.headers.common["Content-Type"] = "application/json";

});
