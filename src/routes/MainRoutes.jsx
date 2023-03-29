import * as React from 'react';
import TreatmentPlan from '../Components/TreatmentPlan/TreatmentPlan';
import { Switch, Route } from 'react-router-dom';
import Loading from '../Components/Loading/Loading';
import { PATH } from '../constants/paths';
import FaqsPage from '../Pages/FaqsPage/FaqsPage';
import UserDashboard from '../Pages/UserDashboard/UserDashboard';
// import SignIn from '../Pages/SignIn/SignIn';
// import SignUp from '../Pages/SignUp/SignUp';
const SignIn = React.lazy(() => import('../Pages/SignIn/SignIn'));
const SignUp = React.lazy(() => import('../Pages/SignUp/SignUp'));
const Questionnaire = React.lazy(() => import('../Pages/Questionnaire/Questionnaire'));
const BillingQuestionnaire = React.lazy(() => import('../Pages/BillingQuestionnaire/BillingQuestionnaire'));
const HomePage = React.lazy(() => import('../Pages/HomePage/HomePage'));
const HowItWork = React.lazy(() => import('../Pages/HowItWork/HowItWork'));
const SildenafilCitrate = React.lazy(() => import('../Pages/SildenafilCitrate/SildenafilCitrate'));
const TadalafilCitrate = React.lazy(() => import('../Pages/TadalafilCitrate/TadalafilCitrate'));
// const BillingDetails = React.lazy(() => import('../Components/BillingDetails/BillingDetails'));
// const Security = React.lazy(() => import('../Components/Security/Security'));

const MainRoutes = () => {
    return (<React.Suspense fallback={<Loading />}>
        <Switch>
            <Route exact path={PATH.SignUp} component={SignUp} />
            <Route exact path={PATH.SignIn} component={SignIn} />
            <Route exact path={PATH.HomePage} component={HomePage} />
            <Route path={PATH.HowItWork} component={HowItWork} />
            <Route path={PATH.SildenafilCitrate} component={SildenafilCitrate} />
            <Route path={PATH.TadalafilCitrate} component={TadalafilCitrate} />
            <Route path={PATH.Quessionaire} component={Questionnaire} />
            <Route path={PATH.BillingQuestionnaire} component={BillingQuestionnaire} />
            <Route path={PATH.FaqsPage} component={FaqsPage} />
            <Route path={PATH.UserDash} component={UserDashboard} />
        </Switch>
    </React.Suspense>);
}

export default MainRoutes;