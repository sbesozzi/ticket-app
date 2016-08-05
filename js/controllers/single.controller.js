let SingleController = function($scope, $stateParams, TicketService, $state) {

  TicketService.getTicket($stateParams.id).then( (res) => {
    $scope.singleTicket = res.data;
  });


  $scope.deleteTicket = function (obj) {
    TicketService.delete(obj).then( (res) => {
      console.log(res);
      $state.go('root.list');
    });
  };

};

SingleController.$inject = ['$scope', '$stateParams', 'TicketService', '$state'];

export default SingleController;