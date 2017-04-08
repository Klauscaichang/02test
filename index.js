(function(){
    var myApp = angular.module('myApp',[]);

    myApp.controller('myC',function($scope){

        $scope.username = '222';
        $scope.password = '';
        $scope.confirm = '';
        $scope.isAgree = false;
        $scope.commit = function(){
            if($scope.username.length>6){
                $scope.Nmsg = '用户名过长';
                return;
            }
            if($scope.password<6){
                $scope.Pmsg = '密码过短';
                return;
            }
            if($scope.confirm!==$scope.password){
                $scope.Cmsg = '两次密码一样';
                return;
            }
            if(!$scope.isAgree){
                $scope.Imsg = '请同意协议';
                return;
            }
            var user = new user($scope.username,$scope.password);
            if(user.isSave()){
                $scope.btn = '注册成功';
            }else{
                $scope.btn = '用户名一致';
            }

        }
    })

    function user(name,pass){
        this.name = name;
        this.pass = pass;
    }
    user.prototype.isSave = function(){
        var local = localStorage.getItem('user') || "[]";
        var result = JSON.parse(local);
        for(var i = 0 ; i < result.length ; i++){
            if(this.name === result[i].name ){
                return false;
            }
        }
        result.push({ name : this.name , pass : this.pass });
        var jsonStr = JSON.stringify(result);
        localStorage.setItem('user',jsonStr);
        return true;
    }

})()