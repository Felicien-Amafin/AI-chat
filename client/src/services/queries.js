import { useQuery } from "@tanstack/react-query";
import { getNewAccessToken } from "./api/auth";

export const useGetNewAccessToken = (isActive, key)=> {
   return useQuery({
      queryKey: [key],
      queryFn: ({signal})=> getNewAccessToken({signal}), 
      enabled: isActive,
      retry: false
   });
}

export const useGetCategories = (key)=> {
   return useQuery({
      queryKey: [key],
      queryFn: ({signal})=> getCategories({signal}), 
      retry: 1
   });
}