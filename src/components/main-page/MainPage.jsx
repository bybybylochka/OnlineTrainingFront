import React from 'react'
import Promo from "../promo/Promo";
import PopularCourses from "../popular-courses/PopularCourses";
import TopCategories from "../categories/top-categories/TopCategories";

const MainPage = () => {
    return (
        <main>
            <Promo/>
            <PopularCourses/>
            <TopCategories/>
        </main>
    )
}

export default MainPage;