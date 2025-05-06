import React from "react";
import { useForm } from "react-hook-form";
import PropTypes from "prop-types";
import s from "../Dialogs.module.css";

const MessageForm = ({ onSubmit }) => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  return (
    <form className={s.form} onSubmit={handleSubmit((data) => { onSubmit(data.message); reset(); })}>
      <textarea
        {...register("message", {
          required: "Введите сообщение",
          maxLength: { value: 100, message: "Максимум 100 символов" }
        })}
        className={s.text}
        placeholder={"Напишите сообщение"}
      />
      {errors.message && <span style={{ color: 'red', fontSize: 12 }}>{errors.message.message}</span>}
      <button className={s.addMessage_btn}></button>
    </form>
  );
};

MessageForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default MessageForm;
