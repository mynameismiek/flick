'use strict';

angular.module('flickApp.auth', [
  'flickApp.constants',
  'flickApp.util',
  'ngCookies',
  'ui.router'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
