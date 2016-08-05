let AddController = function($scope, TicketService, $state, $stateParams) {

  $scope.createTicket = (obj) => {
    TicketService.createTicket(obj).then( (res) => {
      console.log(res);


      $state.go('root.list');

    });
  };

};

AddController.$inject = ['$scope', 'TicketService', '$state', '$stateParams'];

export default AddController;