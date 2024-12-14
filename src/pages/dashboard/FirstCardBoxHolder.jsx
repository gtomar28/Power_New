import React, {useState} from 'react';
import { Grid } from '@mui/material'
import AmountCards from 'components/cards/statistics/AmountCards';
import AnalyticEcommerce from 'components/cards/statistics/AnalyticEcommerce';

import walletSettings from 'assets/images/walletSettings.svg';
import AdminStats from 'components/cards/statistics/AdminStats';
import AdminCount from 'components/cards/statistics/AdminCount';

const FirstCardBoxHolder = ({ Statics, adminDetails }) => {

       // State for selected admin IDs
       const [selectedFirstAdminId, setSelectedFirstAdminId] = useState(null);
       const [selectedSecondAdminId, setSelectedSecondAdminId] = useState(null);

    const adminStatsData = [
        { admin: 'Admin 1', payIn: '30,00,000', payOut: '22,00,000' },
        { admin: 'Admin 2', payIn: '44,00,000', payOut: '31,00,000' },
    ];

    const adminData = [
        { adminName: 'Admin 1', adminDropOptions: ['SuperAdmin1', 'SuperAdmin2', 'SuperAdmin3'] },
        { adminName: 'Admin 2', adminDropOptions: ['SuperAdmin1', 'SuperAdmin2', 'SuperAdmin3'] },
    ];



    // Callbacks for handling selected IDs
    const handleFirstAdminSelect = (id) => {
        setSelectedFirstAdminId(id);
        console.log('Selected First Admin ID:', id); // Debug
    };

    const handleSecondAdminSelect = (id) => {
        setSelectedSecondAdminId(id);
        console.log('Selected Second Admin ID:', id); // Debug
    };

    return (
        <Grid container spacing={2} alignItems='center'>
            <Grid item xs={12} sm={6} md={6} lg={6}>
                <AmountCards title="PayIn Amount" count={`${Statics?.total_payin_amount} INR`} extra={`Available PayIn Limit: ${Statics?.payin_limit}`} image={walletSettings} />
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={6}>
                <AmountCards title="PayOut Amount" count={`${Statics?.total_payout_amount} INR`} extra={`Available PayIn Limit: ${Statics?.payout_limit}`} image={walletSettings} />
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={6}>
                <AnalyticEcommerce title="Total number of PayIn" count={Statics?.total_payin_count} />
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={6}>
                <AnalyticEcommerce title="Total number of PayOut" count={Statics?.total_payout_count} />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12}>
                <AdminCount
                    title="Total Admin"
                    items={adminDetails}
                    onSelectFirstAdmin={handleFirstAdminSelect}
                    onSelectSecondAdmin={handleSecondAdminSelect}
                />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12}>
                <AdminStats title="Stats of Admins" items={adminDetails} firstId={selectedFirstAdminId} secId={selectedSecondAdminId} />
            </Grid>
        </Grid>
    )
}

export default FirstCardBoxHolder




