import axios from "axios"
import { useEffect, useState } from "react"
import Clock from "./components/Clock"
import Shortcuts from "./components/Shortcuts"
import Weather from "./components/Weather"

function App() {
  const[quote, setQuote] = useState('')
  const[author, setAuthor] = useState('');

  const data = 'https://images.unsplash.com/photo-1511300636408-a63a89df3482?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'

  useEffect(() => {
    axios.get('https://api.quotable.io/random').then((response) => {
      setQuote(response.data.content)
      setAuthor(response.data.author)
    })
  },[])
  
  return (
   <div className="h-screen overflow-hidden bg-cover bg-center bg-no-repeat"  style={{backgroundImage: `url(${data})`}}>
    <Weather />
    {/* Time */}
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="text-gray-200
       text-8xl p-4 mb-8"><Clock /></div>
      <Shortcuts />
      <div className="text-gray-200 flex flex-wrap p-4 items-center justify-center mt-4">
        {quote}
      </div>
      <div className="text-gray-200 flex flex-wrap items-center justify-center font-semibold">
        {author}
      </div>
    </div>
    {/* Shortcuts */}
   </div>
   
  );
}

export default App;
