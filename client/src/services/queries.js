import { useQuery } from "@tanstack/react-query";
import { getCategories, getCategory } from "./api/category";
import { getChat } from "./api/chat";

export const useGetCategoriesQuery = (key) => {
   return useQuery({
      queryKey: [key],
      queryFn: ({signal}) => getCategories({signal}),
      retry: 1
   });
}

export const useGetChatQuery = (key, chatId) => {
   return useQuery({
      queryKey: [key],
      queryFn: ({signal}) => getChat({signal, chatId}),
      retry: 1
   })
}

export const useGetCategoryQuery = (categoryName) => {
   return useQuery({
      queryKey: [`categories-${categoryName}`],
      queryFn: ({signal}) => getCategory({signal, categoryName}),
      retry: 1
   })
}