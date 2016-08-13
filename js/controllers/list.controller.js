let ListController = function($scope, TicketService) {

  // Display all tickets
  TicketService.getTickets().then( (res) => {
    $scope.tickets = res.data;
  });

};

ListController.$inject = ['$scope', 'TicketService'];

export default ListController;
