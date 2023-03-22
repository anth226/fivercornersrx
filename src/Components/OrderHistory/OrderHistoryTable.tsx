import Table from 'react-bootstrap/Table';
import styles from "./orderhistory.module.scss"

const OrderHistoryTable = () => {
    return (
        <Table className={styles.tableContainer} striped bordered hover>
            <thead className={styles.tableHead}>
                <tr>
                    <th>Transaction ID</th>
                    <th>Product</th>
                    <th>Qty</th>
                    <th>Amount</th>
                    <th>Status</th>
                    <th>Shipping</th>
                    <th>Created</th>
                </tr>
            </thead>
            <tbody className={styles.tableBody}>
                <tr>
                    <td>0012141</td>
                    <td>Slidenafil 60mg</td>
                    <td>12 days</td>
                    <td>$72.00</td>
                    <td>Confirmed</td>
                    <td>Cancelled</td>
                    <td>17/01/2020</td>
                </tr>
                <tr>
                    <td>0012141</td>
                    <td>Slidenafil 60mg</td>
                    <td>12 days</td>
                    <td>$72.00</td>
                    <td>Confirmed</td>
                    <td>Cancelled</td>
                    <td>17/01/2020</td>
                </tr><tr>
                    <td>0012141</td>
                    <td>Slidenafil 60mg</td>
                    <td>12 days</td>
                    <td>$72.00</td>
                    <td>Confirmed</td>
                    <td>Cancelled</td>
                    <td>17/01/2020</td>
                </tr><tr>
                    <td>0012141</td>
                    <td>Slidenafil 60mg</td>
                    <td>12 days</td>
                    <td>$72.00</td>
                    <td>Confirmed</td>
                    <td>Cancelled</td>
                    <td>17/01/2020</td>
                </tr><tr>
                    <td>0012141</td>
                    <td>Slidenafil 60mg</td>
                    <td>12 days</td>
                    <td>$72.00</td>
                    <td>Confirmed</td>
                    <td>Cancelled</td>
                    <td>17/01/2020</td>
                </tr><tr>
                    <td>0012141</td>
                    <td>Slidenafil 60mg</td>
                    <td>12 days</td>
                    <td>$72.00</td>
                    <td>Confirmed</td>
                    <td>Cancelled</td>
                    <td>17/01/2020</td>
                </tr><tr>
                    <td>0012141</td>
                    <td>Slidenafil 60mg</td>
                    <td>12 days</td>
                    <td>$72.00</td>
                    <td>Confirmed</td>
                    <td>Cancelled</td>
                    <td>17/01/2020</td>
                </tr>
            </tbody>
        </Table>
    );
}

export default OrderHistoryTable