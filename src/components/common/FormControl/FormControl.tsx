import React from "react";
import s from "./FormControl.module.css";

interface TextareaProps {
  input: React.TextareaHTMLAttributes<HTMLTextAreaElement> & { [key: string]: any };
  meta: { touched: boolean; error?: string };
  [key: string]: any;
}

interface InputProps {
  input: React.InputHTMLAttributes<HTMLInputElement> & { [key: string]: any };
  meta: { touched: boolean; error?: string };
  [key: string]: any;
}

export const Textarea: React.FC<TextareaProps> = ({ input, meta, ...props }) => {
  const hasError = meta.touched && meta.error;
  return (
    <div className={s.formControl + " " + (hasError ? s.error : "") }>
      <textarea {...input} {...props}></textarea>
      {hasError ? <span className={s.span}> {meta.error} </span> : undefined}
    </div>
  );
};

export const Input: React.FC<InputProps> = ({ input, meta, ...props }) => {
  const hasError = meta.touched && meta.error;
  return (
    <div className={s.formControl + " " + (hasError ? s.error : "") }>
      <input {...input} {...props}></input>
      {hasError ? <span className={s.span}> {meta.error} </span> : undefined}
    </div>
  );
};
