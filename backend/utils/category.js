
export const sortCategoryNames = (arr) => {
  return arr.sort((a, b) => a.name.localeCompare(b.name));
}