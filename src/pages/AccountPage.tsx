import { logoutUser } from "../store/auth/auth.action";
import { getProfile } from "../api/auth/auth";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const AccountPage = () => {
  const { data: profile, isLoading } = useQuery("profile", async () => {
    const { data } = await getProfile();
    return data;
  });
  const navigate = useNavigate();
  return (
    <>
      <div className="flex mt-10">
        <h1 className="text-4xl   flex-1 font-bold font-roboto">My account</h1>
        <Button
          className="max-w-fit underline "
          variant="outlined"
          onClick={() =>
            logoutUser().then(() => {
              navigate("/home");
            })
          }
        >
          Logout
        </Button>
      </div>
      <div className="flex justify-between">
        <div className="flex flex-col gap-3 grow-1">
          <h2 className="text-3xl font-bold">Order History</h2>
          <span>You haven't placed any orders yet.</span>
        </div>
        <div className="grow-0 flex flex-col gap-3">
          <h2 className="text-2xl font-bold">Account details</h2>
          <span className="font-bold">
            {isLoading ? "Loading..." : profile?.username}
          </span>
        </div>
      </div>
    </>
  );
};
export default AccountPage;
