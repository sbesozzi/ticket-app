let ListController = function($scope, TicketService) {

  TicketService.getTickets().then( (res) => {
    console.log(res);

    $scope.tickets = res.data;
  });

};

ListController.$inject = ['$scope', 'TicketService'];

export default ListController;