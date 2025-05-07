import React from "react";
import s from "./Login.module.css";
import importedS from "../common/FormControl/FormControl.module.css";
import { useForm, SubmitHandler } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../../redux/auth-reducer";
import { Redirect } from "react-router";
import type { RootState } from '../../redux/redux-store';

interface LoginFormFields {
  email: string;
  password: string;
  rememberMe: boolean;
  captcha?: string;
}

const Login: React.FC = () => {
  const dispatch = useDispatch();
  const captcha = useSelector((state: RootState) => state.auth.captchaURL);
  const isAuth = useSelector((state: RootState) => state.auth.isAuth);
  const error = useSelector((state: RootState) => state.auth.error);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormFields>();

  const onSubmit: SubmitHandler<LoginFormFields> = (data) => {
    dispatch(
      login(data.email, data.password, data.rememberMe, data.captcha) as any
    );
  };

  if (isAuth) {
    return <Redirect to="/profile" />;
  }

  return (
    <div className={s.joinBox}>
      <div className={s.information}>
        <h1 className={s.h1}>Впервые ВКладовке?</h1>
        <h3 className={s.h3}>Моментальная регистрация</h3>
      </div>

      <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
        <span>
          <input
            {...register("email", {
              required: "Обязательное поле",
              maxLength: {
                value: 20,
                message: "Максимум 20 символов",
              },
            })}
            className={s.field}
            placeholder={"Ваше имя"}
          />
          {errors.email && (
            <span className={importedS.form_summary_error}>
              {errors.email.message}
            </span>
          )}
        </span>
        <span>
          <input
            {...register("password", {
              required: "Обязательное поле",
              maxLength: {
                value: 16,
                message: "Максимум 16 символов",
              },
            })}
            className={s.field}
            placeholder={"Ваш пароль"}
            type="password"
          />
          {errors.password && (
            <span className={importedS.form_summary_error}>
              {errors.password.message}
            </span>
          )}
        </span>

        {captcha && (
          <>
            <img
              src={captcha}
              alt="^__^"
              className={s.captcha}
            />
            <input
              {...register("captcha", {
                required: "Введите капчу",
              })}
              className={s.field}
              placeholder="Введите капчу"
            />
            {errors.captcha && (
              <span
                className={importedS.form_summary_error}
              >
                {errors.captcha.message}
              </span>
            )}
          </>
        )}

        {error && (
          <div className={importedS.form_summary_error}>
            {error}
          </div>
        )}

        <div className={s.buttons_wrapper}>
          <span>
            <button className={s.submit_btn} type="submit">
              Войти
            </button>
          </span>

          <span className={s.checkbox}>
            <input
              type="checkbox"
              {...register("rememberMe")}
            />
            <p style={{ marginLeft: 6 }}>Запомнить меня</p>
          </span>
        </div>
      </form>
    </div>
  );
};

export default Login;
