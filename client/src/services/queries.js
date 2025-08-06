import { useQuery } from "@tanstack/react-query";
import { getCategories } from "./api/categorie";

export const useFetchCategories = (key)=> {
   return useQuery({
      queryKey: [key],
      queryFn: ({signal})=> getCategories({signal}),
      retry: 1
   });
}


