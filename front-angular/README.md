# AngularJS Basic

## 📌 기본문법

### 모듈생성
- 자료형 변수명 = angular(모듈이름, []);
- NgModule 은 관련이 있는 구성요소(컴포넌트, 디렉티브, 파이프, 서비스 등)를 하나의 단위로 묶는 메커니즘
### 컨트롤러지정
- angular.module("app").controller("컨트롤러이름", function($scope){})

### 스코프
- 양방향 데이터 바인딩의 핵심이자, 뷰와 컨트롤러를 연결하는 개념
- 객체는 연결된 DOM 요소에서 Data와 Function이 사용되는 공간

## 📌 사용방법

- html태그에 angular이름을 지정함으로써 명시적사용
- module을 먼저 선언해주고 추후에 controller를 연결해 사용
- 모듈명.controller('컨트롤러명', function(인자값) {인자값.함수명 = 함수;});
- 코드
    - ng-app="module명" : 지정된 범위 내 angular 문법 적용
	- ng-controller="method명" : angular 함수 사용
	- ng-repeat="item in boardList" : 반복문
	- ng-(event명)="" : 이벤트처리

## 📌 개념 및 요소, 사용법

### directives 
- AngularJS가 DOM 요소에 지정된 동작을 첨부하거나 DOM 요소와 그 자식을 변환하도록 지시하는 DOM 요소의 마커입니다. 간단히 말해서 HTML을 확장
-  종류
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
### parentcontroller 와 childcontroller, rootScope
- parentcontroller에서 정의돼 있는 스코프는 childcontroller에서 접근가능하다. 
    반대는 불가능함.
- rootScope는 전역변수처럼 어떤 컨트롤러에서도 접근이 가능하다.
### Angular 이벤트
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
- AngularJS 서비스는 애플리케이션 전체에서 재사용할 수 있는 특정 작업을 위한 JavaScript 기능
- AngularJS에는 다양한 목적을 위한 서비스가 포함되어 있습니다. 예를 들어, $http 서비스를 사용하여 원격 서버에 AJAX 요청을 보낼 수 있습니다. AngularJS를 사용하면 응용 프로그램에 대한 사용자 지정 서비스를 만들 수도 있습니다.
- $http Service
- $http 서비스는 브라우저의 XMLHttpRequest 또는 JSONP를 사용하여 원격 서버에서 데이터를 보내거나 받는 데 사용됩니다.
    - $http.get() : Http GET 요청을 수행합니다.
    - $http.head() : Http HEAD 요청을 수행합니다.
    - $http.post() : Http POST 요청을 수행합니다.
    - $http.put() : Http PUT 요청을 수행합니다.
    - $http.delete() : Http DELETE 요청을 수행합니다.
    - $http.jsonp()	: Http JSONP 요청을 수행합니다.
    - $http.patch()	: Http PATCH 요청을 수행합니다.
        






> spa : 서버로부터 완전한 새로운 페이지를 불러오지 않고 현재의 페이지를 동적으로 다시 작성함으로써 사용자와 소통하는 웹 애플리케이션이나 웹사이트를 말한다.





