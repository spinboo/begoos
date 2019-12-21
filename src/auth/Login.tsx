import React, { useState } from "react";

const LoginForm = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(e);
  };

  return (
    <div>
      <form>
        <input
          type="text"
          value={email}
          placeholder="introduce tu email"
          onChange={e => setEmail(e.target.value)}
        />
        <label>password:</label>
        <input
          type="password"
          value={password}
          placeholder="introduce tu email"
          onChange={e => setPassword(e.target.value)}
        />
      </form>
    </div>
  );
};

export default LoginForm;
