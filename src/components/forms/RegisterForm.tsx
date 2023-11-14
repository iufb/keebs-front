import { ChangeEvent, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { signupUser } from "../../store/auth/auth.action";
import { ISignupRequest } from "../../api/auth/auth.type";
import { useAuth } from "../../store/auth/auth.store";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
export const RegisterForm = () => {
  const [authData, setAuthData] = useState<ISignupRequest>({
    email: "",
    username: "",
    password: "",
  });
  const navigate = useNavigate();
  const error = useAuth.use.error();
  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setAuthData({ ...authData, [name]: value });
  };
  const handleRegister = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    signupUser(authData).then(() => {
      navigate("/account/login");
    });
  };
  return (
    <form onSubmit={handleRegister} className="col gap-3">
      <Input
        label="Username"
        inputProps={{
          placeholder: "Username",
        }}
        value={authData.username}
        onChange={handleInput}
      />
      <Input
        label="Email"
        inputProps={{ placeholder: "Email" }}
        value={authData.email}
        onChange={handleInput}
      />
      <Input
        label="Password"
        inputProps={{
          placeholder: "Password",
        }}
        value={authData.password}
        onChange={handleInput}
      />
      <span>{error}</span>
      <Button variant="primary" type="submit">
        Create
      </Button>
    </form>
  );
};
