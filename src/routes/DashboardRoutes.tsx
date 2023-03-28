import * as React from 'react';
import TreatmentPlan from '../Components/TreatmentPlan/TreatmentPlan';
import { Switch, Route } from 'react-router-dom';
import Loading from '../Components/Loading/Loading';
import { PATH } from '../constants/paths';
const EditProfile = React.lazy(() => import('../Components/EditProfile/EditProfile'));
const MyCase = React.lazy(() => import('../Components/MyCase/MyCase'));
const OrderHistory = React.lazy(() => import('../Components/OrderHistory/OrderHistory'));
const BillingDetails = React.lazy(() => import('../Components/BillingDetails/BillingDetails'));
const Security = React.lazy(() => import('../Components/Security/Security'));

const DashboardRoutes: React.FC = () => {
    return (<React.Suspense fallback={<Loading />}>
        <Switch>
            <Route path={PATH.EditProfile} component={EditProfile} />
            <Route path={PATH.TreatmentPlan} component={TreatmentPlan} />
            <Route path={PATH.MyCase} component={MyCase} />
            <Route path={PATH.OrderHistory} component={OrderHistory} />
            <Route path={PATH.BillingDetails} component={BillingDetails} />
            <Route path={PATH.Security} component={Security} />
        </Switch >
    </React.Suspense>);
}

export default DashboardRoutes;