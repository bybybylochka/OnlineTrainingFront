import React from 'react';
import {Route, Routes} from "react-router-dom";
import AccountNavigation from "../account-navigation/AccountNavigation";
import PartnerCourses from "./partner-courses/PartnerCourses";
import PartnerMentors from "./partner-mentors/PartnerMentors";
import PartnerData from "./partner-data/PartnerData";
import PartnerStatistics from "./partner-statistics/PartnerStatistics";

const PartnerAccount = () => {
    const list = [
        {
            path: '/partner-account/data',
            title: 'Данные'
        },
        {
            path: '/partner-account/courses',
            title: 'Курсы'
        },
        {
            path: '/partner-account/mentors',
            title: 'Менторы'
        },
        {
            path: '/partner-account/statistics',
            title: 'Статистика'
        }
    ]
    return (
        <div className={'partner-account'}>
            <div className={'partner-account__wrapper wrapper'}>
                <AccountNavigation list={list}/>
                <div className={'partner-account__workspace'}>
                    <Routes>
                        <Route path={'/data'} element={<PartnerData/>}/>
                        <Route path={'/courses'} element={<PartnerCourses/>}/>
                        <Route path={'/mentors'} element={<PartnerMentors/>}/>
                        <Route path={'/statistics'} element={<PartnerStatistics/>}/>
                    </Routes>
                </div>
            </div>
        </div>
    )
}

export default PartnerAccount;