let SingleController = function($scope, $stateParams, TicketService, $state) {

  let ticketId = $stateParams.id; 

  // Get single ticket by id
  TicketService.getTicket(ticketId).then( (res) => {
    $scope.ticket = res.data;
  });

  // Update single ticket
  $scope.updateTicket = function (obj) {
    if (confirm('Are you sure you want to update this ticket?')) {
      TicketService.update(obj).then( (res) => {

      });

      // On update send notification email
      let emailObj = {
        EmailTo: obj.CreatedByEmail,
        Subject: 'Your ticket has been updated.',
        Body: obj.Comments,
      };

      TicketService.emailNotif(emailObj).then( (res) => {
        console.log("email sent", res);

      });
    }
    
  };

  // Delete single ticket
  $scope.deleteTicket = function (obj) {
    if (confirm('Are you sure you want to delete this ticket?')) {
      TicketService.delete(obj).then( (res) => {
        $state.go('root.list');
      });
    }
  };

  // Go back home
  $scope.backHome = function () {
    $state.go('root.list');

  };
        
};

SingleController.$inject = ['$scope', '$stateParams', 'TicketService', '$state'];

export default SingleController;
