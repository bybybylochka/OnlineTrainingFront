import React from "react";
import AccountNavigation from "../account-navigation/AccountNavigation";
import {Route, Routes} from "react-router-dom";
import {adminPaths} from "../utils/account-paths";
import AdminCourses from "./admin-courses/AdminCourses";
import AdminStatistics from "./admin-statistics/AdminStatistics";

const AdminAccount = () => {
    return (
        <div className={'account'}>
            <div className={'account__wrapper wrapper'}>
                <AccountNavigation list={adminPaths}/>
                <div className={'account__workspace'}>
                    <Routes>
                        <Route path={'/courses'} element={<AdminCourses/>}/>
                        <Route path={'/statistics'} element={<AdminStatistics/>}/>
                    </Routes>
                </div>
            </div>
        </div>
    )
}

export default AdminAccount;