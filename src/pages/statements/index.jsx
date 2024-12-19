
import { Button, Tab, CircularProgress, TablePagination } from '@mui/material';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import { Box, Grid } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';
import { getAllStatements } from 'api/api';
import { OutlinedInput, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import Notification from 'layout/Dashboard/Header/HeaderContent/Notification';
import { useDialog } from 'components/Dialogs/DialogProvider';
import HashLoader from 'components/HashLoader';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function AccountsDefault() {

    const userLocalData = JSON.parse(localStorage.getItem('assigned_data'));
    const [showLoader, setShowLoader] = useState(false);

    const { openDialog } = useDialog();

    const [value, setValue] = React.useState('1');
    const [data, setData] = React.useState([]);
    const [onData, setOnData] = React.useState(false);
    const [roleVal, setRoleVal] = React.useState('');
    const [statusVal, setStatusVal] = React.useState('');
    const [searchVal, setSearchVal] = React.useState('');
    const [loading, setLoading] = React.useState(false);
    const [userState, setUserState] = React.useState();
    const [userId, setUserId] = React.useState();
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const rows = data?.results;

    React.useEffect(() => {
        getUsers();
    }, [page, searchVal, roleVal, statusVal, onData]);

    const getUsers = async () => {
        setShowLoader(true);
        try {
            const response = await getAllStatements();
            console.log(response, "Users");
            if (response?.status === 200) {
                setData(response?.data);
            } else {
                console.error('Failed to fetch data', response);
            }
        } catch (err) {
            console.error('Error fetching users:', err);
        } finally {
            setShowLoader(false);
        }
    };

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleCloseDialog = () => {
        setOpenDialog(false);
    };

    const handleConfirm = async () => {
        setShowLoader(true);
        try {
            console.log(userId)
            const response = await updateUserbyId(userId);
            console.log(response, "user update successfully")
            if (response.status === 200) {
                getUsers();
                handleCloseDialog();
                setShowLoader(false);
            }
        } catch (err) {
            console.log(err);
        }

    };
    return (
        <>
        {
            showLoader && (
              <HashLoader />
            )
          }
        <Grid container rowSpacing={4.5} columnSpacing={2.75}>
            {/* Row 1 */}
            <Grid item xs={12} sx={{ mb: -2.25 }}>
                <Typography variant="h5" sx={{ color: '#828282', textTransform: 'capitalize' }}>
                Hi {userLocalData?.name !== '' ? userLocalData?.name : userLocalData?.username},
                </Typography>
                <Grid container sx={{ display: 'flex' }}>
                    <Grid item xs={12} lg={7} alignSelf='center'>
                        <Typography variant="h2">Welcome to Statements</Typography>
                    </Grid>
                    <Grid item xs={12} lg={5} sx={{ display: 'flex', alignItems: 'center', mt: { xs: 2, sm: 0 }, }}>
                        <Notification />
                        {/* <OutlinedInput
                            placeholder="Search"
                            startAdornment={
                                <InputAdornment position="start">
                                    <SearchIcon style={{ color: '#3B82F6' }} />
                                </InputAdornment>
                            }
                            sx={{
                                ml: 2, width: '100%', backgroundColor: '#fff', borderRadius: '24px', padding: '6px 16px',
                                '& .MuiOutlinedInput-notchedOutline': { border: 'none' },
                                '&:hover .MuiOutlinedInput-notchedOutline': { border: 'none' },
                                '&.Mui-focused': { boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)' },
                            }}
                        /> */}
                    </Grid>
                </Grid>
            </Grid>
            {/* Row 2 */}
            <Grid item xs={12} md={12} lg={12}>
                <Box sx={{ width: '100%', typography: 'body1' }}>
                    <TabContext value={value}>
                        <Box sx={{}}>
                            <Grid container>
                                <Grid item xs={12} md={6} sx={{ display: { xs: 'flex', md: 'block' }, justifyContent: { xs: 'center', md: 'unset' } }}>
                                    <TabList onChange={handleChange} aria-label="customized tabs" sx={{
                                        '& .MuiTab-root': {
                                            textTransform: 'none', px: 2.5, backgroundColor: '#fff', borderRadius: '10px',
                                            color: '#ADA7A7', marginRight: 1, minWidth: 'fit-content', transition: 'background-color 0.3s',
                                            '&:hover': { backgroundColor: '#2C6DB5', color: '#ffffff' },
                                            '&:active': { backgroundColor: '#2C6DB5', color: '#ffffff' },
                                        },
                                        '& .Mui-selected': { backgroundColor: '#2C6DB5', color: '#ffffff !important', borderRadius: '10px' },
                                        '& .MuiTabs-indicator': { backgroundColor: 'transparent' },
                                    }}>
                                        <Tab label="All" value="1" onClick={() => { setStatusVal(''); setRoleVal(''); }} />
                                        {/* <Tab label="PayIn" value="2" onClick={() => { setRoleVal(''); setStatusVal('payIn') }} />
                                        <Tab label="PayOut" value="3" onClick={() => { setRoleVal(''); setStatusVal('PayOut') }} /> */}
                                    </TabList>
                                </Grid>
                                <Grid item xs={12} md={6} display='flex' justifyContent='end' alignItems='center' sx={{ mt: { xs: 2, sm: 0 }, }}>
                                    <Button component={Link} to='/savedReports' disableRipple sx={{
                                        minWidth: 'fit-content', textTransform: 'none', borderRadius: '32px', px: 3.5, mx: 0.5, py: 0.9, fontSize: '14px', fontWeight: 500,
                                        backgroundColor: 'none', border: '1px solid #2C6DB5', color: '#2C6DB5', boxShadow: 'none',
                                        '&:hover, &:active, &:focus': { backgroundColor: 'none', border: '1px solid #2C6DB5', color: '#2C6DB5', boxShadow: 'none', }, '&:focus-visible': { outline: 'none', boxShadow: 'none' }, '&.MuiOutlinedInput - notchedOutline': { borderColor: 'transparent', }, '&.Mui-focused .MuiOutlinedInput-notchedOutline': { borderColor: 'transparent', },
                                    }}>
                                        Saved Reports
                                    </Button>
                                    <Button onClick={openDialog} disableRipple sx={{
                                        minWidth: 'fit-content', textTransform: 'none', borderRadius: '32px', px: 4, mx: 0.5, py: 1, fontSize: '14px', fontWeight: 500,
                                        backgroundColor: '#DDE7F3', color: '#2C6DB5', boxShadow: 'none', border: 'none', outline: 'none',
                                        '&:hover, &:active, &:focus': { backgroundColor: '#DDE7F3', color: '#2C6DB5', boxShadow: 'none', }, '&:focus-visible': { outline: 'none', boxShadow: 'none' }, '&.MuiOutlinedInput - notchedOutline': { borderColor: 'transparent', }, '&.Mui-focused .MuiOutlinedInput-notchedOutline': { borderColor: 'transparent', },
                                    }}>
                                        + Generate Report
                                    </Button>
                                </Grid>
                            </Grid>
                        </Box>
                        {loading ? (
                            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '300px' }}>
                                <CircularProgress />
                            </Box>
                        ) : (
                            <>
                                <TabPanel value={value} sx={{ p: 0, py: 2 }}>
                                    {rows && rows.length > 0
                                        ?
                                            <TableContainer component={Paper} sx={{ borderRadius: '10px' }}>
                                                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                                    <TableHead>
                                                        <TableRow>
                                                            <TableCell sx={{ py: 2.5 }}>Date & Time</TableCell>
                                                            <TableCell sx={{ py: 2.5 }}>Order ID</TableCell>
                                                            <TableCell sx={{ py: 2.5 }}>Amount</TableCell>
                                                            <TableCell sx={{ py: 2.5 }}>Type</TableCell>
                                                            <TableCell sx={{ py: 2.5 }}>Before PayIn Limit</TableCell>
                                                            <TableCell sx={{ py: 2.5 }}>After PayIn Limit</TableCell>
                                                            <TableCell sx={{ py: 2.5 }}>Commission</TableCell>
                                                        </TableRow>
                                                    </TableHead>
                                                    <TableBody>
                                                        {rows.map((row) => (
                                                            <TableRow key={row?.id} sx={{ backgroundColor: row?.id % 2 === 0 ? '#fff' : '#F2F6FC' }}>
                                                                <TableCell sx={{ py: 1.8, color: '#797B7E' }}>{row?.date_time}</TableCell>
                                                                <TableCell sx={{ py: 1.8, color: '#797B7E' }}>{row?.order_id}</TableCell>
                                                                <TableCell sx={{ py: 1.8 }}>{row?.amount}</TableCell>
                                                                <TableCell sx={{ py: 1.8 }}>{row?.type}</TableCell>
                                                                <TableCell sx={{ py: 1.8 }}>{row?.before_payin_limit}</TableCell>
                                                                <TableCell sx={{ py: 1.8 }}>{row?.after_payin_limit}</TableCell>
                                                                <TableCell sx={{ py: 1.8 }}>{row?.commission}</TableCell>
                                                            </TableRow>
                                                        ))}
                                                    </TableBody>
                                                </Table>
                                                <TablePagination rowsPerPageOptions={[10, 25, 50]} rowsPerPage={rowsPerPage} page={page} count={data?.count} onPageChange={handleChangePage} onRowsPerPageChange={handleChangeRowsPerPage} />
                                            </TableContainer>

                                        :
                                        'No Data Found'}
                                </TabPanel>
                            </>
                        )}
                    </TabContext>
                </Box>
            </Grid>
        </Grid>
        </>
    );
}

