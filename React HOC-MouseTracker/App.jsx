import React from 'react';

const WithMousePosition = (WrappedComponent) => {
  return (props) => {
    const [position, setPosition] = React.useState({x: 0, y: 0});

    React.useEffect(() => {
      const handleMouseMove = (event) => {
        setPosition({x: event.clientX, y: event.clientY});
      };
      window.addEventListener('mousemove', handleMouseMove);
      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
      }}, [])
    return <WrappedComponent {...props} mousePosition={position} />;
  }
  
}

const PanelMousePosition = ({mousePosition}) => {
  return (
    <div className="panel-mouse-position">
      <p>Mouse position:</p>
      <span style={{margin: 5}}>x: {mousePosition.x}</span>
      <span style={{margin: 5}}>y: {mousePosition.y}</span>
    </div>
    );

  
}

const PointMousePosition = ({mousePosition}) => {
  
  return (
    <div className="panel-mouse-position">
      <p>({mousePosition.x}, {mousePosition.y})</p>
      
    </div>
    );


}

const Panel = WithMousePosition(PanelMousePosition);

const Point = WithMousePosition(PointMousePosition);


export function App() {
  return (

    <div className="App">
    <h1>MOUSE TRACKER</h1>
      <Panel />
      <Point />
    </div>
  

  );
}

