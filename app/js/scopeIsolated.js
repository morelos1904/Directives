var app = angular.module("app",[]);

app.controller("MainCtrl", function( $scope ){
    $scope.name = "Harry";
    $scope.color = "#333333";
	
    $scope.reverseName = function(){
     $scope.name = $scope.name.split("").reverse().join("");
    };
    $scope.randomColor = function(){
        $scope.color = '#'+Math.floor(Math.random()*16777215).toString(16);
    };
});

/*
	Scope All these prefixes receives data from attributes of the directive element

	If we use 
	@ -> we have to use {} to surrond the value in 
	the html document . It means ONLY text-binding ,one-way binding 
	= -> It is equal that scope false , it gets bounded to its parent.
	So each change that we do in the child it will reflected in its parent.
	Two way binding
	& -> Behaviour binding , it is going to execute its parent function
	
	As an example if we use the next example , it will look up for an attribute 
	named parentName
	scope : {
		name: "@parentName"
	}
	
	
	
*/
app.directive("myDirective", function(){    
    return {
        restrict: "EA",
        scope: {
            name: "@",						// It's going to take the value of the input called name in the directive
            color: "=colores",						// It's going to bind this property with the color 
            reverse: "&"					// It's going to the take the behaviour of the reverse
        },
        template: [
            "<div class='line'>",
            "Name : <strong></strong>;  Change name:<input type='text' ng-model='name' /><br/>",
            "</div><div class='line'>",
            "Color : <strong style='color:{{color}}'>{{color|uppercase}}</strong>;  Change color:<input type='text' ng-model='color' /><br/></div>",
            "<br/><input type='button' ng-click='reverse()' value='Reverse Name'/>"
        ].join("")    
    };
});
