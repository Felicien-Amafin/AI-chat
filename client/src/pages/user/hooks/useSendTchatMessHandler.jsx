import { useSendTchatMessage } from "../../../services/mutations";

const useSendTchatMessHandler = () => {
  const { mutate, isPending, data, error } = useSendTchatMessage();
  
  return { mutate, isPending, data }
}

export default useSendTchatMessHandler;