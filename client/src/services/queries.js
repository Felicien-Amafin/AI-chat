import { useQuery } from "@tanstack/react-query";
import { getCategories } from "./api/categorie";
import { getTchat } from "./api/tchat";

export const useFetchCategories = (key) => {
   return useQuery({
      queryKey: [key],
      queryFn: ({signal}) => getCategories({signal}),
      retry: 1
   });
}

export const useFetchTchat = (key, tchatId) => {
   return useQuery({
      queryKey: [key],
      queryFn: ({signal}) => getTchat({signal, tchatId}),
      retry: 1
   })
}