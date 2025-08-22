import { useState } from "react";
import { FaEye } from "react-icons/fa";

const Form = ({setSubmited, setEmail, setName, setPass, setConfirmPass, pass, confirmPass, name, email, errorMsg, setErrorMsg}) => {
  const [eyePass, setEyePass] = useState(false)
  const [eyeConfirmPass, setEyeConfirmPass] = useState(false)

  // const handleNameChange = (e) => {
  //   setName(e.target.value);
  // };

  const handleChange = (event, setState) => {
    setState(event.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(pass !== confirmPass) {
       setErrorMsg("passwords non identiques") 
      //alert("no !")
    } else {
      setSubmited(true)
      setErrorMsg("")
    }
  };

  const handleClickEye = (state, setState) => {
    setState(!state)
  }

  return (
    <form action="" onSubmit={handleSubmit} className="flexContainer">
      <label htmlFor="name">Name</label>
      <input
        type="text"
        name="name"
        id="name"
        placeholder="name"
        value={name}
        onChange={(event) => {
          handleChange(event, setName)
        }}
      />
      <label htmlFor="email">Email</label>
      <input
        type="email"
        name="email"
        id="email"
        placeholder="email"
        value={email}
        onChange={(event) => {
          handleChange(event, setEmail)
        }}
      />
      <div className="relative">
        <label htmlFor="password">Password</label>
        <input
          type={eyePass ? "text" :"password"}
          name="password"
          id="password"
          placeholder="password"
          value={pass}
          onChange={(event) => {
            handleChange(event, setPass)
          }}
          className={errorMsg && "red"}
        />
        <FaEye onClick={ () => {
          handleClickEye(eyePass, setEyePass)
        }} 
        />
      </div>
      <div className="relative">
      <label htmlFor="confirm-password">Confirm password</label>
      <input
        type={eyeConfirmPass ? "text" :"password"}
        name="confirm-password"
        id="confirm-password"
        placeholder="confirm your password"
        value={confirmPass}
        onChange={(event) => {
            handleChange(event, setConfirmPass)
          }}
        className={errorMsg && "red"}
      />
      <FaEye onClick={ () => {
          handleClickEye(eyeConfirmPass, setEyeConfirmPass)
        }} 
        />
      </div>
      {errorMsg &&
        <p class="red">{errorMsg}</p>
      }
      <button>Valider</button>
    </form>
  );
};
export default Form;
