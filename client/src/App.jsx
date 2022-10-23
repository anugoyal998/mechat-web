import React from 'react'
import { myAuth } from "./states";
import { useAuth } from "./hooks/useAuth";

const App = () => {
  const loading = useAuth();
  const isAuth = myAuth((state) => state.auth.isAuth);
  return (
    <div>

    </div>
  )
}

export default App
