import React from "react";
import Slider from "react-slick";
import CategoryHighlight from "../category-highlight/CategoryHighlight";
import {categories} from '../categories-data';

const TopCategories = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        initialSlide: 0,
    };
    return (
        <div className={'top-categories'}>
            <div className={'top-categories__wrapper wrapper'}>
                <p className={'top-categories__title'}>Исследуйте лучшие <span>категории</span></p>
                <p className={'top-categories__text'}>Нажмите на категории и ознакомьтесь со всеми курсами</p>
                <div className={'top-categories__slider'}>
                    <Slider {...settings}>
                        {categories.map((category, index) => (
                            <CategoryHighlight
                                key={index}
                                category={category}
                            />
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    );
}
export default TopCategories;