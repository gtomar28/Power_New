import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeleteIcon from '@mui/icons-material/Delete';
import DownloadIcon from '@mui/icons-material/Download';
import { Card } from '@mui/material';
import { FileSearchOutlined } from '@ant-design/icons';

export default function SavedReportsData({ data }) {

    const [downloadSuccess, setDownloadSuccess] = React.useState(false);

    const handleIconClick = () => {
        const pdfUrl = "https://example.com/your-document.pdf";
        window.open(pdfUrl, "_blank");
    };

    return (
        <>
            <TableContainer component={Paper} sx={{ borderRadius: '10px' }}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
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
                        {data.map((row) => (
                            <TableRow key={row?.id} sx={{ backgroundColor: row?.id % 2 === 0 ? '#fff' : '#F2F6FC' }}>
                                <TableCell sx={{ py: 1.8 }}>{row?.reportName}</TableCell>
                                <TableCell sx={{ py: 1.8, color: '#797B7E' }}>{row?.reportType}</TableCell>
                                <TableCell sx={{ py: 1.8, color: '#797B7E' }}>{row?.amount}</TableCell>
                                <TableCell sx={{ py: 1.8, color: '#797B7E' }}>{row?.accounts}</TableCell>
                                <TableCell sx={{ py: 1.8, color: '#797B7E' }}>{row?.created}</TableCell>
                                <TableCell align='center' sx={{ py: 1.8 }}><FileSearchOutlined style={{ fontSize: '22px', color: '#2C6DB5', borderBottom: '3px solid #2C6DB5' }} onClick={handleIconClick} /></TableCell>
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
                                    >
                                        <DownloadIcon
                                            sx={{ color: '#fff', cursor: 'pointer' }}
                                        />
                                    </Card>
                                </TableCell>

                                <TableCell align='center' sx={{ py: 1.8 }}><DeleteIcon sx={{ color: '#DC2625' }} /></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            {/* UTR Slip */}
            {/* <Dialog
                onClose={() => setDownloadSuccess(false)}
                aria-labelledby="customized-dialog-title"
                open={downloadSuccess}
                maxWidth="xs"
                fullWidth
                sx={{
                    '& .MuiDialog-paper': {
                        borderRadius: '24px 24px 24px 24px',
                    },
                }}
            >
                <DialogTitle sx={{ m: 1.2, mb: 0, p: 2, backgroundColor: '#F2F6FC', borderRadius: '24px 24px 0px 0px', display: 'flex', flexDirection: 'column' }} id="customized-dialog-title">
                    <Typography sx={{ textAlign: 'center' }}> Payment Reciept </Typography>
                </DialogTitle>
                <IconButton
                    aria-label="close"
                    onClick={() => setDownloadSuccess(false)}
                    sx={(theme) => ({
                        position: 'absolute',
                        right: 18,
                        top: 18,
                        color: '#797B7E',
                    })}
                >
                    <CloseIcon />
                </IconButton>
                <DialogContent sx={{ m: 1.2, mt: 0, mb: 0, p: 0, borderTop: '1px solid #EDEDED', display: 'flex', flexDirection: 'column' }}>
                    <Grid
                        container
                        spacing={2}
                        sx={{
                            borderTop: '1px dashed #ddd',
                            borderBottom: '1px dashed #ddd',
                            borderRadius: '8px',
                            mt: 2, p: 5,
                            backgroundColor: '#F2F6FC',
                        }}
                    >
                    </Grid>
                </DialogContent>
                <DialogActions sx={{ m: 2, display: 'flex', justifyContent: 'center' }}>
                    <Button disableRipple sx={{
                        minWidth: 'fit-content', textTransform: 'none', borderRadius: '32px', px: 6, mx: 0.5, py: 1, fontSize: '14px', fontWeight: 500,
                        backgroundColor: '#2C6DB5', color: '#fff', boxShadow: 'none', border: 'none', outline: 'none',
                        '&:hover, &:active, &:focus': { backgroundColor: '#2C6DB5', color: '#fff', boxShadow: 'none', }, '&:focus-visible': { outline: 'none', boxShadow: 'none' }, '&.MuiOutlinedInput - notchedOutline': { borderColor: 'transparent', }, '&.Mui-focused .MuiOutlinedInput-notchedOutline': { borderColor: 'transparent', },
                    }}>
                        Close
                    </Button>
                </DialogActions>
            </Dialog> */}
        </>
    );
}

