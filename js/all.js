var app = angular.module("myApp", []);
app.controller("firstCtrl", function($rootScope, $scope) {
    $rootScope.name = "bachu";
    $scope.firstName = "brahmam";
    $scope.employeeData = [{
            name: "bachu",
            cell: 8970215255,
            age: 30,
            email: "brammi.17@gmail.com"
        },
        {
            name: "vaishali",
            cell: 9894356266,
            age: 28,
            email: "rvaishalimca@gmail.com"
        },
        {
            name: "karishma",
            cell: 9990257767,
            age: 22,
            email: "karishmachaprana@gmail.com"
        },
        {
            name: "bhuvana",
            cell: 8073412306,
            age: 28,
            email: "incerd.bhuvana@gmail.com"
        },
        {
            name: "rajesh",
            cell: 7842451749,
            age: 22,
            email: "rajeshkhanna55@gmail.com"
        },
        {
            name: "harish",
            cell: 9440888385,
            age: 23,
            email: "jenneharishnaidu96@gmail.com"
        }
    ];
    console.log($scope.employeeData[5].name);
    console.log($scope.employeeData[3].age);
    console.log($scope.employeeData[1].cell);
});