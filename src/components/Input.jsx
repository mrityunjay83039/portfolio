import { useState } from 'react';

const framer_error = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 10 },
  transition: { duration: 0.2 },
};

export const Input = ({ label,required, name, placeholder, onChange, errorMsg, ...inputProps}) => {
  const[focused, setFocused] = useState(false)

  return (
    <div className="flex flex-col items-start w-full gap-2">
      <div className="flex justify-between">
        <label htmlFor={name} className="font-semibold capitalize">
          {label}
        </label>
      </div>
      <input
        className="w-full p-2 font-medium border rounded-md border-slate-300 placeholder:opacity-60"
        placeholder={placeholder}
        onChange={onChange}
        onBlur={()=>setFocused(true)}
        focused={focused.toString()}
        required
        {...inputProps}
      />
      <p className="errorMsg">{errorMsg}</p>
    </div>
  );
};

export const TextArea = ({ label, name,required, placeholder, onChange, errorMsg, ...inputProps }) => {
  const[focused, setFocused] = useState(false)
    return (
      <div className="flex flex-col items-start w-full gap-2">
        <div className="flex justify-between">
          <label htmlFor={name} className="font-semibold capitalize">
            {label}
          </label>
        </div>
        <textarea
          className="w-full p-5 font-medium border rounded-md border-slate-300 placeholder:opacity-60"
          placeholder={placeholder}
          onChange={onChange}
          onBlur={()=>setFocused(true)}
          focused={focused.toString()}
          required
          {...inputProps}
          >

        </textarea>
        <p className="errorMsg">{errorMsg}</p>
      </div>
    );
  };
