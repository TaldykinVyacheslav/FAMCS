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
      'specialities': function() {
        return [
          {
            "Name":"Информационных систем управления",
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

  $routeProvider.when('/specialities/add', {
    templateUrl: 'spec-item.html',
    controller: 'SpecItemController',
    resolve: {
      'addMode': function() { return true; },
      'spec': function() {
        return {
          "Name":"",
          "Description": ""
        };
      }
    }
  });

  $routeProvider.when('/specialities/:id', {
    templateUrl: 'spec-item.html',
    controller: 'SpecItemController',
    resolve: {
      'addMode': function() { return false; },
      'spec': function() {
        return {
          "Name":"Прикладная математика",
          "Description": "Прикладная математика – область знаний, включающая в себя " +
          "совокупность современных математических методов, средств математического " +
          "моделирования и компьютерных технологий, ориентированных на непосредственное \n\n" +
          "использование во всех сферах научной, производственной и хозяйственной деятельности." +
          "В соответствии с ОКРБ 011-2009 специальность «Прикладная математика» относится к " +
          "естественнонаучному профилю подготовки специалистов с высшим математическим образованием," +
          "входит в группу специальностей «Математические науки и информатика» и имеет код 1-31 03 03.\n\n" +
          "В рамках специальности на факультете ведется подготовка специалистов по направлению " +
          "«Прикладная математика» (научно-производственная деятельность). Курс обучения " +
          "обеспечивает получение профессиональной квалификации «математик-программист»."
        };
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

  $routeProvider.when('/groups/add', {
    templateUrl: 'gr-item.html',
    controller: 'GrItemController',
    resolve: {
      'addMode': function() { return true; },
      'gr': function() {
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
      }
    }
  });

  $routeProvider.when('/departments/:id', {
    templateUrl: 'dep-item.html',
    controller: 'DepItemController',
    resolve: {
      'addMode': function() { return false; },
      'dep': function() {
        return {
          "Name":"Информационных систем управления",
          "Description": "Дата образования: март 1971 г.\n\n" +
          "Преподавательский состав: 3 профессора (доктора наук), " +
          "8 доцентов (кандидаты наук), 6 старших преподавателей и 3 ассистента.\n\n" +
          "Заведующий кафедрой — КРАСНОПРОШИН Виктор Владимирович, профессор," +
          "доктор технических наук.\n\n" +
          "На кафедре подготовлено 3 доктора и более 50 кандидатов наук. " +
          "Среди них  представители различных стран: Афганистана, Болгарии, " +
          "Венгрии, Вьетнама, Германии, Иордании, Китая, Кубы, Польши, Сирии и стран СНГ.\n\n" +
          "Сотрудники кафедры проходили научные стажировки в ведущих университетах Болгарии, " +
          "Венгрии, Германии, Испании, Норвегии, США, Финляндии, Франции."
        };
      }
    }
  });

  $routeProvider.when('/groups', {
    templateUrl: 'gr.html',
    controller: 'GrController',
    resolve: {
      'groups': function() {
        return [
          {
            "Name":"Группа 1",
            "DepartmentId":"1",
            "SpecialtyId":"1"
          },
          {
            "Name":"Группа 2",
            "DepartmentId":"2",
            "SpecialtyId":"2"
          },
          {
            "Name":"Группа 3",
            "DepartmentId":"3",
            "SpecialtyId":"3"
          },
          {
            "Name":"Группа 4",
            "DepartmentId":"1",
            "SpecialtyId":"2"
          },
          {
            "Name":"Группа 5",
            "DepartmentId":"2",
            "SpecialtyId":"3"
          }
        ];
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
          "SpecialtyId":""
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
      }
    }
  });

  $routeProvider.when('/groups/:id', {
    templateUrl: 'gr-item.html',
    controller: 'GrItemController',
    resolve: {
      'addMode': function() { return false; },
      'gr': function() {
        return {
          "Name":"Группа 2",
          "DepartmentId":"2",
          "SpecialtyId":"2"
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
