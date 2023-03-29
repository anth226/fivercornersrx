import React from 'react'
import DashboardRoutes from './DashboardRoutes';
import MainRoutes from './MainRoutes';
import { AnimatePresence } from "framer-motion";

const Routes = () => {
    return (
        <React.Fragment>
            <AnimatePresence>
                <MainRoutes />
            </AnimatePresence>
            {/* <DashboardRoutes /> */}
        </React.Fragment>
    );
}

export default Routes;