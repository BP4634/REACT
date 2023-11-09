import React from 'react';

import { useState } from 'react';

// export function Button (props) {

// const [alertVisible, setAlert] = useState(false)

//   return (
//     <div>
//     {alertVisible && <Alert onClose={() => setAlert(false)}>My alert</Alert>}
//     <button onClick={() => setAlert(true)} type="button" className={"btn btn-" + (props.color || "secondary")}>{props.text}</button>
//    </div> 
//   )
// }

// export function Alert (props) {
//   const [alertVisible, setAlert] = useState(false)

//   return (
//   <div>
  


// <div className="alert alert-warning alert-dismissible fade show" role="alert">
//   {props.children}
//   <button onClick={props.onClose} type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
// </div>
// </div>
//   )
// }








export function App(props) {

const asideStyle = {
  width: "30%",
  paddingLeft: "15px",
  marginLeft: "15px",
  float: "right",
  fontStyle: "italic",
  backgroundColor: "lightgray",
}

  return (
    <aside style={asideStyle} className='App'>
      <h1>Hello React.</h1>
      <h2>Start editing to see some magic happen!</h2>
    </aside>
  );
}


// // Log to console
// console.log('Hello console')




// export function ListGroup(props) {

  
//   const [selectedIndex, setSelectedIndex] = useState(-1);

  
// return(
//   <>
//   <h1>{props.Heading}</h1>
//   <ul className="list-group">
//   {props.items.length === 0 && <p>No items found</p>}


//   {props.items.map((item, index) => (
//     <li Key={item} className= {selectedIndex === index 
//     ? "list-group-item active"
//     : "list-group-item"}  
//     onClick={() => {
//     setSelectedIndex(index)
//     props.onSelectItem(item)
//     }
//     }>{item}</li>

//   ))}

// </ul>
//   </>

//   )}     



// ReactDOM.render(
//   <div>
//     <h1>Goodbye world!</h1>
//     <p>This is a paragraph.</p>
//   </div>,
//   document.getElementById('root')
// );

// function MainContent() {
//   return (
//     <div>
//       <h1>Goodbye world!</h1>
//       <p>This is a paragraph.</p>
//     </div>)
// }


// ReactDOM.render(
//   <div>
//     <ul>
//       <li>Item 1</li>
//       <li>Item 2</li>
//       <li>Item 3</li>
//     </ul>
//     <MainContent />
//   </div>, document.getElementById('root'))





// const h1 = document.createElement('h1')
// h1.textContent = 'Goodbye world'
// h1.classList.add('header')
// document.getElementById('root').appendChild(h1)


// const navbar = (
//   <div>
//   <nav>
//     <h1>Easish Math!</h1>
//     <ul>
//       <li>Pricing</li>
//       <li>About</li>
//       <li>Contact</li>
//     </ul>
//   </nav>
//     </div>)

// ReactDOM.render(navbar, document.getElementById('root'))




// function ListGroup() {

//   let items = [
//     'New York',
//     'San Francisco',
//     'Tokyo',
//     'London',
//     'Paris',
//     ]

  
//   const [selectedIndex, setSelectedIndex] = useState(-1);

  
// return(
//   <>
//   <h1>List</h1>
    
//     {items.length === 0 && <p>No items found</p>}
// <ul className="list-group">
//   {items.map((item, index) => (
 
//   <li key={item} className={selectedIndex === index ? 'list-group-item active' : 'list-group-item'} onClick={() => {setSelectedIndex(index);}}>{item}</li>

//   ))}

// </ul>
//   </>

//   )}     

// ReactDOM.render(
//   <ListGroup />,
//   document.getElementById('root')
// )
