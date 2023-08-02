
/***
 * This file will handle all issues pertaining to getting data from the api
 * the data could processed here if necessary but its not advisable
 */
import axios from 'axios'; 
// class Api {
//     // this function will get data from a specific end point    
//     getAllPost(){
//       // stoping point
      
      

//         // put you link to the api here
//       let endPont = "https://jsonplaceholder.typicode.com/posts"
//       // debugger
      

//         //getJSON is a function that will fetch data using http
//       // return  
//       return getJSON(endPont)
//     }
//     getTasks(){
//       let endPont = "https://jsonplaceholder.typicode.com/posts"
//       // debugger      
//       return getJSON(endPont)
//     }
//     // get tasks
//     // getTasks(){   
//     //   debugger   
//     //   let endPont = 'http://localhost:3000' +"/tasks"

//     //   //getJSON is a function that will fetch data using http
//     //   return getJSON(endPont)
  
//     // }
//     async getTask(taskId){      
//       let endPont = 'http://localhost:3000' +"/tasks/"+taskId

//       //getJSON is a function that will fetch data using http
//       return getJSON(endPont)
  
//     }
    

    
//   }

//   // async function getUniversities() {  
//   //   // geting data from te api
//   //   return await axios.get(`https://randomuser.me/api/`)  
//   //   .then(res => {  
//   //      return res.data; 
         
//   //   })
         
//   // } 

// // Send GET request
// // this function can be replaces with axios
// //TODO :  add comment for every line 
// function getJSON(endPont) {
//     return fetch( `${endPont}`, {
//       method: 'GET',      
//       mode: 'cors',
//       headers: {
       
//       }
//     } ).then( response => response.json() )
//       .catch( error => {
//         console.error(error);
//         return error;
//       } )
//       ;
//   };


//   export default Api;
