let AddController = function($scope, TicketService, $state, $stateParams) {

  // Create a new ticket
  $scope.createTicket = (obj) => {

    if (confirm('Your ticket has been created.')) {

      TicketService.createTicket(obj).then( (res) => {
        console.log(res);

        // $state.go('root.list');

      });

      let emailObj = {
        EmailTo: obj.CreatedByEmail,
        Subject: 'Your ticket has been created.',
        Body: obj.Comments,
      };

      TicketService.emailNotif(emailObj).then( (res) => {
        console.log("email sent", res);

      });
    }
    
  };

  $scope.backHome = function () {
    
    $state.go('root.list');

  };

};

AddController.$inject = ['$scope', 'TicketService', '$state', '$stateParams'];

export default AddController;
