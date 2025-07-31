import { useQuery } from "@tanstack/react-query";
import { getCategories } from "./api/categories";

export const useFetchCategories = (key)=> {
   return useQuery({
      queryKey: [key],
      queryFn: ({signal})=> getCategories({signal}),
      retry: 1
   });
}


