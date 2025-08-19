import { useCreateTchat } from "../../../services/mutations";

const useNewTchatWorkflow = () => {
  const { mutate, isPending, data, error } = useCreateTchat();
  
}

export default useNewTchatWorkflow;