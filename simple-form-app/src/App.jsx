import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import StepTwo from "./components/StepTwo";

function App() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [submited, setSubmited] = useState(false);

  return (
    <div className="wrapper">
      <header>
        <h1>Create an account</h1>
      </header>
      <main>
        {!submited && (
          <Form
            setSubmited={setSubmited}
            setEmail={setEmail}
            setName={setName}
            setPass={setPass}
            setConfirmPass={setConfirmPass}
            pass={pass}
            confirmPass={confirmPass}
            name={name}
            email={email}
          />
        )}

        {submited && pass === confirmPass && (
          <StepTwo
            name={name}
            email={email}
            password={pass}
            setSubmited={setSubmited}
            pass={pass}
          />
        )}
      </main>
    </div>
  );
}

export default App;
