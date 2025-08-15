import { useQuery } from "@tanstack/react-query";
import { getCategories, getSingleCategorie } from "./api/categorie";
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

export const useFetchSingleCategorie= (categorieName) => {
   return useQuery({
      queryKey: [`categories-${categorieName}`],
      queryFn: ({signal}) => getSingleCategorie({signal, categorieName}),
      retry: 1
   })
}