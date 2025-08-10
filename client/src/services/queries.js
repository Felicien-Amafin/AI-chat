import { useQuery } from "@tanstack/react-query";
import { getCategories } from "./api/categorie";
import { getTchatMessages } from "./api/tchat";

export const useFetchCategories = (key) => {
   return useQuery({
      queryKey: [key],
      queryFn: ({signal}) => getCategories({signal}),
      retry: 1
   });
}

export const useFetchTchatMessages = (key) => {
   return useQuery({
      queryKey: [key],
      queryFn: ({signal}) => getTchatMessages({signal}),
      retry: 1
   })
}