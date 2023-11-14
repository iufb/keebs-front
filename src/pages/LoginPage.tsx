import { LoginForm } from "../components/forms/LoginForm";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <section className="px-10">
      <h2 className="text-4xl font-bold font-roboto ">Login</h2>
      <LoginForm />
      <Link className="mt-3 inline-block" to={"/account/register"}>
        Create account
      </Link>
    </section>
  );
};
export default LoginPage;
