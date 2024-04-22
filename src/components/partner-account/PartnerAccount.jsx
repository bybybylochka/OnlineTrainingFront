import React from 'react';
import {Route, Routes} from "react-router-dom";
import AccountNavigation from "../account-navigation/AccountNavigation";
import PartnerCourses from "./partner-courses/PartnerCourses";
import PartnerMentors from "./partner-mentors/PartnerMentors";
import PartnerData from "./partner-data/PartnerData";
import PartnerStatistics from "./partner-statistics/PartnerStatistics";
import {partnerPaths} from "../utils/account-paths";

const PartnerAccount = () => {
    return (
        <div className={'account'}>
            <div className={'account__wrapper wrapper'}>
                <AccountNavigation list={partnerPaths}/>
                <div className={'account__workspace'}>
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