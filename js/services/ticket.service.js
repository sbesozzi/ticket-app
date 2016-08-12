let TicketService = function($state, $stateParams, $http, SERVER) {
  
  let url = SERVER.URL;

  // Get list of tickets
  this.getTickets = function () {
    return $http.get(url + '/tickets', SERVER.CONFIG);

  };

  // Get a single ticket

  let ticketId = $stateParams.id;

  this.getTicket = function (ticketId) {
    return $http.get(url + '/tickets/' + ticketId, SERVER.CONFIG);
  };

  // Create new ticket
  this.createTicket = function (obj) {
    return $http.post(url + '/tickets', obj, SERVER.CONFIG);
  };

  // Update single ticket
  this.update = function (obj) {
    return $http.put(url + '/tickets/' + obj.Id, obj, SERVER.CONFIG);
  };

  // On update send email
  this.emailNotif = function (email) {
    console.log(email);

    return $http({
      url: 'https://helptickets01.azurewebsites.net/Email/SendEmail',
      headers: '',
      method: 'POST',
      cache: true
    });
  };

  //  Delete single ticket
  this.delete = function (obj) {
    return $http.delete(url + '/tickets/' + obj.Id, obj, SERVER.CONFIG);
  };

};


TicketService.$inject = ['$state', '$stateParams', '$http', 'SERVER'];

export default TicketService;
