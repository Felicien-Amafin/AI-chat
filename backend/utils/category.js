export const sortCategoryNames = (arr) => {
  return arr.sort((a, b) => a.name.localeCompare(b.name));
}

export const addChatToCategory = async (category, newChat, title, isSuggestion) => {
  // Sauvegarde du nouveau chat dans la map "chats" de la catégorie
  category.chats.set(
    newChat._id.toString(),
    {
      title,
      date: newChat.date,
      isSuggestion 
    }
  );

  // Sauvegarde de la catégorie mise à jour
  await category.save();

  return category;
}