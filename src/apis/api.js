
/***
 * This file will handle all issues pertaining to getting data from the api
 * the data could processed here if necessary but its not advisable
 */
// let domainName = 
 class Api {
    // this function will get data from a specific end point 
      
    getUniversitiesGivenCountry(){
      debugger

        // put you link to the api here
        let endPont = 'http://localhost:3000' +"/tasks"

        //getJSON is a function that will fetch data using http
        return getJSON(endPont)
    // return {"w":1}
    }
    // get tasks
    getTasks(){   
      debugger   
      let endPont = 'http://localhost:3000' +"/tasks"

      //getJSON is a function that will fetch data using http
      return getJSON(endPont)
  
    }
    async getTask(taskId){      
      let endPont = 'http://localhost:3000' +"/tasks/"+taskId

      //getJSON is a function that will fetch data using http
      return getJSON(endPont)
  
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
       
      }
    } ).then( response => response.json() )
      .catch( error => {
        console.error(error);
        return error;
      } )
      ;
  };
