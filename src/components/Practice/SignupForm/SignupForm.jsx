import { useEffect, useState } from "react";

function SignupForm() {
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState({});
  const [isDisabled, setIsDisabled] = useState(true);

  useEffect(() => {}, []);
  if (error) {
    return;
  }
  return (
    <div>
      <div>
        <input type="email" />
      </div>
      <div>
        <input type="password" />
      </div>
      <button>Sign in</button>
    </div>
  );
}

export default SignupForm;
