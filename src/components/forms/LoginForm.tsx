import { ChangeEvent, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { signinUser } from "../../store/auth/auth.action";
import { ISigninRequest } from "../../api/auth/auth.type";
import { useAuth } from "../../store/auth/auth.store";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
export const LoginForm = () => {
  const [authData, setAuthData] = useState<ISigninRequest>({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const error = useAuth.use.error();
  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setAuthData({ ...authData, [name]: value });
  };
  const handleLogin = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    signinUser(authData).then(() => {
      navigate("/account");
    });
  };
  return (
    <form onSubmit={handleLogin} className="col gap-3">
      <Input
        inputProps={{ placeholder: "Email" }}
        label="Email"
        type="email"
        value={authData.email}
        onChange={handleInput}
      />
      <Input
        inputProps={{ placeholder: "Password" }}
        type="password"
        label="Password"
        value={authData.password}
        onChange={handleInput}
      />
      <span className="text-rose-500">{error}</span>
      <Button variant="primary" className="uppercase " type="submit">
        Sign in
      </Button>
    </form>
  );
};
