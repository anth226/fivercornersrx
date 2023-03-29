import React from 'react';
import DashboardHeader from '../DashboardHeader/DashboardHeader';
import OrderHistoryTable from './OrderHistoryTable';
import { motion } from "framer-motion";

const OrderHistory = () => {
    return (<motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 2 }}
    ><div>
            <DashboardHeader heading='Order History' details='Track your order details.' />
            <OrderHistoryTable />
        </div>
    </motion.main>);
}

export default OrderHistory;


