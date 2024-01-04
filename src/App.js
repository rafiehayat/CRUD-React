// import "./App.css";
// import 'react-responsive-modal/styles.css';
// import { Modal } from 'react-responsive-modal';
// import { useState } from "react";

// function App() {

//   const blankUser = {
//     "name":"",
//     "email":"",
//     "phone":"",
//     "address":"",
//     "city":"",
//     "state":"",
//   }

//   const [open, setOpen] = useState(false);
//   const [user, setUser] = useState(blankUser);
//   const [userData, setUserData] = useState([]);
//   const [action, setAction] = useState('Add');
//   const [editIndex, setEditIndex] = useState(null);


//   const onOpenModal = () => setOpen(true);
//   const onCloseModal = () => {
//     setOpen(false);
//     setAction('Add')
//   }

//   const addUser = () => {
//     setUserData([...userData,user])
//     setUser(blankUser)
//     onCloseModal()
//     console.log(addUser)
//   }
//   const editUser = (index)=>{
//     console.log("index",index);
//     setAction('Edit');
//     const selectedUser = userData.find((x,i) => i === index);
//     setUser(selectedUser);
//     setEditIndex(index);
//     onOpenModal(); 
//   }

//   const updateUser = () => {
//     const newusers = userData.map((x,i) => {
//       if(i === editIndex){
//         x = user
//       }
//       return x
//     });
//     setUserData(newusers);
//     setUser(blankUser);
//     setEditIndex(null);
//     onCloseModal();
//   }

//   const deleteUser = (index) => {
//     const newusers = userData.filter((x,i) => {return i !== index});
//     setUserData(newusers);
//   }


//   return (
//     <>
//       <nav className="navbar navbar-expand-lg background sticky-top">
//         <div className="container-fluid">
//           <h1 className="navbar-brand text-dark">
//             CRUD
//           </h1>     
//                 <button className="btn btn-outline-success" type="submit" onClick={onOpenModal}>
//                 Add
//               </button>
//         </div>
//       </nav>
//       {/* <p>{JSON.stringify(userData)}</p> */}


//       <div className="container-fluid my-3 mid-section">
//         <h5 className="background text-dark text-center p-2">Employee Record</h5>
//         <div className="table-responsive">
//           <table className="table table-bordered table-striped table-hover">
//             <thead>
//               <tr>
//                 <th>Name</th>
//                 <th>Email</th>
//                 <th>Phone</th>
//                 <th>Address</th>
//                 <th>City</th>
//                 <th>State</th>
//                 <th>Edit</th>
//                 <th>Delete</th>
//               </tr>
//             </thead>
//             <tbody>
//               {userData.length > 0 && userData.map((user,index)=>{
//                 return(
//                 <tr>
//                 <td>{user.name}</td>
//                 <td>
//                   {user.email}
//                 </td>
//                 <td>
//                   {user.phone}
//                 </td>
//                 <td>
//                 {user.address}
//                 </td>
//                 <td>{user.city}</td>
//                 <td>{user.state}</td>
//                 <td>
//                 <button className="btn btn-outline-success" onClick={(index)=>editUser(index)}>
//                 EDIT
//               </button>
//                 </td>
//                 <td>
//                 <button className="btn btn-outline-success" onClick={()=>deleteUser(index)}>
//                 DELETE
//               </button>
//                 </td>
//               </tr>

//               )
//               })
//               }
            
//             </tbody>
//           </table>

//           <Modal open={open} onClose={onCloseModal} center>
//         <h2>Add User</h2>
//         {/* <p>{JSON.stringify(user)}</p> */}
//         <form>
//   <div className="mb-3">
//     <label htmlFor="exampleInputName" className="form-label">Name</label>
//     <input type="name" className="form-control" id="exampleInputname" onChange={(e)=> setUser({...user,"name":e.target.value})}/>
//   </div>
//   <div className="mb-3">
//     <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
//     <input type="email" className="form-control" id="exampleInputEmail1" onChange={(e)=> setUser({...user,"email":e.target.value})}/>
//   </div>
//   <div className="mb-3">
//     <label htmlFor="exampleInputPhone" className="form-label">Phone</label>
//     <input type="phone" className="form-control" id="exampleInputPhone" onChange={(e)=> setUser({...user,"phone":e.target.value})} />
//   </div>
//   <div className="mb-3">
//   <label htmlFor="exampleFormControlTextarea1" className="form-label">Address</label>
//   <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" onChange={(e)=> setUser({...user,"address":e.target.value})}></textarea>
// </div>
//   <div className="mb-3">
//     <label htmlFor="exampleInputPassword1" className="form-label">City</label>
//     <input type="city" className="form-control" onChange={(e)=> setUser({...user,"city":e.target.value})} />
//   </div>
//   <div className="mb-3">
//     <label htmlFor="exampleInputPassword1" className="form-label">State</label>
//     <input type="city" className="form-control" onChange={(e)=> setUser({...user,"state":e.target.value})}/>
//   </div>
  
//   {/* <button type="submit" className="btn btn-primary" onClick={()=>addUser()}>Submit</button> */}
//   {action === 'Add' && <button className='btn btn-primary' onClick={() => addUser()}>Submit</button>}
//           {action === 'Edit' && <button className='btn btn-primary' onClick={() => updateUser()}>Update</button>}
// </form>
//       </Modal>
//         </div>
//       </div>
//     </>
//   );
// }

// export default App;


// Filename - App.js

import React from "react";
import {
	BrowserRouter as Router,
	Route,
	Routes,
} from "react-router-dom";
import "./App.css";
import Create from "./components/Create";
import Edit from "./components/Edit";
import Home from "./components/Home";

function App() {
	return (
		<div className="App">
			<h3>CRUD App</h3>
			<Router>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route
						path="/create"
						element={<Create />}
					/>
					<Route
						path="/edit"
						element={<Edit />}
					/>
				</Routes>
			</Router>
		</div>
	);
}

export default App;
