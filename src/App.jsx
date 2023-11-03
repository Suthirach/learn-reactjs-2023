import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyButton from './components/MYButton'
import MyProflie from './components/MyProflie'

function App() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState("Suthirach Tanjanthuek")
  const [ifTrue, setifTrue] = useState(true); 

  const user = {
    firstName: "Suthirach",
    lastName: "Tanjanthuek",
    imgPic: "https://res.theconcert.com/c_thumb/9f1f0ae9a10b227fa1927b16c6db1affb/winnie.jpg"
  }

  const product = [ 
    {title: 'Cabbage', id:1 },
    {title: 'Garlic', id:2 },
    {title: 'Apple', id:3 },
  ];

  function handleInCreaseClick() {
    setCount(count + 1)
  }
  function handleDeCreaseClick() {
    setCount(count - 1)
  }

  return (
    <>
      
      <h1>Hello React js </h1>
      <MyProflie data={user}/>
      <img src={user.imgPic} width="170" height="195" alt={user.firstName} />
      <p>My name is {user.firstName} {user.lastName}</p>
      <MyButton />
      <p>{count}</p>
      <button onClick={handleInCreaseClick}>Increase</button>
      <button onClick={handleDeCreaseClick}>Decrease</button>
      {ifTrue ? "Yes, it's true" : "No, it's false"}
      <ul> 
        {product.map(item =>(
          <li key= {item.id}>{item.title}</li>
        ))}
      </ul>
      
      

    </>
  )
}

export default App

