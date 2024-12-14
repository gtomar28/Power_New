import React, { useState, useEffect } from 'react';
import { Button, Tab, TablePagination } from '@mui/material';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import { Box, Grid, Typography } from '@mui/material';
import PayOutOperationData from 'components/cards/statistics/PayOutOperationsData';
import { OutlinedInput, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import Notification from 'layout/Dashboard/Header/HeaderContent/Notification';
import { getAllAayoutRequests } from '../../api/api';
import { Link } from 'react-router-dom';

export default function PayOutOperationsDefault() {
    const [value, setValue] = React.useState('');

    const userLocalData = JSON.parse(localStorage.getItem('assigned_data'));

    const [updateData, setupdateData] = useState(false);
    const [showLoader, setShowLoader] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const itemsPerPage = 10;

    const [orderCreate, setCreateOrder] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const [agent, setAgent] = useState('');

    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [page, setPage] = useState(0);
    const [rowsPerPageOptions, setRowsPerPageOptions] = useState([10, 25, 50]); // Dynamic options
    const totalRows = 100; // Example total row count



    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        const newRowsPerPage = parseInt(event.target.value, 10);
        setRowsPerPage(newRowsPerPage);
        setPage(0); // Reset to the first page

        // Optionally update the options dynamically
        if (!rowsPerPageOptions.includes(newRowsPerPage)) {
            setRowsPerPageOptions([...rowsPerPageOptions, newRowsPerPage].sort((a, b) => a - b));
        }
    };



    const fetchData = async () => {
        try {
            setShowLoader(true);
            const orderResponse = await getAllAayoutRequests(searchTerm, page + 1, agent, value);
            console.log(orderResponse, "Payout ")
            if (orderResponse?.status === 200 && orderResponse?.data?.results)
                setShowLoader(false);
            setCreateOrder(orderResponse?.data.results);
            setTotalPages(Math.ceil(orderResponse.data.count / itemsPerPage));
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        fetchData();
    }, [searchTerm, page + 1, agent, updateData, value]);


    // Handle input change
    const handleInputChange = (value) => {
        setSearchTerm(value);
    };

    const handleChange = (event, newValue) => {
        setValue(newValue);
        setSearchTerm(newValue)
    };


    return (
        <Grid container rowSpacing={4.5} columnSpacing={2.75}>
            {/* Row 1 */}
            <Grid item xs={12} sx={{ mb: -2.25 }}>
                <Typography variant="h5" sx={{ color: '#828282', textTransform: 'capitalize' }}>
                    Hi {userLocalData?.name},
                </Typography>
                <Grid container sx={{ display: 'flex' }}>
                    <Grid item xs={12} lg={7} alignSelf='center'>
                        <Typography variant="h2">Welcome to PayOut Operations</Typography>
                    </Grid>
                    <Grid item xs={12} lg={5} sx={{ display: 'flex', alignItems: 'center', mt: { xs: 2, sm: 0 }, }}>
                        {/* <img src={bellNotification} alt="bellNotification" /> */}
                        <Notification />
                        <OutlinedInput
                            placeholder="Search"
                            startAdornment={
                                <InputAdornment position="start">
                                    <SearchIcon style={{ color: '#3B82F6' }} value={searchTerm} onChange={(e) => handleInputChange(e.target.value)} />
                                </InputAdornment>
                            }
                            sx={{
                                ml: 2,
                                width: '100%',
                                backgroundColor: '#fff',
                                borderRadius: '24px',
                                padding: '6px 16px',
                                '& .MuiOutlinedInput-notchedOutline': {
                                    border: 'none',
                                },
                                '&:hover .MuiOutlinedInput-notchedOutline': {
                                    border: 'none',
                                },
                                '&.Mui-focused': {
                                    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
                                },
                            }}
                        />
                    </Grid>
                </Grid>
            </Grid>

            {/* Row 2 */}
            <Grid item xs={12} md={12} lg={12}>
                <Box sx={{ width: '100%', typography: 'body1' }}>
                    <TabContext value={value}>
                        <Box sx={{}}>
                            <Grid container >
                                <Grid item xs={12} md={6} sx={{ display: { xs: 'flex', md: 'block' }, justifyContent: { xs: 'center', md: 'unset' }, }}>
                                    <TabList
                                        onChange={handleChange}
                                        aria-label="customized tabs"
                                        sx={{
                                            '& .MuiTab-root': {
                                                textTransform: 'none',
                                                px: 2.5,
                                                backgroundColor: '#fff',
                                                borderRadius: '10px',
                                                color: '#ADA7A7',
                                                marginRight: 1,
                                                minWidth: 'fit-content',
                                                transition: 'background-color 0.3s',
                                                '&:hover': {
                                                    backgroundColor: '#2C6DB5',
                                                    color: '#ffffff',
                                                },
                                                '&:active': {
                                                    backgroundColor: '#2C6DB5',
                                                    color: '#ffffff',
                                                }
                                            },
                                            '& .Mui-selected': {
                                                backgroundColor: '#2C6DB5',
                                                color: '#ffffff !important',
                                                borderRadius: '10px',
                                            },
                                            '& .MuiTabs-indicator': {
                                                backgroundColor: 'transparent',
                                            },
                                        }}
                                    >
                                        <Tab label="All" value="" />
                                        <Tab label="Assigned" value="ASSIGNED" />
                                        <Tab label="Approved" value="APPROVED" />
                                        <Tab label="Created" value="CREATED" />
                                    </TabList>
                                </Grid>
                                <Grid item xs={12} md={6} display='flex' justifyContent='end' alignItems='center' sx={{ mt: { xs: 2, sm: 0 }, }}>
                                    <Button component={Link} to='/createPayOutOperations' disableRipple sx={{
                                        minWidth: 'fit-content', textTransform: 'none', borderRadius: '32px', px: 4, mx: 0.5, py: 1, fontSize: '14px', fontWeight: 500,
                                        backgroundColor: '#DDE7F3', color: '#2C6DB5', boxShadow: 'none', border: 'none', outline: 'none',
                                        '&:hover, &:active, &:focus': { backgroundColor: '#DDE7F3', color: '#2C6DB5', boxShadow: 'none', }, '&:focus-visible': { outline: 'none', boxShadow: 'none' }, '&.MuiOutlinedInput - notchedOutline': { borderColor: 'transparent', }, '&.Mui-focused .MuiOutlinedInput-notchedOutline': { borderColor: 'transparent', },
                                    }}>
                                        + Create PayOut Order
                                    </Button>
                                </Grid>
                            </Grid>
                        </Box>
                        <TabPanel value=""
                            sx={{
                                p: 0, py: 2
                            }}>
                            <PayOutOperationData payOutData={orderCreate} />
                        </TabPanel>
                        <TabPanel value="ASSIGNED" sx={{
                            p: 0, py: 2
                        }}>
                            <PayOutOperationData payOutData={orderCreate} />
                        </TabPanel>
                        <TabPanel value="APPROVED" sx={{
                            p: 0, py: 2
                        }}>
                            <PayOutOperationData payOutData={orderCreate} />
                        </TabPanel>
                        <TabPanel value="CREATED" sx={{
                            p: 0, py: 2
                        }}>
                            <PayOutOperationData payOutData={orderCreate} />
                        </TabPanel>
                    </TabContext>
                </Box>
            </Grid>

            <TablePagination rowsPerPageOptions={rowsPerPageOptions} rowsPerPage={rowsPerPage} page={page} count={totalPages} onPageChange={handleChangePage} onRowsPerPageChange={handleChangeRowsPerPage} />


        </Grid>
    );
}
