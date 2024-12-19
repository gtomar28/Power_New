import { Button, Tab, CircularProgress, TablePagination, Dialog, DialogTitle, DialogContent } from '@mui/material';
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
import { Downloadreport, deleteSavedReports, getAllSavedReports, ShowReport } from 'api/api';
import { OutlinedInput, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import Notification from 'layout/Dashboard/Header/HeaderContent/Notification';
import { useDialog } from 'components/Dialogs/DialogProvider';
import { FileSearchOutlined } from '@ant-design/icons';
import { Card } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import DeleteIcon from '@mui/icons-material/Delete';
import SavedReportsData from 'components/cards/statistics/SavedReportsData';
import HashLoader from 'components/HashLoader';
import { toast } from 'react-hot-toast';
import React, { useState, useEffect } from 'react';

export default function AccountsDefault() {

    const { openDialog } = useDialog();
    const [showLoader, setShowLoader] = useState(false);
    const [open, setOpen] = useState(false);
    const [ViewReport, setViewReport] = useState('');
    const [fileUrl, setFileUrl] = useState("");


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

    const userLocalData = JSON.parse(localStorage.getItem('assigned_data'));

    const rows = data;


    React.useEffect(() => {
        getUsers();
    }, [page, searchVal, roleVal, statusVal, onData]);

    const getUsers = async () => {
        setShowLoader(true);
        try {
            const response = await getAllSavedReports();
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

    const handleDeleteReport = async (id) => {
        setShowLoader(true);
        try {
            const response = await deleteSavedReports(id);
            if (response?.status === 200) {
                toast.success('Report Deleted Successfully');
                setShowLoader(false);
                getUsers();
            }
            else {
                toast.error(response?.error);
            }
        }
        catch (error) {
            console.error('Error during login:', error);
        }
    }

    const ViewImage = async (id) => {
        setShowLoader(true);
        try {
            const response = await ShowReport(id);
            console.log(response, "Report View");
            if (response?.status === 200) {
                setViewReport(response?.data?.excel); // Assume this is base64
                handleOpen();
            } else {
                console.error('Failed to fetch data', response);
            }
        } catch (err) {
            console.error('Error fetching users:', err);
        } finally {
            setShowLoader(false);
        }
    };

    const handleOpen = () => {
        // Convert Base64 to Blob URL
        const blob = new Blob([Uint8Array.from(atob(ViewReport), (c) => c.charCodeAt(0))], {
            type: "application/pdf", // Update MIME type accordingly
        });
        const url = URL.createObjectURL(blob);
        setFileUrl(url);
        console.log(url, "Generated Blob URL");
        setOpen(true);
    };

    // Function to handle closing the modal
    const handleClose = () => {
        setOpen(false);
        URL.revokeObjectURL(fileUrl); // Clean up Blob URL
        setFileUrl("");
    };

    const handleDownloadAndShow = async (id) => {
        setShowLoader(true);
        try {
            const response = await Downloadreport(id);
            console.log(response, "HelloRepose")
            setShowLoader(false);

            const excel = response?.data?.excel;
            console.log(excel, "value");

            const byteCharacters = atob(excel);
            const byteNumbers = new Array(byteCharacters.length).fill().map((_, i) => byteCharacters.charCodeAt(i));
            const byteArray = new Uint8Array(byteNumbers);
            const blob = new Blob([byteArray], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });

            const blobUrl = URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = blobUrl;
            link.download = 'Report.xlsx';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);

            const fileReader = new FileReader();
            fileReader.onload = (e) => {
                const arrayBuffer = e.target.result;
                const workbook = XLSX.read(arrayBuffer, { type: 'array' });
                const sheetName = workbook.SheetNames[0];
                const worksheet = workbook.Sheets[sheetName];
                const jsonData = XLSX.utils.sheet_to_json(worksheet);
                setData(jsonData);
            };
            fileReader.readAsArrayBuffer(blob);
        } catch (error) {
            console.error('Error fetching report:', error);
        }
    };



    const handleIconClick = () => {
        const pdfUrl = "https://example.com/your-document.pdf";
        window.open(pdfUrl, "_blank");
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
                            <Typography variant="h2">Welcome to Saved Reports</Typography>
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
                                        {rows && rows.length > 0 ?
                                            <TableContainer component={Paper} sx={{ borderRadius: '10px' }}>
                                                <Table aria-label="simple table">
                                                    <TableHead>
                                                        <TableRow>
                                                            <TableCell sx={{ py: 2.5 }}>Report Name</TableCell>
                                                            <TableCell sx={{ py: 2.5 }}>Report Type</TableCell>
                                                            <TableCell sx={{ py: 2.5 }}>Amount</TableCell>
                                                            <TableCell sx={{ py: 2.5 }}>Accounts</TableCell>
                                                            <TableCell sx={{ py: 2.5 }}>Created</TableCell>
                                                            <TableCell align='center' sx={{ py: 2.5 }}>View</TableCell>
                                                            <TableCell align='center' sx={{ py: 2.5 }}>Download</TableCell>
                                                            <TableCell align='center' sx={{ py: 2.5 }}>Delete</TableCell>
                                                        </TableRow>
                                                    </TableHead>
                                                    <TableBody>
                                                        {data.map((row, index) => (
                                                            <TableRow key={row?.id} sx={{ backgroundColor: index % 2 !== 0 ? '#fff' : '#F2F6FC' }}>
                                                                <TableCell sx={{ py: 1.8 }}>{row?.report_name}</TableCell>
                                                                <TableCell sx={{ py: 1.8, color: '#797B7E' }}>{row?.report_type}</TableCell>
                                                                <TableCell sx={{ py: 1.8, color: '#797B7E' }}>{row?.amount}</TableCell>
                                                                <TableCell sx={{ py: 1.8, color: '#797B7E' }}>
                                                                    {row?.accounts_names?.join(', ')}
                                                                </TableCell>
                                                                <TableCell sx={{ py: 1.8, color: '#797B7E' }}>{row?.created_at.split('T')[0]}</TableCell>
                                                                <TableCell align='center' sx={{ py: 1.8 }}><FileSearchOutlined style={{ fontSize: '22px', color: '#2C6DB5', borderBottom: '3px solid #2C6DB5' }} onClick={() => ViewImage(row?.id)} /></TableCell>
                                                                <TableCell sx={{ display: 'flex', justifyContent: 'center', py: 1.8 }}>
                                                                    <Card
                                                                        sx={{
                                                                            p: 0.3,
                                                                            px: 0.5,
                                                                            borderRadius: 1,
                                                                            width: 'fit-content',
                                                                            display: 'flex',
                                                                            justifyContent: 'center',
                                                                            alignItems: 'center',
                                                                            backgroundColor: '#2C6DB5',
                                                                        }}
                                                                        onClick={() => handleDownloadAndShow(row?.id)}
                                                                    >
                                                                        <DownloadIcon
                                                                            sx={{ color: '#fff', cursor: 'pointer' }}
                                                                        />
                                                                    </Card>
                                                                </TableCell>
                                                                <TableCell align='center' sx={{ py: 1.8 }}><DeleteIcon sx={{ color: '#DC2625' }} onClick={() => handleDeleteReport(row?.id)} /></TableCell>
                                                            </TableRow>
                                                        ))}
                                                    </TableBody>
                                                </Table>
                                                <TablePagination rowsPerPageOptions={[10, 25, 50]} rowsPerPage={rowsPerPage} page={page} count={data?.length} onPageChange={handleChangePage} onRowsPerPageChange={handleChangeRowsPerPage} />
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

            // Render Modal
            <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
                <DialogTitle>File Preview</DialogTitle>
                <DialogContent>
                    {fileUrl ? (
                        <iframe
                            src={fileUrl}
                            title="File Preview"
                            width="100%"
                            height="600px"
                            style={{ border: "none" }}
                        />
                    ) : (
                        <CircularProgress />
                    )}
                </DialogContent>
            </Dialog>
        </>
    );
}



