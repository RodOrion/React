const Form = ({setSubmited, setEmail, setName, setPass, setConfirmPass, pass, confirmPass, name, email}) => {

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handlePassChange = (e) => {
    setPass(e.target.value);
  };

  const handleConfirmPassChange = (e) => {
    setConfirmPass(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    { pass !== confirmPass ? alert("passwords non identiques") : setSubmited(true)}
  };

  return (
    <form action="" onSubmit={handleSubmit} className="flexContainer">
      <label htmlFor="name">Name</label>
      <input
        type="text"
        name="name"
        id="name"
        placeholder="name"
        value={name}
        onChange={handleNameChange}
      />
      <label htmlFor="email">Email</label>
      <input
        type="email"
        name="email"
        id="email"
        placeholder="email"
        value={email}
        onChange={handleEmailChange}
      />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        name="password"
        id="password"
        placeholder="password"
        value={pass}
        onChange={handlePassChange}
      />
      <label htmlFor="confirm-password">Confirm password</label>
      <input
        type="password"
        name="confirm-password"
        id="confirm-password"
        placeholder="confirm your password"
        value={confirmPass}
        onChange={handleConfirmPassChange}
      />
      <button>Valider</button>
    </form>
  );
};
export default Form;
