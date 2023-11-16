import { getAllKeycaps } from "@/api/keycap/keycap";
import { useQuery } from "react-query";

export const useAllKeycaps = () => {
  return useQuery("allKeycaps", async () => {
    const { data } = await getAllKeycaps();
    return data;
  });
};
