import { RegisterForm } from "../components/forms/RegisterForm";
import { Link } from "react-router-dom";

const RegisterPage = () => {
  return (
    <section className="px-10">
      <h2 className="text-[42px] font-bold font-roboto ">Create Account</h2>
      <RegisterForm />
      <Link className="mt-3 inline-block" to={"/account/login"}>
        Already have account? Sign in!
      </Link>
    </section>
  );
};
export default RegisterPage;
