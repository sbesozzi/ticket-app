let AddController = function($scope, TicketService, $state, $stateParams) {

  // Create a new ticket
  $scope.createTicket = (obj) => {

    if (confirm('Your ticket has been created.')) {
      TicketService.createTicket(obj).then( (res) => {

      });

      // On update send notification email
      let emailObj = {
        EmailTo: obj.createdbyemail,
        Subject: 'Your ticket has been created.',
        Body: 'Comments: ' + obj.comments + ', Submission Status: ' + obj.submissionstatus
      };

      TicketService.emailNotif(emailObj).then( (res) => {
        $state.go('root.list');
      });
    }
  };

  $scope.backHome = function () {
    $state.go('root.list');
  };
};

AddController.$inject = ['$scope', 'TicketService', '$state', '$stateParams'];

export default AddController;
