import React from 'react'
import styles from './dashboardheader.module.scss'

type Props = {
    heading: string;
    details: string;
}

const DashboardHeader: React.FC<Props> = ({ heading, details }) => {
    return (<div className={styles.dashboardHeader}>
        <p className={styles.headText}>{heading}</p>
        <p className={styles.primaryText}>{details}</p>
    </div>);
}

export default DashboardHeader;