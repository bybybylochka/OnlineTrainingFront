import React from 'react';
import arrow from "../../../assets/arrowToCourses.png";
import useMentorForm from "../../../hooks/useMentorForm";


const MentorForm = ({onSubmit, mentorId, isAdding, setIsAdding, setIsEditing}) => {
    const {formik, fileInputRef, onBack} = useMentorForm({
        onSubmit,
        mentorId,
        isAdding,
        setIsAdding,
        setIsEditing,
    });
    return (
        <form onSubmit={formik.handleSubmit} className={'mentor-form'} encType={"multipart/form-data"}>
            <button className={'button back button_transparent'} onClick={onBack}><img src={arrow} alt={'arrow back'}/>
            </button>
            <div className={'mentor-form__image-block'}>
                {!isAdding && formik.values.image && (
                    <img src={`data:image/jpeg;base64,${formik.values.image}`} alt={'avatar'}/>
                )}
                {isAdding && (<input className={formik.touched.image && formik.errors.image ? 'errorField' : ''}
                                     ref={fileInputRef}
                                     id="image"
                                     name="image"
                                     placeholder="Фото"
                                     type="file"
                                     accept="image/*"
                                     onChange={formik.handleChange}
                                     onBlur={formik.handleBlur}
                                     value={formik.values.image}
                />)}
                {formik.touched.image && formik.errors.image ? (
                    <div className={'errorText'}>{formik.errors.image}</div>
                ) : null}
            </div>
            <input className={formik.touched.login && formik.errors.login ? 'errorField' : ''}
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

            <input className={formik.touched.password && formik.errors.password ? 'errorField' : ''}
                   id="password"
                   name="password"
                   placeholder={"Пароль"}
                   type={isAdding ? "password" : "text"}
                   onChange={formik.handleChange}
                   onBlur={formik.handleBlur}
                   value={formik.values.password}
                   disabled={!isAdding}
            />
            {formik.touched.password && formik.errors.password ? (
                <div className={'errorText'}>{formik.errors.password}</div>
            ) : null}
            <input className={formik.touched.fullName && formik.errors.fullName ? 'errorField' : ''}
                   id="fullName"
                   name="fullName"
                   placeholder="Полное имя"
                   type="text"
                   onChange={formik.handleChange}
                   onBlur={formik.handleBlur}
                   value={formik.values.fullName}
            />
            {formik.touched.fullName && formik.errors.fullName ? (
                <div className={'errorText'}>{formik.errors.fullName}</div>
            ) : null}
            <input className={formik.touched.experience && formik.errors.experience ? 'errorField' : ''}
                   id="experience"
                   name="experience"
                   placeholder="Опыт работы"
                   type="number"
                   onChange={formik.handleChange}
                   onBlur={formik.handleBlur}
                   value={formik.values.experience}
            />
            {formik.touched.experience && formik.errors.experience ? (
                <div className={'errorText'}>{formik.errors.experience}</div>
            ) : null}
            <textarea className={formik.touched.characteristic && formik.errors.characteristic ? 'errorField' : ''}
                      id="characteristic"
                      name="characteristic"
                      placeholder="Характеристика"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.characteristic}
                      rows={15}
            />
            {formik.touched.characteristic && formik.errors.characteristic ? (
                <div className={'errorText'}>{formik.errors.characteristic}</div>
            ) : null}
            <button className={'button button_colored'} type="submit" disabled={!formik.dirty}>Сохранить</button>
        </form>
    );
};

export default MentorForm;