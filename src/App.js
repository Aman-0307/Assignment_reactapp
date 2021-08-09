import "./styles.css";
import React, { useEffect, useState } from "react"
import Todos from "./Todos";
import NavBar from "./NavBar";
import dropdown from "./dropdown";
export default function App() {

  const [todos, setTodos] = useState();
  const [step, setStep] = useState(0);
  const [isLogin, setIsLogin] = useState(false);
  const [userData, setUserData] = useState()

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(json => setTodos(json))
  }, [])


  return (
    <div className="App">
      {isLogin ? (

        <div>
          <NavBar setStep={setStep} />
          {step === 0 ? (
            <Home />
          ) : step === 1 ? (
            <div>
              {todos &&
                <Todos todosProps={todos} />
              }
            </div>
          ) : (
            <User userData={userData} />
          )}
        </div>
      ) : (
        <Login setIsLogin={setIsLogin} setUserData={setUserData} />
      )}
    </div>
  );
}

const Home = () => {
  return (
    <h1 className="hometext">Home</h1>
    
  )
}
const User = ({ userData }) => {
  return (
    <div>

      <h1>User</h1>
      <p>{userData.id}</p>
      <form>

          <div className="user1">
          <text>username    :   Aman</text>
          </div>
          <text>password</text>
         <div className="user2"> <input type="text" onChange={(e) => setNewTitle(e.target.value)} /></div>
          
          <div className="taskbutton">
            <button type="submit">Logout</button>
          </div>
          
        </form>
    </div>
  )
}
const Login = ({ setUserData, setIsLogin }) => {
  const [id, setid] = useState("");
  const [password, setpassword] = useState("");

  const submit = () => {
    setUserData({ id: id, password: password });
    setIsLogin(true)
  }

  return (
    <div className="logindetail">
      <div className="login">
        <h3>Login</h3>
        <div className="login1">
          <input type="text" onChange={e => setid(e.target.value)} />
          <div className="login2">
            <input type="text" onChange={e => setpassword(e.target.value)} />
          </div>
        </div>
      </div>
      <div className="button">
        <button onClick={submit} >Login</button>
      </div>
    </div>

  )
}
