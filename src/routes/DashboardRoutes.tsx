import * as React from 'react';
import TreatmentPlan from '../Components/TreatmentPlan/TreatmentPlan';
import { Routes, Route } from 'react-router-dom';
import Loading from '../Components/Loading/Loading';
import { PATH } from '../constants/paths';
const EditProfile = React.lazy(() => import('../Components/EditProfile/EditProfile'));
const MyCase = React.lazy(() => import('../Components/MyCase/MyCase'));
const OrderHistory = React.lazy(() => import('../Components/OrderHistory/OrderHistory'));
const BillingDetails = React.lazy(() => import('../Components/BillingDetails/BillingDetails'));
const Security = React.lazy(() => import('../Components/Security/Security'));

const DashboardRoutes: React.FC = () => {
    return (<React.Suspense fallback={<Loading />}>
        <Routes>
            <Route path={PATH.EditProfile} element={<EditProfile />} />
            <Route path={PATH.TreatmentPlan} element={<TreatmentPlan />} />
            <Route path={PATH.MyCase} element={<MyCase />} />
            <Route path={PATH.OrderHistory} element={<OrderHistory />} />
            <Route path={PATH.BillingDetails} element={<BillingDetails />} />
            <Route path={PATH.Security} element={<Security />} />
        </Routes >
    </React.Suspense>);
}

export default DashboardRoutes;