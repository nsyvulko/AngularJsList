
"use strict";

var App = angular.module("todo", ["LocalStorageModule"]);

App.controller("TodoCtrl", function ($scope, localStorageService) {

	$scope.init = function () {

		if (!localStorageService.get("todoList")) {
			$scope.model = [
				{
					name: "My Issues", list: [
						{ taskName: "Create list using AngularJS" },
						{ taskName: "To do best" }
					]
				}
			];
		}else{
			$scope.model = localStorageService.get("todoList");
		}
		$scope.show = "All";
		$scope.currentShow = 0;
	};

	$scope.addTodo = function () {
		$scope.model[$scope.currentShow].list.push({taskName: $scope.newTodo });
		$scope.newTodo = "";
	};

	$scope.deleteTodo = function (item) {
		var index = $scope.model[$scope.currentShow].list.indexOf(item);
		$scope.model[$scope.currentShow].list.splice(index, 1);
	};
	$scope.$watch("model",function (newVal,oldVal) {
		if (newVal !== null && angular.isDefined(newVal) && newVal!==oldVal) {
			localStorageService.add("todoList",angular.toJson(newVal));
		}
	},true);
});