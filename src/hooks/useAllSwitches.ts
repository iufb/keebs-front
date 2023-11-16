import { getAllSwitches } from "@/api/switches/switches";
import { useQuery } from "react-query";

export const useAllSwitches = () => {
  return useQuery("allSwitches", async () => {
    const { data } = await getAllSwitches();
    return data;
  });
};
