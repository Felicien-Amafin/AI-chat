import { useEffect, useState } from "react";

useEffect
const useConfirmActionModal = (categorieName) => {
  const [isModalOpened, setIsModalOpened] = useState(false);

  useEffect(() => {
    setIsModalOpened(false);//Close modal when displaying CategoriePage

  },[categorieName]);//Reexecutes useEffect if a different categorie is displayed

  return { setIsModalOpened, isModalOpened }
}

export default useConfirmActionModal;