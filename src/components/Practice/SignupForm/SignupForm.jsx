import { useEffect, useState } from "react";

function SignupForm() {
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState({});
  const [isDisabled, setIsDisabled] = useState(true);

  const inputOnChangeHandler = (e) => {
    const { name, value } = e.target;

    setFormValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const submitClickHandler = () => {
    alert("성공적으로 가입되었습니다.");
  };

  useEffect(() => {
    setIsDisabled(true);
    const newErrors = {};
    if (!formValues.email.includes("@") && formValues.email.length > 0) {
      newErrors.email = "이메일 형식에 맞게 입력해주세요";
    }

    if (formValues.password.length < 8 && formValues.password.length > 0) {
      newErrors.password = "비밀번호는 8자리 이상입니다.";
    }

    setError(newErrors);

    if (
      Object.keys(newErrors).length === 0 &&
      formValues.email &&
      formValues.password
    ) {
      setIsDisabled(false);
    }
  }, [formValues]);

  return (
    <div>
      <h2>간단한 회원가입</h2>
      <div>
        <input
          type="email"
          name="email"
          placeholder="이메일"
          value={formValues.email}
          onChange={inputOnChangeHandler}
        />
        {error.email && <p>{error.email}</p>}
      </div>
      <div>
        <input
          type="password"
          name="password"
          placeholder="비밀번호"
          value={formValues.password}
          onChange={inputOnChangeHandler}
        />
        {error.password && <p>{error.password}</p>}
      </div>
      <button disabled={isDisabled} onClick={submitClickHandler}>
        Sign in
      </button>
    </div>
  );
}

export default SignupForm;
