import * as React from 'react';
import TreatmentPlan from '../Components/TreatmentPlan/TreatmentPlan';
import { Switch, Route } from 'react-router-dom';
import Loading from '../Components/Loading/Loading';
import { PATH } from '../constants/paths';
const HomePage = React.lazy(() => import('../Pages/HomePage/HomePage'));
const HowItWork = React.lazy(() => import('../Pages/HowItWork/HowItWork'));
const SildenafilCitrate = React.lazy(() => import('../Pages/SildenafilCitrate/SildenafilCitrate'));
const TadalafilCitrate = React.lazy(() => import('../Pages/TadalafilCitrate/TadalafilCitrate'));
// const BillingDetails = React.lazy(() => import('../Components/BillingDetails/BillingDetails'));
// const Security = React.lazy(() => import('../Components/Security/Security'));

const MainRoutes = () => {
    return (<React.Suspense fallback={<Loading />}>
        <Switch>
            <Route exact path={PATH.HomePage} component={HomePage} />
            <Route path={PATH.HowItWork} component={HowItWork} />
            <Route path={PATH.SildenafilCitrate} component={SildenafilCitrate} />
            <Route path={PATH.TadalafilCitrate} component={TadalafilCitrate} />
        </Switch >
    </React.Suspense>);
}

export default MainRoutes;