import React from 'react';
// import '../css/button.css';

// const Buttons = () => {
//   return (
//     <div className="center-container">
//       <a
//         className="btn btn-primary btn-lg" // Added btn-lg for large size and btn-primary for a prominent blue color
//         href="#"
//         role="button"
//         id="dropdownMenuLink"
//         data-toggle="dropdown"
//         aria-haspopup="true"
//         aria-expanded="false"
//       >
//         Add tasks
//       </a>

//       <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
//         <a className="dropdown-item" href="#">
//           Add task name
//         </a>
//         <a className="dropdown-item" href="#">
//           Add date and time
//         </a>
//         <a className="dropdown-item" href="#">
//           Another action
//         </a>
//       </div>
//     </div>
//   );
// };

// export default Buttons;


import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

function BasicButtonExample() {
  const dropdownStyle = {
    top: '100px',
    bottom: '500px'
  };
  return (
    <div className="text-center"> {/* Center the button */}
      <DropdownButton
        id="dropdown-basic-button"
        title="Add Tasks"
        size="lg" // Make it large
      >
        <Dropdown.Item href="#/action-1">Add task name</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Add date and time</Dropdown.Item>
        <Dropdown.Item href="#/action-3"></Dropdown.Item>
      </DropdownButton>
    </div>
  );
}

export default BasicButtonExample;


// import React, {useState} from 'react';

// // router
// import { withRouter } from 'react-router-dom';

// // styling
// import '../css/button.css';

// const Menu = props => {
//     // conditionally render dropdown affect based on this boolean
//     const [openMenu, setOpenMenu] = useState(false)

//     // parameter num corresponds to .open-# classes
//     // is assigned when Menu clicked triggering animated dropdown
//     const setClassNames = num => {
//         const classArr = ["m-item"];
//         if (openMenu) classArr.push(`open-${num}`)
//         return classArr.join(' ')
//     }

//     // takes route string as parameter
//     const pushToRoute = route => {
//         props.history.push(route)
//         setOpenMenu(false)
//     }

//     return (
//         <div className="Menu">
//             <div className={"m-item m-logo"}
//                 onClick={() => setOpenMenu(!openMenu)}>
//                 Menu
//             </div>
//             <div className={setClassNames(1)}
//                 onClick={() => pushToRoute("/dashboard")}>
//                 Dashboard
//             </div>
//             <div className={setClassNames(2)}
//                 onClick={() => pushToRoute("/settings")}>
//                 Settings
//             </div>
//             <div className={setClassNames(3)}
//                 onClick={() => pushToRoute("/")}>
//                 Sign out
//             </div>
//         </div>
//   );
// }

// export default Menu;