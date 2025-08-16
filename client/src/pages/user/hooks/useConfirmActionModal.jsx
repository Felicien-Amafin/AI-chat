import { useEffect, useState } from "react";

useEffect
const useConfirmActionModal = (dependencie) => {
  const [isModalOpened, setIsModalOpened] = useState(false);
  const [isConfirmed, setIsConfirmed] = useState(false);

  useEffect(() => {
    setIsModalOpened(false);//Close modal if it's opened, every time CategoriePage is displayed

  },[dependencie]);

  return { setIsModalOpened, setIsConfirmed, isModalOpened, isConfirmed }
}

export default useConfirmActionModal;