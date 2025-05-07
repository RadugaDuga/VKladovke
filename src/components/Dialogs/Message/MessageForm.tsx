import { useForm, SubmitHandler } from "react-hook-form";
import s from "../Dialogs.module.css";

interface MessageFormProps {
  onSubmit: (message: string) => void;
}

interface MessageFormFields {
  message: string;
}

const MessageForm: React.FC<MessageFormProps> = ({ onSubmit }) => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<MessageFormFields>();
  const submitHandler: SubmitHandler<MessageFormFields> = (data) => {
    onSubmit(data.message);
    reset();
  };
  return (
    <form className={s.form} onSubmit={handleSubmit(submitHandler)}>
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

export default MessageForm;
