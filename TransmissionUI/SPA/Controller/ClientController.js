

app.controller('ClientCtrl', ['$scope','$http', function ($scope, $http) {

    $http.get('/Data/Client.json')
        .success(function (data) {
            console.log('file loaded');
            $scope.clients = data;
        })
        .error(function(error)
        {
            console.log('file loading filed');
        })

   

    //$scope.gridOptions = {
    //    data: 'clients',
    //    multiSelect: false,
    //    rowHeight: 25,
    //    showFooter: false,
    //    footerRowHeight: 40,
    //    enableColumnReordering: false,
    //    showColumnMenu: false,
    //    enableColumnResize: false,
    //    enableRowSelection: false,
        
    //    enablePaging: true,
       
       
       
       
    //    useExternalSorting: false,
    //    virtualizationThreshold: 50,
        
      
    //};

    $scope.mySelection = [];

    $scope.gridOptions = {
        data: 'clients',
        showGroupPanel: true,
        multiSelect: false,
        selectedItems:$scope.mySelection,
        enablePaging: true,
        columnDefs: [
            { field: 'CLIENT_NUM', displayName:'Client Number'},
            { field: 'CLIENT_NAME', displayName: 'Name' },
            { field: 'BANK_ADDRESS', displayName: 'Address' },
            { field: 'STATE', displayName: 'State' },
            { field: 'UPDATED_BY', displayName: 'Updated by' }
        ],
        jqueryUITheme: true
       
    };
}]);












//app.controller('ClientCtrl',function($scope,ClientService){

//    GetAllClients();
//    $scope.msg = "hello";
//    function GetAllClients(){
//        var promiseGet = ClientService.getClients();

//        promiseGet.then(function (client) {
//            $scope.Clients = client.data, $scope.Data = client.data
//        },

//        function (error) {
//            $log.error('some error in getting records', error);
//        });
//    }
//    $scope.gridOptions = { data: 'Data' };
//});