import { useEffect, useState } from "react";

useEffect
const useConfirmActionModal = (categoryName) => {
  const [isModalOpened, setIsModalOpened] = useState(false);

  useEffect(() => {
    setIsModalOpened(false);//Close modal when displaying CategoryPage

  },[categoryName]);//Reexecutes useEffect if a different category is displayed

  return { setIsModalOpened, isModalOpened }
}

export default useConfirmActionModal;