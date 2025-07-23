import { useQuery } from "@tanstack/react-query";
import { getNewAccessToken } from "./api/auth";
import { getCategories } from "./api/categories";

export const useGetNewAccessToken = (isActive, key)=> {
   return useQuery({
      queryKey: [key],
      queryFn: ({signal})=> getNewAccessToken({signal}), 
      enabled: isActive,
      retry: false
   });
}

export const useFetchCategories = (isActive, key)=> {
   return useQuery({
      queryKey: [key],
      queryFn: ({signal})=> getCategories({signal}),
      enabled: isActive,
      retry: 1
   });
}