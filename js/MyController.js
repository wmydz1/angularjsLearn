
function MyController($scope) {
    $scope.p = {
        sex  : "female"
    };
}

function Sayhello($scope){
    $scope.username ="Google Angular";
    $scope.sayHello = function(){
        $scope.greeting = 'Hello ' +$scope.username+"!!!";
    };
}



