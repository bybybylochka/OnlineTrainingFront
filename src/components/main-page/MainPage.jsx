import React from 'react'
import Header from "../header/Header";
import Promo from "../promo/Promo";
import PopularCourses from "../popular-courses/PopularCourses";
import TopCategories from "../top-categories/TopCategories";
import Footer from "../footer/Footer";

const MainPage = ( ) => {
    return (
            <main>
                <Promo/>
                <PopularCourses/>
                <TopCategories/>
            </main>
    )
}

export default MainPage;