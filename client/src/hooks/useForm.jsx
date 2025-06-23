import { useState } from 'react';

const useForm = () => {
  const [formData, setForm] = useState({});

  const handleChange = (e)=> {
    setForm((prevForm)=> {
        const newForm = {...prevForm, 
          [e.target.name]: e.target.value
        }

        return newForm;
    });
  }

  const resetForm = ()=> {
    setForm({});
  }

  return { formData, handleChange, resetForm };
}

export default useForm;