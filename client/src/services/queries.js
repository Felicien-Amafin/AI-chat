import { useQuery } from "@tanstack/react-query";
import { getAuthorization, getNewAccessToken } from "./api/auth";
import { getCategories } from "./api/categories";

export const useFetchNewAccessToken = (isActive, key)=> {
   return useQuery({
      queryKey: [key],
      queryFn: ({signal})=> getNewAccessToken({signal}), 
      enabled: isActive,
      retry: false
   });
}

export const useFetchCategories = (key)=> {
   return useQuery({
      queryKey: [key],
      queryFn: ({signal})=> getCategories({signal}),
      retry: 1
   });
}

export const useFetchAuthorization = (isActive, key)=> {
   return useQuery({
      queryKey: [key],
      queryFn: ({signal})=> getAuthorization({signal}),
      enabled: isActive,
      retry: 1
   });
}