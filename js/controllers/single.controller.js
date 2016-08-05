let SingleController = function($scope, $stateParams, TicketService, $state) {

  let ticketId = $stateParams.id; 

  TicketService.getTicket(ticketId).then( (res) => {
    console.log('single', res);

    $scope.ticket = res.data;
  });


  $scope.updateTicket = function (obj) {
    TicketService.update(obj).then( (res) => {
      $state.go('root.list');

    });
  };


  $scope.deleteTicket = function (obj) {
    console.log('deleted', obj);
    
    TicketService.delete(obj).then( (res) => {
      console.log(res);
      $state.go('root.list');
    });
  };

};

SingleController.$inject = ['$scope', '$stateParams', 'TicketService', '$state'];

export default SingleController;