import angular from 'angular';

import AuthTokenProvider from './auth-token.provider';
import AuthInterceptorProvider from './auth-interceptor.provider';

let providersModule = angular.module('app.shared.providers', [])
    .provider('AuthTokenProvider', AuthTokenProvider)
    .provider('AuthInterceptorProvider', AuthInterceptorProvider);

export default providersModule;