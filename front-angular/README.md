# AngularJS Basic

## ๐ ๊ธฐ๋ณธ๋ฌธ๋ฒ

### ๋ชจ๋์์ฑ
- ์๋ฃํ ๋ณ์๋ช = angular(๋ชจ๋์ด๋ฆ, []);
- NgModule ์ ๊ด๋ จ์ด ์๋ ๊ตฌ์ฑ์์(์ปดํฌ๋ํธ, ๋๋ ํฐ๋ธ, ํ์ดํ, ์๋น์ค ๋ฑ)๋ฅผ ํ๋์ ๋จ์๋ก ๋ฌถ๋ ๋ฉ์ปค๋์ฆ
### ์ปจํธ๋กค๋ฌ์ง์ 
- angular.module("app").controller("์ปจํธ๋กค๋ฌ์ด๋ฆ", function($scope){})

### ์ค์ฝํ
- ์๋ฐฉํฅ ๋ฐ์ดํฐ ๋ฐ์ธ๋ฉ์ ํต์ฌ์ด์, ๋ทฐ์ ์ปจํธ๋กค๋ฌ๋ฅผ ์ฐ๊ฒฐํ๋ ๊ฐ๋
- ๊ฐ์ฒด๋ ์ฐ๊ฒฐ๋ DOM ์์์์ Data์ Function์ด ์ฌ์ฉ๋๋ ๊ณต๊ฐ

## ๐ ์ฌ์ฉ๋ฐฉ๋ฒ

- htmlํ๊ทธ์ angular์ด๋ฆ์ ์ง์ ํจ์ผ๋ก์จ ๋ช์์ ์ฌ์ฉ
- module์ ๋จผ์  ์ ์ธํด์ฃผ๊ณ  ์ถํ์ controller๋ฅผ ์ฐ๊ฒฐํด ์ฌ์ฉ
- ๋ชจ๋๋ช.controller('์ปจํธ๋กค๋ฌ๋ช', function(์ธ์๊ฐ) {์ธ์๊ฐ.ํจ์๋ช = ํจ์;});
- ์ฝ๋
    - ng-app="module๋ช" : ์ง์ ๋ ๋ฒ์ ๋ด angular ๋ฌธ๋ฒ ์ ์ฉ
	- ng-controller="method๋ช" : angular ํจ์ ์ฌ์ฉ
	- ng-repeat="item in boardList" : ๋ฐ๋ณต๋ฌธ
	- ng-(event๋ช)="" : ์ด๋ฒคํธ์ฒ๋ฆฌ

## ๐ ๊ฐ๋ ๋ฐ ์์, ์ฌ์ฉ๋ฒ

### directives 
- AngularJS๊ฐ DOM ์์์ ์ง์ ๋ ๋์์ ์ฒจ๋ถํ๊ฑฐ๋ DOM ์์์ ๊ทธ ์์์ ๋ณํํ๋๋ก ์ง์ํ๋ DOM ์์์ ๋ง์ปค์๋๋ค. ๊ฐ๋จํ ๋งํด์ HTML์ ํ์ฅ
-  ์ข๋ฅ
    - ng-app : Auto bootstrap AngularJS application.
    - ng-init : Initializes AngularJS variables
    - ng-model : Binds HTML control's value to a property on the $scope object.
    - ng-controller : Attaches the controller of MVC to the view.
    - ng-bind : Replaces the value of HTML control with the value of specified AngularJS expression.
    - ng-repeat	: Repeats HTML template once per each item in the specified collection.
    - ng-show : Display HTML element based on the value of the specified expression.
    - ng-readonly : Makes HTML element read-only based on the value of the specified expression.
    - ng-disabled : Sets the disable attribute on the HTML element if specified expression evaluates to true.
    - ng-if	: Removes or recreates HTML element based on an expression.
    - ng-click : Specifies custom behavior when an element is clicked.
### parentcontroller ์ childcontroller, rootScope
- parentcontroller์์ ์ ์๋ผ ์๋ ์ค์ฝํ๋ childcontroller์์ ์ ๊ทผ๊ฐ๋ฅํ๋ค. 
    ๋ฐ๋๋ ๋ถ๊ฐ๋ฅํจ.
- rootScope๋ ์ ์ญ๋ณ์์ฒ๋ผ ์ด๋ค ์ปจํธ๋กค๋ฌ์์๋ ์ ๊ทผ์ด ๊ฐ๋ฅํ๋ค.
### Angular ์ด๋ฒคํธ
- ng-blur
- ng-change
- ng-click
- ng-dblclick
- ng-focus
- ng-keydown
- ng-keyup
- ng-keypress
- ng-mousedown
- ng-mouseenter
- ng-mouseleave
- ng-mousemove
- ng-mouseover
- ng-mouseup
### Service
- AngularJS ์๋น์ค๋ ์ ํ๋ฆฌ์ผ์ด์ ์ ์ฒด์์ ์ฌ์ฌ์ฉํ  ์ ์๋ ํน์  ์์์ ์ํ JavaScript ๊ธฐ๋ฅ
- AngularJS์๋ ๋ค์ํ ๋ชฉ์ ์ ์ํ ์๋น์ค๊ฐ ํฌํจ๋์ด ์์ต๋๋ค. ์๋ฅผ ๋ค์ด, $http ์๋น์ค๋ฅผ ์ฌ์ฉํ์ฌ ์๊ฒฉ ์๋ฒ์ AJAX ์์ฒญ์ ๋ณด๋ผ ์ ์์ต๋๋ค. AngularJS๋ฅผ ์ฌ์ฉํ๋ฉด ์์ฉ ํ๋ก๊ทธ๋จ์ ๋ํ ์ฌ์ฉ์ ์ง์  ์๋น์ค๋ฅผ ๋ง๋ค ์๋ ์์ต๋๋ค.
- $http Service
- $http ์๋น์ค๋ ๋ธ๋ผ์ฐ์ ์ XMLHttpRequest ๋๋ JSONP๋ฅผ ์ฌ์ฉํ์ฌ ์๊ฒฉ ์๋ฒ์์ ๋ฐ์ดํฐ๋ฅผ ๋ณด๋ด๊ฑฐ๋ ๋ฐ๋ ๋ฐ ์ฌ์ฉ๋ฉ๋๋ค.
    - $http.get() : Http GET ์์ฒญ์ ์ํํฉ๋๋ค.
    - $http.head() : Http HEAD ์์ฒญ์ ์ํํฉ๋๋ค.
    - $http.post() : Http POST ์์ฒญ์ ์ํํฉ๋๋ค.
    - $http.put() : Http PUT ์์ฒญ์ ์ํํฉ๋๋ค.
    - $http.delete() : Http DELETE ์์ฒญ์ ์ํํฉ๋๋ค.
    - $http.jsonp()	: Http JSONP ์์ฒญ์ ์ํํฉ๋๋ค.
    - $http.patch()	: Http PATCH ์์ฒญ์ ์ํํฉ๋๋ค.
        






> spa : ์๋ฒ๋ก๋ถํฐ ์์ ํ ์๋ก์ด ํ์ด์ง๋ฅผ ๋ถ๋ฌ์ค์ง ์๊ณ  ํ์ฌ์ ํ์ด์ง๋ฅผ ๋์ ์ผ๋ก ๋ค์ ์์ฑํจ์ผ๋ก์จ ์ฌ์ฉ์์ ์ํตํ๋ ์น ์ ํ๋ฆฌ์ผ์ด์์ด๋ ์น์ฌ์ดํธ๋ฅผ ๋งํ๋ค.





