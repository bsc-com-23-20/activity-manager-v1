
/***
 * This file will handle all issues pertaining to getting data from the api
 * the data could processed here if necessary but its not advisable
 */
class Api {
    // this function will get data from a specific end point    
    async getUniversitiesGivenCountry(){

        // put you link to the api here
        let endPont = "https://localhost:300/activity"

        //getJSON is a function that will fetch data using http
        return getJSON(endPont)
    // return {"w":1}
    }
    
  }

// Send GET request
// this function can be replaces with axios
//TODO :  add comment for every line 
function getJSON(endPont) {
    return fetch( `${endPont}`, {
      method: 'GET',      
      mode: 'cors',
      headers: {
        // 'Authorization': basicAuth,
        "Access-Control-Allow-Origin": "http://localhost:3000",
        "Access-Control-Allow-Credentials":"true",
        "Access-Control-Allow-Methods": "GET,HEAD,OPTIONS,POST,PUT",
        "Access-Control-Allow-Headers": "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers",
        'Accept': 'application/json',
        'Access-Control-Allow-Methods': 'GET'
      }
    } ).then( response => response.json() )
      .catch( error => {
        console.error(error);
        return error;
      } )
      ;
  };

  //post request
  function postJSON(endPont,payload) {
    return fetch( `${endPont}`, {
      method: 'POST',
      credentials: 'include',
      mode: 'cors',
      
      body: JSON.stringify(payload),
      headers: {
        // 'Authorization': basicAuth,
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      }
    } )
      .catch( error => error )
      .then( response => response.json() );
  };
  //put request
  function putJSON(endPont,payload) {
    return fetch( `${endPont}`, {
      method: 'PUT',
      credentials: 'include',
      mode: 'cors',
      
      body: JSON.stringify(payload),
      headers: {
        // 'Authorization': basicAuth,
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      }
    } )
      .catch( error => error )
      .then( response => response.json() );
  };
  function deleteJson(endPont) {
    return fetch( `${endPont}`, {
      method: 'DELETE',
      credentials: 'include',
      mode: 'cors',
      headers: {
        // 'Authorization': basicAuth,
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      }
    } )
      .catch( error => error )
      .then( response => response.json() );
  };

  export default new Api();