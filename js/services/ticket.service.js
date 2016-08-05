let TicketService = function($state, $stateParams, $http, SERVER) {

  console.log(SERVER);
  
  let url = SERVER.URL;

  this.getTickets = function () {
    // return $http({
    //   url: url + '/Tickets',
    //   headers: SERVER.CONFIG.headers,
    //   method: 'GET',
    //   cache: true
    // });
    return $http.get(url + '/Tickets', SERVER.CONFIG);

  };

  this.getTicket = function (id) {
    // return $http({
    //   method: 'GET',
    //   url: url + 'Tickets/id',
    //   headers: SERVER.CONFIG.headers,
    //   cache: true
    // });

    return $http.get(url + '/Tickets/id', SERVER.CONFIG);
  };

  let Ticket = function (obj) {
    this.ticket = obj.ticket;
  };

  // let formData = new FormData();

  // formData.append('system', obj.system);
  // formData.append('createdbyname', obj.createdbyname);
  // formData.append('createdbyemail', obj.createdbyemail);
  // formData.append('description', obj.description);
  // formData.append('comments', obj.comments);
  // formData.append('submissionstatus', obj.submissionstatus);

  // SERVER.CONFIG.headers['Content-Type'] = undefined;

  this.createTicket = function (obj) {
    let t = new Ticket(obj);
    
    return $http.post(url + '/Tickets', t, SERVER.CONFIG);
  };

  this.update = function (obj) {
    return $http.put(url + '/Tickets/id' + obj.objectId, obj, SERVER.CONFIG);
  };

  this.delete = function (obj) {
    return $http.delete(url + '/Tickets/id' + obj.objectId, SERVER.CONFIG);
  };

};


TicketService.$inject = ['$state', '$stateParams', '$http', 'SERVER'];

export default TicketService;