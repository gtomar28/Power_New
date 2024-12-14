
import * as React from 'react';
import { Button, Tab, CircularProgress } from '@mui/material';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import { Box, Grid } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Typography, TablePagination, Dialog } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import PanoramaFishEyeIcon from '@mui/icons-material/PanoramaFishEye';
import TripOriginIcon from '@mui/icons-material/TripOrigin';
import CircleIcon from '@mui/icons-material/Circle';
import { DialogActions, DialogContent, DialogTitle } from '@mui/material';
import { updateUserbyId } from 'api/api';
import { OutlinedInput, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import Notification from 'layout/Dashboard/Header/HeaderContent/Notification';
import { getAllUsers } from 'api/api';
import { useNavigate } from 'react-router-dom';

export default function AccountsDefault() {

    const navigate = useNavigate()
    const [value, setValue] = React.useState('1');
    const [data, setData] = React.useState([]);
    const [onData, setOnData] = React.useState(false);
    const [roleVal, setRoleVal] = React.useState('');
    const [statusVal, setStatusVal] = React.useState('');
    const [searchVal, setSearchVal] = React.useState('');
    const [loading, setLoading] = React.useState(false);
    const [openDialog, setOpenDialog] = React.useState(false);
    const [userState, setUserState] = React.useState();
    const [userId, setUserId] = React.useState();
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const rows = data?.results;

    React.useEffect(() => {
        getUsers();
    }, [page, searchVal, roleVal, statusVal, onData]);

    const getUsers = async () => {
        setLoading(true);
        try {
            const response = await getAllUsers(page + 1, searchVal, roleVal, statusVal);
            console.log(response, "Users");

            if (response?.status === 200) {
                setData(response?.data);
            } else {
                console.error('Failed to fetch data', response);
            }
        } catch (err) {
            console.error('Error fetching users:', err);
        } finally {
            setLoading(false);
        }
    };

    const handleOpenDialog = (id, val) => {
        setUserId(id)
        setUserState(val)
        console.log(val)
        setOpenDialog(true);
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
        try {
            console.log(userId)
            const response = await updateUserbyId(userId);
            console.log(response, "user update successfully")
            if (response.status === 200) {
                getUsers();
                handleCloseDialog();
            }
        } catch (err) {
            console.log(err);
        }

    };
    return (
        <Grid container rowSpacing={4.5} columnSpacing={2.75}>
            {/* Row 1 */}
            <Grid item xs={12} sx={{ mb: -2.25 }}>
                <Typography variant="h5" sx={{ color: '#828282' }}>
                    Hi Rocky,
                </Typography>
                <Grid container sx={{ display: 'flex' }}>
                    <Grid item xs={12} lg={7} alignSelf='center'>
                        <Typography variant="h2">Welcome to Accounts</Typography>
                    </Grid>
                    <Grid item xs={12} lg={5} sx={{ display: 'flex', alignItems: 'center', mt: { xs: 2, sm: 0 }, }}>
                        <Notification />
                        <OutlinedInput
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
                        />
                    </Grid>
                </Grid>
            </Grid>

            {/* Row 2 */}
            <Grid item xs={12} md={12} lg={12}>
                <Box sx={{ width: '100%', typography: 'body1' }}>
                    <TabContext value={value}>
                        <Box sx={{}}>
                            <Grid container>
                                <Grid item xs={12} md={8} sx={{ display: { xs: 'flex', md: 'block' }, justifyContent: { xs: 'center', md: 'unset' } }}>
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
                                        <Tab label="Active" value="2" onClick={() => { setRoleVal(''); setStatusVal('active') }} />
                                        <Tab label="Inactive" value="3" onClick={() => { setRoleVal(''); setStatusVal('inactive') }} />
                                        <Tab label="Super Admin" value="4" onClick={() => { setStatusVal(''); setRoleVal('superadmin') }} />
                                        <Tab label="Admin" value="5" onClick={() => { setStatusVal(''); setRoleVal('admin') }} />
                                        <Tab label="SubAdmin" value="6" onClick={() => { setStatusVal(''); setRoleVal('creator') }} />
                                        <Tab label="Peer" value="7" onClick={() => { setStatusVal(''); setRoleVal('agent') }} />
                                    </TabList>
                                </Grid>
                                <Grid item xs={12} md={4} display='flex' justifyContent='end' alignItems='center' sx={{ mt: { xs: 2, sm: 0 } }}>
                                    <Button href='/createUser' disableRipple sx={{
                                        minWidth: 'fit-content', textTransform: 'none', borderRadius: '32px', px: 4, mx: 0.5, py: 1,
                                        fontSize: '14px', fontWeight: 500, backgroundColor: '#DDE7F3', color: '#2C6DB5', boxShadow: 'none', border: 'none',
                                    }}>
                                        + Create User
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
                                                        <TableCell sx={{ py: 2.5 }}>Name</TableCell>
                                                        <TableCell sx={{ py: 2.5 }}>Role</TableCell>
                                                        <TableCell sx={{ py: 2.5 }}>User UPI ID</TableCell>
                                                        <TableCell sx={{ py: 2.5 }}>Active status</TableCell>
                                                        <TableCell sx={{ py: 2.5 }}>Action</TableCell>
                                                    </TableRow>
                                                </TableHead>
                                                <TableBody>
                                                    {rows.map((row, index) => (
                                                        <TableRow onClick={() => navigate(`/userProfile/${row?.personal_details?.id}`)} key={index} sx={{ textDecoration: 'none', backgroundColor: index % 2 !== 0 ? '#fff' : '#F2F6FC' }}>
                                                            <TableCell sx={{ py: 1.8 }}>{row?.personal_details?.name}</TableCell>
                                                            <TableCell sx={{ py: 1.8 }}>{row?.personal_details?.username}</TableCell>
                                                            <TableCell sx={{ py: 1.8 }}>{row?.payment_details?.upi_id}</TableCell>
                                                            <TableCell sx={{ py: 1.8 }}>
                                                                <Grid alignItems="center" sx={{ display: 'flex' }}>
                                                                    <CircleIcon sx={{ mr: 1, fontSize: '1.2rem', color: row?.payment_details?.is_blocked ? '#EF4444' : '#22C55D' }} />
                                                                    <Typography variant="body1" sx={{ color: row?.payment_details?.is_blocked ? '#EF4444' : '#22C55D' }}> {row?.payment_details?.is_blocked ? 'Block' : 'Unblock'}</Typography>
                                                                </Grid>
                                                            </TableCell>
                                                            <TableCell sx={{ py: 1.8, display: 'flex', justifyContent: 'space-between' }}>
                                                                <Button disableRipple sx={{ '&:hover': { backgroundColor: 'transparent' } }} onClick={(e) => { e.stopPropagation(); handleOpenDialog(row?.personal_details?.id, row?.payment_details?.is_blocked) }}>
                                                                    {row?.payment_details?.is_blocked ? <TripOriginIcon sx={{ mr: 1, fontSize: '1.2rem', color: '#22C55D' }} /> : <PanoramaFishEyeIcon sx={{ mr: 1, fontSize: '1.2rem', color: '#EF4444' }} />}
                                                                    <Typography variant="body1" sx={{ color: row?.payment_details?.is_blocked ? '#22C55D' : '#EF4444' }}>{row?.payment_details?.is_blocked ? 'Mark UnBlock' : 'Mark Block'}</Typography>
                                                                </Button>
                                                                <Button sx={{ minWidth: 'fit-content', p: 1, '&:hover, &:active, &:focus': { backgroundColor: 'transparent !important' } }}>
                                                                    <MoreVertIcon sx={{ width: '1.2rem', color: '#2C6DB5', rotate: '90deg' }} />
                                                                </Button>
                                                            </TableCell>
                                                        </TableRow>
                                                    ))}
                                                </TableBody>
                                            </Table>
                                            <TablePagination rowsPerPageOptions={[10, 25, 50]} rowsPerPage={rowsPerPage} page={page} count={data?.count} onPageChange={handleChangePage} onRowsPerPageChange={handleChangeRowsPerPage} />

                                            {/* Block - UnBlock */}

                                            <Dialog open={openDialog} onClose={handleCloseDialog}>
                                                <DialogTitle textAlign='center'>
                                                    <Typography variant="h4">Are you sure?</Typography>
                                                </DialogTitle>
                                                <DialogContent>
                                                    <Typography variant="h6" display='flex' >
                                                        Are you sure you would like to {userState ? <Typography fontWeight={900} sx={{ mx: 0.5 }}> Unblock</Typography> : <Typography fontWeight={900} sx={{ mx: 0.5 }}> Block</Typography>} this account?
                                                    </Typography>
                                                </DialogContent>
                                                <DialogActions alignItems='center'>
                                                    <Grid container rowSpacing={1}>
                                                        <Grid item xs={12}>
                                                            <Grid container >
                                                                <Grid item textAlign='center' xs={1} md={3}></Grid>
                                                                <Grid item textAlign='center' xs={10} md={6}>
                                                                    <Button variant='contained' onClick={handleConfirm} sx={{ backgroundColor: '#2C6DB5', borderRadius: '50px', width: '100%', '&:hover': { backgroundColor: '#2C6DB5', } }}>
                                                                        Confirm
                                                                    </Button>
                                                                </Grid>
                                                                <Grid item textAlign='center' xs={1} md={3}></Grid>
                                                            </Grid>
                                                        </Grid>
                                                        <Grid item xs={12}>
                                                            <Grid container >
                                                                <Grid item textAlign='center' xs={1} md={3}></Grid>
                                                                <Grid item textAlign='center' xs={10} md={6}>
                                                                    <Button variant='contained' onClick={handleCloseDialog} sx={{ backgroundColor: '#929292', borderRadius: '50px', width: '100%', '&:hover': { backgroundColor: '#929292', } }}>
                                                                        Cancel
                                                                    </Button>
                                                                </Grid>
                                                                <Grid item textAlign='center' xs={1} md={3}></Grid>
                                                            </Grid>
                                                        </Grid>
                                                    </Grid>
                                                </DialogActions>
                                            </Dialog>

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
    );
}
