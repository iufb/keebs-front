import { getAllKeyboards } from "@/api/keyboard/keyboard";
import { useQuery } from "react-query";

export const useAllKeyboards = () => {
  return useQuery("allKeyboards", async () => {
    const { data } = await getAllKeyboards();
    return data;
  });
};
