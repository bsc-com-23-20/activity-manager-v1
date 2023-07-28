import { useEffect, useState, ErrorBoundary } from "react";
import Api from "../apis/api";

export default function Tasks({ completed, id, title, toggleTodo }) {
  /**create a data an array to have a variable for state
   * and function to update the state using useState 
   * this is where i got the stuff 
   * https://www.youtube.com/watch?v=O6P86uwfdR0&t=791s 
   * 
   * the whole playlist is here
   * 
   * https://www.youtube.com/watch?v=O6P86uwfdR0&list=PLZlA0Gpn_vH8EtggFGERCwMY5u5hOjf-h
   * you can also learn a thing or two thre
   * **/
  const [personData, setPersonData] = useState();
 
/***
 * useeffect is will control component life cycle
 * https://www.knowledgehut.com/blog/web-development/how-to-use-react-useeffect
 * 
 * there is a tutoral of that in the playlist about 
 */
  useEffect( () => {
    // async fuction to get data
    async function getData() {
      const response = await Api.getAllPost();
      setPersonData(response);
    }
    getData()
      
  }, []);

  let tableHeaders, tableData;
  if (personData) {
    tableHeaders = Object.keys(personData.at(0));
    tableData =personData;
  }

  return (
    <>
    {/* the question marks (?) will check in the object is empty 
    to some extent a ternaly operator
    */}
      {personData ? (
        <table id="my_table" className="display" style={{ width: "100%" }}>
          <thead>
            <tr className="heading-table">
              {tableHeaders?.map((header) => (
                <th>{header}</th>
              ))}
            </tr>
          </thead>

          <tbody>
            {tableData?.map((d) => (
              <tr>
                <td>{d.id}</td>
                <td>{d.userId}</td>
                <td>{d.title}</td>
                <td>{d.body}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>Loading....</p>
      )}
    </>
  );
}
