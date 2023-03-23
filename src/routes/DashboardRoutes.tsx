import * as React from 'react';
import TreatmentPlan from '../Components/TreatmentPlan/TreatmentPlan';
import { Routes, Route } from 'react-router-dom';
import Loading from '../Components/Loading/Loading';
const MyCase = React.lazy(() => import('../Components/EditProfile/EditProfile'));
const EditProfile = React.lazy(() => import('../Components/MyCase/MyCase'));
const OrderHistory = React.lazy(() => import('../Components/OrderHistory/OrderHistory'));
const BillingDetails = React.lazy(() => import('../Components/BillingDetails/BillingDetails'));
const Security = React.lazy(() => import('../Components/Security/Security'));

const DashboardRoutes: React.FC = () => {
    return (<React.Suspense fallback={<Loading />}>
        <Routes>
            <Route path="/" element={<EditProfile />} />
            <Route path="/treatmentplan" element={<TreatmentPlan />} />
            <Route path="/mycase" element={<MyCase />} />
            <Route path="/orderhistory" element={<OrderHistory />} />
            <Route path="/billingdetails" element={<BillingDetails />} />
            <Route path="/security" element={<Security />} />
        </Routes >
    </React.Suspense>);
}

export default DashboardRoutes;