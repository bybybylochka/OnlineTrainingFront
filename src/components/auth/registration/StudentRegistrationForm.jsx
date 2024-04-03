import React from "react";
import {useFormik} from "formik";
import {NavLink} from "react-router-dom";

const validate = values => {
    const errors = {};

    if (!values.login) {
        errors.login = 'Это поле обязательное';
    }
    if (!values.password) {
        errors.password = 'Это поле обязательное';
    }
    return errors;
};

const StudentRegistrationForm = ({onSubmit}) => {
    const formik = useFormik({
        initialValues: {
            login: '',
            password: '',
            fullName: '',
            dateOfBirth: ''
        },
        validate,
        onSubmit: values => {
            onSubmit(values);
        },
    });
    return (
        <form onSubmit={formik.handleSubmit} className={'auth-form'}>
            <input className={ formik.touched.login && formik.errors.login ? 'errorField': '' }
                   id="login"
                   name="login"
                   placeholder="Логин"
                   type="text"
                   onChange={formik.handleChange}
                   onBlur={formik.handleBlur}
                   value={formik.values.login}
            />
            {formik.touched.login && formik.errors.login ? (
                <div className={'errorText'}>{formik.errors.login}</div>
            ) : null}

            <input className={ formik.touched.password && formik.errors.password ? 'errorField': '' }
                   id="password"
                   name="password"
                   placeholder="Пароль"
                   type="password"
                   onChange={formik.handleChange}
                   onBlur={formik.handleBlur}
                   value={formik.values.password}
            />
            {formik.touched.password && formik.errors.password ? (
                <div className={'errorText'}>{formik.errors.password}</div>
            ) : null}

            <input className={ formik.touched.password && formik.errors.password ? 'errorField': '' }
                   id="fullName"
                   name="fullName"
                   placeholder="ФИО"
                   type="text"
                   onChange={formik.handleChange}
                   onBlur={formik.handleBlur}
                   value={formik.values.fullName}
            />
            {formik.touched.password && formik.errors.password ? (
                <div className={'errorText'}>{formik.errors.password}</div>
            ) : null}

            <input className={ formik.touched.password && formik.errors.password ? 'errorField': '' }
                   id="dateOfBirth"
                   name="dateOfBirth"
                   placeholder="Дата рождения"
                   type="date"
                   onChange={formik.handleChange}
                   onBlur={formik.handleBlur}
                   value={formik.values.dateOfBirth}
            />
            {formik.touched.password && formik.errors.password ? (
                <div className={'errorText'}>{formik.errors.password}</div>
            ) : null}

            <div  className={'auth-form__buttons'}>
                <button className={'button button_colored'} type="submit">Создать аккаунт</button>
                <NavLink to={"/login"}><button className={'button button_transparent'}>Уже есть аккаунт? Войдите</button></NavLink>
            </div>
        </form>
    );
}

export default StudentRegistrationForm;