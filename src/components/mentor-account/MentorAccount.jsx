import React from 'react';
import AccountNavigation from "../account-navigation/AccountNavigation";
import {Route, Routes} from "react-router-dom";
import {mentorPaths} from "../utils/account-paths";
import MentorData from "./mentor-data/MentorData";
import MentorCourses from "./mentor-courses/MentorCourses";

const MentorAccount = () => {
    return (
        <div className={'account'}>
            <div className={'account__wrapper wrapper'}>
                <AccountNavigation list={mentorPaths}/>
                <div className={'account__workspace'}>
                    <Routes>
                        <Route path={'/data'} element={<MentorData/>}/>
                        <Route path={'/courses'} element={<MentorCourses/>}/>
                    </Routes>
                </div>
            </div>
        </div>
    )
}

export default MentorAccount;