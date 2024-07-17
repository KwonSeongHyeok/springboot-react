import React, {useState} from "react";
import LoginContext from "./components/LoginContext.js";
import TodoList from "./components/TodoList.js";
import Login from "./components/Login.js";
import Signup from "./components/SignUp.js";
import './App.css';

function App() {
  const [signUpView, setSignUpView] = useState(false);

  const[loginMember, setLoginMember] = useState(null);

  return (
    <LoginContext.Provider value={{loginMember, setLoginMember}}>
      <button onClick={() => {setSignUpView(!signUpView)}}>
        {signUpView ? ('회원 가입 닫기') : ('회원 가입 열기')}
      </button>

      <div className="sign-wrapper">
        {signUpView === true && (<Signup />)}
      </div>

      <h1>Todo List</h1>
      <Login />
      <hr />

      {loginMember && (
        <TodoList />
      )}
    </LoginContext.Provider>
  );
}

export default App;
