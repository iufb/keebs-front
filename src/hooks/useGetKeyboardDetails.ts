import { getKeyboardById } from "@/api/keyboard/keyboard";
import { useQuery } from "react-query";
export const useGetKeyboardDetails = (id: string) => {
  return useQuery(["keyboard", { id }], async () => {
    const { data } = await getKeyboardById(id);

    return data;
  });
};
