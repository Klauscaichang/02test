(function(){
    var myApp = angular.module('myApp',[]);

    myApp.controller('myC',function($scope){

        $scope.username = '';
        $scope.password = '';
        $scope.confirm = '';
        $scope.isAgree = false;
        $scope.commit = function(){


        }
    })

})()