import { Button, Flex, TextField, Text } from "@radix-ui/themes";
import { ChangeEvent, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { signinUser } from "../../store/auth/auth.action";
import { ISigninRequest } from "../../api/auth/auth.type";
import { useAuth } from "../../store/auth/auth.store";
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
    <form onSubmit={handleLogin}>
      <Flex direction="column" gap="3" style={{ maxWidth: "1200px" }}>
        <label htmlFor="email" className="font-bold">
          Email
        </label>
        <TextField.Input
          size="3"
          placeholder="Email"
          id="email"
          required
          name="email"
          value={authData.email}
          onChange={handleInput}
        />
        <label htmlFor="password" className="font-bold">
          Password
        </label>
        <TextField.Input
          size="3"
          required
          type="password"
          placeholder="Password"
          value={authData.password}
          onChange={handleInput}
          id="password"
          name="password"
        />
        <Text as="span" color="red">
          {error}
        </Text>
        <Button size="3" type="submit">
          Sign in
        </Button>
      </Flex>
    </form>
  );
};
