
import bellNotification from 'assets/images/bellNotification.svg';
import { OutlinedInput, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { Typography, Grid } from '@mui/material';
import ProductDataCards from 'components/cards/statistics/ProductDataCards';
import ProductCards from 'components/cards/statistics/ProductCards';
import { useState, useEffect } from 'react';
import { clientDetails, graphData } from '../../api/api';
import { toast } from 'react-hot-toast';
import Notification from 'layout/Dashboard/Header/HeaderContent/Notification';
import HashLoader from 'components/HashLoader';


export default function ProductsDefault() {

    const userLocalData = JSON.parse(localStorage.getItem('assigned_data'));
    const [clientDetail, setclientDetail] = useState([]);

    const Details = async () => {
        try {
            const response = await clientDetails();
            console.log(response, "Details");
            if (response?.status === 200) {
                setclientDetail(response?.data);
            }
        } catch (err) {
            console.error(err);
            toast.error(err?.response?.data?.error || 'Error creating payment');
        }
    };

    const [graphDat, setGraphData] = useState('');
    const [showLoader, setShowLoader] = useState(false);
    const [year, setYear] = useState(2024);
    const [type, setType] = useState('');
    const [Statics, setStatics] = useState('');
    const [adminDetails, setAdminDetails] = useState([]);

    const fetchData = async () => {
        try {
            setShowLoader(true);
            const orderResponse = await graphData(year, type);
            console.log(orderResponse, "OrderGraphData")
            if (orderResponse?.status === 200)
                setShowLoader(false);
            setGraphData(orderResponse?.data?.graph_data);
            setStatics(orderResponse?.data);
            setAdminDetails(orderResponse?.data?.Hierarchy)
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        fetchData();
        Details();
    }, [year, type]);


    return (
        <>
            {
                showLoader && (
                    <HashLoader />
                )
            }
            <Grid container rowSpacing={4.5} columnSpacing={2.75}>
                {/* Column 1 */}
                <Grid item xs={12} sx={{ mb: -2.25 }}>
                    <Typography variant="h5" sx={{ color: '#828282', textTransform: 'capitalize' }}>
                        Hi {userLocalData?.name !== '' ? userLocalData?.name : userLocalData?.username},
                    </Typography>
                    <Grid container sx={{ display: 'flex' }}>
                        <Grid item xs={12} lg={7} alignSelf='center'>
                            <Typography variant="h2">Welcome to Products</Typography>
                        </Grid>
                        <Grid item xs={12} lg={5} sx={{ display: 'flex', alignItems: 'center' }}>
                            {/* <img src={bellNotification} alt="bellNotification" /> */}
                            <Notification />
                            {/* <OutlinedInput
                            placeholder="Search"
                            startAdornment={
                                <InputAdornment position="start">
                                    <SearchIcon style={{ color: '#3B82F6' }} />
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
                        /> */}
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} mt={4}>
                    <ProductCards Statics={Statics} clientDetail={clientDetail} />
                </Grid>

                <Grid item xs={12} mt={4}>
                    <ProductDataCards clientDetail={clientDetail} />
                </Grid>

            </Grid>
        </>
    );
}
