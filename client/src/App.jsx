import React from 'react'
import { useAuth } from "./hooks/useAuth";
import Navbar from './components/Navbar';

const App = () => {
  const loading = useAuth();

  if(loading){
    return(
      <div className="h-screen w-screen bg-mGray text-xl font-semibold">Loading...</div>
    )
  }

  return (
    <div className="h-screen w-screen bg-mGray p-4">
      <Navbar/>
    </div>
  )
}

export default App
