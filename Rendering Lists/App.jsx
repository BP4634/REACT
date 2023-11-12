// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

  import React from 'react';
  import {useState} from 'react';




const data = [
  {
    "name": "Adeel Solangi",
    "language": "Sindhi",
    "id": "V59OF92YF627HFY0",
    "bio": "Donec lobortis eleifend condimentum. Cras dictum dolor lacinia lectus vehicula rutrum. Maecenas quis nisi nunc. Nam tristique feugiat est vitae mollis. Maecenas quis nisi nunc.",
    "version": 6.1
  },
  {
    "name": "Afzal Ghaffar",
    "language": "Sindhi",
    "id": "ENTOCR13RSCLZ6KU",
    "bio": "Aliquam sollicitudin ante ligula, eget malesuada nibh efficitur et. Pellentesque massa sem, scelerisque sit amet odio id, cursus tempor urna. Etiam congue dignissim volutpat. Vestibulum pharetra libero et velit gravida euismod.",
    "version": 1.88
  },
  {
    "name": "Aamir Solangi",
    "language": "Sindhi",
    "id": "IAKPO3R4761JDRVG",
    "bio": "Vestibulum pharetra libero et velit gravida euismod. Quisque mauris ligula, efficitur porttitor sodales ac, lacinia non ex. Fusce eu ultrices elit, vel posuere neque.",
    "version": 7.27
  },
  {
    "name": "Abla Dilmurat",
    "language": "Uyghur",
    "id": "5ZVOEPMJUI4MB4EN",
    "bio": "Donec lobortis eleifend condimentum. Morbi ac tellus erat.",
    "version": 2.53
  }
  ]

  

  
export function App(props) {

  const [list, setList] = useState(data)
  
  const ReverseOrder = () => {
    setList([...list].reverse())
  }




     const topData = list.map((item) => {
      const itemText = `${item.name} - ${item.id}`
     return <li key={item.id} >{itemText}</li>
      
  })
    
  return (
      
    <div className='App'>
    <button onClick={ReverseOrder} >Reverse Order</button>
     <ol>
     {topData}
     </ol>
    </div>
  );
}

// Log to console
console.log('Hello console')
