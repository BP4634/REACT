import React from 'react';


const DataFetcher = ({render, url}) => {
  const [data, setData] = React.useState([])

  React.useEffect(() => {
    if (url.includes('desserts')) {
      setData(['cake', 'pie', 'cookie'])
    } else {
      setData(['Water', 'Coffee', 'Tea'])
      
    }
  },[])
  
  return render(data)
}

const DessertsCount = () => {
  return (
    <DataFetcher url="desserts" render={data => <p>{data.length} desserts</p>} />
  )
}


const DrinksCount = () => {
  return (
    <DataFetcher url="drinks" render={data => <h3>{data.length} drinks</h3>} />
  )
}
export function App(props) {
  return (
    <div className='App'>
      <header><h1>BRYAN'S RESTAURANT</h1></header>
      <DessertsCount />
      <DrinksCount />
    </div>
  );
}

// Log to console
console.log('Hello console')
