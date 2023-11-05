import { Heading } from "@radix-ui/themes";
import { LoginForm } from "../components/forms/LoginForm";
import { Layout } from "../layout/Layout";

export const LoginPage = () => {
  return (
    <Layout>
      <Heading as="h2" size="8" mb="4">
        Login
      </Heading>
      <LoginForm />
    </Layout>
  );
};
