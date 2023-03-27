import React from 'react';
import DashboardHeader from '../DashboardHeader/DashboardHeader';
import OrderHistoryTable from './OrderHistoryTable';

const OrderHistory = () => {
    return (<div>
        <DashboardHeader heading='Order History' details='Track your order details.' />
        <OrderHistoryTable />
    </div>);
}

export default OrderHistory;


