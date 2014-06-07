
// Get Position. This is the start point.
navigator.geolocation.getCurrentPosition(success, error, options);

/* If location data is retrieved successfully do this: 
 * This is my "main" function
*/
function success(pos) {
  var crd = pos.coords;

  // Test code
  console.log('Your current position is:');
  console.log('Latitude : ' + crd.latitude);
  console.log('Longitude: ' + crd.longitude);
  console.log('More or less ' + crd.accuracy + ' meters.');
  printLoc(crd, 'devInfo');

  /*
      1) User logs in
      2) Get User's location
      3) Ask user for max distance
      4) Query Instagram for locations within that radius.
      5) Display list of locations
      6) User picks location (May need search functionality here)
      7) Display recent media with options.

      Extensions: 
      1) Open up picture location in gmaps for directions to it.
      2) Add a map display of results.



      Next Steps: 

      1) I need a domain name for myself. This app can run in a sub domain.
        a) Decide on provider. 
        b) Pick domain
      2) Get hosting through webhosting for students.
      3) Register app with instagram
      4) Implement login
  */
};


/* .getCurrentPosition helpers */
var options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
};

function error(err) {
  console.warn('ERROR(' + err.code + '): ' + err.message);
};

/* Precondition: Succesful retrieval of loc data through .getCurrentPosition */
function printLoc(pos, elementId){
  var element = document.getElementById(elementId);

  element.innerHTML = 
  '<table><tr><th colspan="2">Current Position</td></tr>' +  
  '<tr><td>Latitude : </td><td>' + pos.latitude  + '</td></tr>' +
  '<tr><td>Longitude: </td><td>' + pos.longitude + '</td></tr>' +
  '<tr><td colspan="2"> Accurate +/- ' + pos.accuracy + '</td></tr></table>';
};



