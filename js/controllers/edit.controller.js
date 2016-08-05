let EditController = function($scope, $stateParams, TicketService, $state) {

  TicketService.getTicket($stateParams.id).then( (res) => {
    $scope.singleTicket = res.data;
  });

  $scope.updateTicket = function (obj) {
    TicketService.updateTicket(obj).then( (res) => {
      console.log(res);
      $state.go('root.list');

    });
  };

};

EditController.$inject = ['$scope', '$stateParams', 'TicketService', '$state'];

export default EditController;