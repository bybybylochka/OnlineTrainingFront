import React, {useState} from "react";
import {useFormik} from "formik";
import {categories} from "../categories/categories-data";




const SearchForm = ({courses, setFilteredCourses}) => {

    const searchCourses = (values, allCourses) => {
        const { query, category, minPrice, maxPrice } = values;

        let filteredCourses = allCourses;
        if (query) {
            const searchQuery = query.toLowerCase();
            filteredCourses = filteredCourses.filter(
                (course) =>
                    course.name.toLowerCase().includes(searchQuery) ||
                    course.description.toLowerCase().includes(searchQuery)
            );
        }

        if(category && category!=='Категория')
        {
            filteredCourses = filteredCourses.filter((course) => course.category === category);
        }

        if (minPrice || maxPrice) {
            filteredCourses = filteredCourses.filter((course) => {
                if (minPrice && maxPrice) {
                    return course.price >= minPrice && course.price <= maxPrice;
                } else if (minPrice) {
                    return course.price >= minPrice;
                } else if (maxPrice) {
                    return course.price <= maxPrice;
                }
                return true;
            });
        }


        setFilteredCourses(filteredCourses);
    };

    const formik = useFormik({
        initialValues: {
            query: '',
            category: '',
            minPrice: '',
            maxPrice: ''
        },
        onSubmit: values => {
            console.log(values);
            searchCourses(values, courses);
        },
    });


    return (
        <form onSubmit={formik.handleSubmit} className={'search-form'}>
            <div className={'search-form__query'}>
                <input className={formik.touched.query && formik.errors.query ? 'errorField' : ''}
                       id="query"
                       name="query"
                       placeholder="Название курса"
                       type="text"
                       onChange={formik.handleChange}
                       onBlur={formik.handleBlur}
                       value={formik.values.query}
                />
                <button className={'button button_colored'} type="submit">Найти</button>
            </div>

            <div className={'search-form__options'}>
                <select className={formik.touched.category && formik.errors.category ? 'errorField' : ''}
                        id="category"
                        name="category"
                        placeholder="Категория"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.category}>
                    <option value="" selected >
                        Категория
                    </option>
                    {/*<option selected={true} disabled={true}></option>*/}
                    {categories.map((category) =>
                        <option key={category.id}
                                value={category.value}
                                selected={formik.values.category === category.title}>
                            {category.title}
                        </option>)}
                </select>
                <div className={'search-form__price-range'}>
                    <input
                        className={formik.touched.minPrice && formik.errors.minPrice ? 'errorField' : ''}
                        id="minPrice"
                        name="minPrice"
                        placeholder="Мин"
                        type="number"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.minPrice}
                    />
                    <label id={'minPrice'}>BYN</label>
                    <span> - </span>
                    <input
                        className={formik.touched.maxPrice && formik.errors.maxPrice ? 'errorField' : ''}
                        id="maxPrice"
                        name="maxPrice"
                        placeholder="Макс"
                        type="number"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.maxPrice}
                    />
                    <label id={'maxPrice'}>BYN</label>
                </div>

            </div>

        </form>
    );
}

export default SearchForm;