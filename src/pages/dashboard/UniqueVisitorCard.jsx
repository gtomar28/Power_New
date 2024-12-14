import { useState } from 'react';

import Box from '@mui/material/Box';

// project import
import MainCard from 'components/MainCard';
import IncomeAreaChart from './IncomeAreaChart';
import { Button, Grid, Typography } from '@mui/material';
import CommissionPercentage from 'components/cards/statistics/CommissionPercentage';

// ==============================|| DEFAULT - UNIQUE VISITOR ||============================== //

export default function UniqueVisitorCard({ Statics, graphDat }) {

  const percentageData = [
    { name: 'PayIn Commission', percentage: Statics?.pay_incommission },
    { name: 'PayOut Commission', percentage: Statics?.pay_outcommission },
  ];



  const [slot, setSlot] = useState('week');

  return (
    <>
      <MainCard content={false} sx={{ p: 2 }}>
        <Typography variant="h6" sx={{ fontWeight: 900, color: '#676767' }}>
          Commission Percentage
        </Typography>
        <Box sx={{ pt: 1 }}>
          <CommissionPercentage data={percentageData} />
        </Box>
        <Grid xs={12} md={12} lg={12} sx={{ display: 'flex', m: 1, p: 1.8, backgroundColor: '#F2F6FC', border: '1px solid #E5EEF7', borderRadius: '8px' }}>
          <Typography variant="h6" sx={{ fontWeight: 900, color: '#676767', flexGrow: 1 }}>
            Wallet Balance
          </Typography>
          <Typography variant="h5" sx={{ fontWeight: 900, color: '#2C6DB5' }}>
            {Statics?.wallet} INR
          </Typography>
        </Grid>
        <Box sx={{ display: 'flex', justifyContent: 'center', pt: 2 }}>
          <Button variant='contained' sx={{ backgroundColor: '#2C6DB5', borderRadius: '34px', px: 4 }}>Transfer to Wallet</Button>
        </Box>
        <Box sx={{ pt: 1, pr: 2 }}>
          <IncomeAreaChart graphDat={graphDat} slot={slot} />
        </Box>
      </MainCard>
    </>
  );
}
