import React from "react";
import {resetCourseData} from "../../../reducers/courseReducer";
import {categories} from "../../categories/categories-data";
import arrow from "../../../assets/arrowToCourses.png";
import useCourseForm from "../../../hooks/useCourseForm";


const CourseForm = ({onSubmit, courseId, isAdding, setIsAdding, setIsEditing}) => {
    const {formik, fileInputRef, mentors, onBack} = useCourseForm({
        onSubmit,
        courseId,
        isAdding,
        setIsAdding,
        setIsEditing,
    });
    return (
        <form onSubmit={formik.handleSubmit} className={'course-form'} encType={"multipart/form-data"}>
            <button className={'button button_transparent'} onClick={onBack}><img src={arrow} alt={'arrow back'}/></button>
            <div className={'course-form__image-block'}>
                {!isAdding && formik.values.image && (
                    <img src={`data:image/jpeg;base64,${formik.values.image}`} alt={'avatar'}/>
                )}
                {isAdding && (
                    <input
                        className={formik.touched.image && formik.errors.image ? 'errorField' : ''}
                        ref={fileInputRef}
                        id="image"
                        name="image"
                        placeholder="Фото"
                        type="file"
                        accept="image/*"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.image}
                    />
                )}
                {formik.touched.image && formik.errors.image ? (
                    <div className={'errorText'}>{formik.errors.image}</div>
                ) : null}
            </div>
            <input className={formik.touched.name && formik.errors.name ? 'errorField' : ''}
                   id="name"
                   name="name"
                   placeholder="Название"
                   type="text"
                   onChange={formik.handleChange}
                   onBlur={formik.handleBlur}
                   value={formik.values.name}
            />
            {formik.touched.name && formik.errors.name ? (
                <div className={'errorText'}>{formik.errors.name}</div>
            ) : null}

            <textarea className={formik.touched.description && formik.errors.description ? 'errorField' : ''}
                      id="description"
                      name="description"
                      placeholder={"Описание"}
                      rows='15'
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.description}
            />
            {formik.touched.description && formik.errors.description ? (
                <div className={'errorText'}>{formik.errors.description}</div>
            ) : null}
            <input className={formik.touched.price && formik.errors.price ? 'errorField' : ''}
                   id="price"
                   name="price"
                   placeholder="Цена"
                   type="number"
                   onChange={formik.handleChange}
                   onBlur={formik.handleBlur}
                   value={formik.values.price}
            />
            {formik.touched.price && formik.errors.price ? (
                <div className={'errorText'}>{formik.errors.price}</div>
            ) : null}
            <select className={formik.touched.category && formik.errors.category ? 'errorField' : ''}
                    id="category"
                    name="category"
                    placeholder="Категория"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.category}>
                <option selected={true} disabled={true}></option>
                {categories.map((category) =>
                    <option key={category.id}
                            value={category.value}
                            selected={formik.values.category === category.title}>
                        {category.title}
                    </option>)}
            </select>
            {formik.touched.category && formik.errors.category ? (
                <div className={'errorText'}>{formik.errors.category}</div>
            ) : null}
            <select className={formik.touched.mentorId && formik.errors.mentorId ? 'errorField' : ''}
                    id="mentorId"
                    name="mentorId"
                    placeholder="Преподаватель"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.mentorId}>
                <option selected={true} disabled={true}></option>
                {mentors.map((mentor) =>
                    <option key={mentor.id}
                            value={mentor.id}
                            selected={formik.values.mentorId === mentor.id}>
                        {mentor.fullName}
                    </option>)}
            </select>
            {formik.touched.category && formik.errors.category ? (
                <div className={'errorText'}>{formik.errors.category}</div>
            ) : null}
            <button className={'button button_colored'}
                    type="submit"
                    disabled={!formik.dirty}>
                Сохранить
            </button>
        </form>
    );
};

export default CourseForm;