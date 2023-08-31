import { useState } from "react";
import TextEditor from "./components/TextEditor";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom'
import { v4 as uuidV4 } from 'uuid'
import Login from "./components/Login";
// import Login from "./components/Login";

function App() {
  const [token, setToken] = useState();
  if(!token) {
    return <Login setToken={setToken}/>
  }
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Login/>} /> */}
        <Route path="/" exact element={<Navigate to={`/documents/${uuidV4()}`} replace />} />
        <Route path="/documents/:id" element={<TextEditor />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
