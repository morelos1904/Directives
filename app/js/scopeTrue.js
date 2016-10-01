var app = angular.module("ScopeTrue",[]);

app.controller("Ctrl1",function($scope){
	$scope.name = "Harry";
	$scope.reverseName = function(){
		$scope.name = $scope.name.split('').reverse().join('');
	};
});
app.directive("myDirective", function(){
	return {
		restrict: "EA",
		scope: true,
		template: "<div>Your name is : {{name}}</div>"+
		"Change your name : <input type='text' ng-model='name' />"
	};
});