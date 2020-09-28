import { useState } from "react";

const useFormInput = (name, initialValue) => {
  const [form, setForm] = useState(initialValue);

  return {
    label: name,
    required: "required",
    placeholder: `Enter ${name}`,
    onChange: (e) => setForm(e.target.value),
    value: form,
  };
};

export default useFormInput;
