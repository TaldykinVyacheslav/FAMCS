/*
 * Copyright (c) 2015 Dual Lab sprl - All rights reserved
 *
 * filename: authentication_service.js
 */

angular.module("app").factory('AuthenticationService', ['Base64Service', '$rootScope', 'UserResource', '$cookieStore', '$http', function (Base64Service, $rootScope, UserResource, $cookieStore, $http) {
  $http.defaults.headers.common['Authorization'] = $cookieStore.get('authentication');
  $http.defaults.headers.common['userId'] = $cookieStore.get('userId');

  var _credentials = { username: $cookieStore.get('username'), userId: $cookieStore.get('userId') };
  var _currentUser = null;


  //================================
  // Status functions
  //================================
  var getCurrentUser = function () {
    return _currentUser;
  };

  var isLoggedIn = function () {
    return _currentUser != null;
  };

  //================================
  // Login
  //================================
  var _loginHandlers = [];
  var addLoginHandler = function(handler) {
    _loginHandlers.push(handler);
  };
  var login = function (credentials) {
    _credentials = credentials;
    //$http.defaults.headers.common['Authorization'] = 'Basic ' + Base64Service.encode(credentials.username + ':' + credentials.password);
    var login = UserResource.login(
      {
        "UserName": credentials.username,
        "Password": credentials.password,
        "RememberMe":"false"
      });
    login.$promise.then(function(response) {
      var responseStr = '';

      for(var i = 0; i < 'Succeeded'.length; i++) {
        responseStr += response[i] || '';
      }

      if(responseStr === 'Succeeded') {
        _currentUser = UserResource.get({id: credentials.userId});
        _currentUser.$promise.then(_loginSuccess).catch(_loginFailed);
      } else {
        _currentUser = null;
        _loginFailed();
      }

    });

    return login;
  };
  var _loginSuccess = function () {
    $cookieStore.put('username', _credentials.username);
    $cookieStore.put('authentication', $http.defaults.headers.common['Authorization']);
    angular.forEach(_loginHandlers, function(handler) {
      handler();
    });
  };
  var _loginFailed = function (response) {
    _credentials = {};
    _currentUser = null;
    delete $http.defaults.headers.common['Authorization'];
  };

  //================================
  // Auto-login
  //================================
  if (_credentials.username) {
    _currentUser = UserResource.get({id: _credentials.userId});
    _currentUser.$promise.then(function() {
      angular.forEach(_loginHandlers, function(handler) {
        handler();
      });
    });
  }

  //================================
  // Logout functions
  //================================
  var _logoutHandlers = [];
  var addLogoutHandler = function(handler) {
    _logoutHandlers.push(handler);
  };

  var logout = function () {
    _credentials = {};
    _currentUser = null;
    $cookieStore.remove('username');
    $cookieStore.remove('authentication');
    delete $http.defaults.headers.common['Authorization'];
    angular.forEach(_logoutHandlers, function(handler) {
      handler();
    });
  };

  return {
    login: login,
    addLoginHandler: addLoginHandler,
    logout: logout,
    addLogoutHandler: addLogoutHandler,
    getCurrentUser: getCurrentUser,
    isLoggedIn: isLoggedIn
  };
}]);