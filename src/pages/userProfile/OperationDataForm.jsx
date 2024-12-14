import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Grid, Typography, Button, Stack, OutlinedInput, Alert, Snackbar } from '@mui/material';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import { getAgentsById, updateAgentsById } from 'api/api';

const OperationDataForm = ({ userId }) => {

    console.log(userId)
    const token = "Token b6dd7cf6689b818350024b495ecebafe862e946b"
    const { register, handleSubmit, setValue, reset, watch } = useForm();

    const [openSnackBar, setOpenSnackBar] = useState(false);

    const [upi_id, setupi_id] = useState('');
    const [bank_name, setbank_name] = useState('');
    const [total_payin_amount, settotal_payin_amount] = useState('');
    const [bank_account_number, setbank_account_number] = useState('');
    const [payin_limit, setpayin_limit] = useState('');
    const [IFSC, setIFSC] = useState('');
    const [total_payout_amount, settotal_payout_amount] = useState('');
    const [pay_incommission, setpay_incommission] = useState('');
    const [payOutLimit, setpayOutLimit] = useState('');
    const [pay_outcommission, setpay_outcommission] = useState('');

    const [isEditable, setIsEditable] = useState(false);

    useEffect(() => {
        getUserData();
    }, [token, setValue])

    const getUserData = async () => {
        try {
            const response = await getAgentsById(userId);
            console.log(response, "User Data")
            if (response?.status === 200) {
                setValue('upi_id', response?.data?.payment_details?.upi_id);
                setupi_id(response?.data?.payment_details?.upi_id);

                setValue('bank_name', response?.data?.document_details?.bank_name);
                setbank_name(response?.data?.document_details?.bank_name);

                setValue('total_payin_amount', response?.data?.statistics?.total_payin_amount);
                settotal_payin_amount(response?.data?.statistics?.total_payin_amount);

                setValue('bank_account_number', response?.data?.document_details?.bank_account_number);
                setbank_account_number(response?.data?.document_details?.bank_account_number);

                setValue('payin_limit', response?.data?.payment_details?.payin_limit);
                setpayin_limit(response?.data?.payment_details?.payin_limit);

                setValue('IFSC', response?.data?.document_details?.IFSC);
                setIFSC(response?.data?.document_details?.IFSC);

                setValue('total_payout_amount', response?.data?.statistics?.total_payout_amount);
                settotal_payout_amount(response?.data?.statistics?.total_payout_amount);

                setValue('pay_incommission', response?.data?.payment_details?.pay_incommission);
                setpay_incommission(response?.data?.payment_details?.pay_incommission);

                setValue('payOutLimit', response?.data?.payment_details?.payout_limit);
                setpayOutLimit(response?.data?.payment_details?.payout_limit);

                setValue('pay_outcommission', response?.data?.payment_details?.pay_outcommission);
                setpay_outcommission(response?.data?.payment_details?.pay_outcommission);

            }
        } catch (err) {
            console.log(err);
        }
    };


    const onSubmit = async (data) => {
        try {
            const formData = new FormData();

            if (data.upi_id !== upi_id) formData.append('upi_id', data?.upi_id);
            if (data.bank_name !== bank_name) formData.append('bank_name', data?.bank_name);
            if (data.total_payin_amount !== total_payin_amount) formData.append('total_payin_amount', data?.total_payin_amount);
            if (data.bank_account_number !== bank_account_number) formData.append('bank_account_number', data?.bank_account_number);
            if (data.payin_limit !== payin_limit) formData.append('payin_limit', data?.payin_limit);
            if (data.IFSC !== IFSC) formData.append('IFSC', data?.IFSC);
            if (data.total_payout_amount !== total_payout_amount) formData.append('total_payout_amount', data?.total_payout_amount);
            if (data.pay_incommission !== pay_incommission) formData.append('pay_incommission', data?.pay_incommission);
            if (data.payOutLimit !== payOutLimit) formData.append('payOutLimit', data?.payOutLimit);
            if (data.pay_outcommission !== pay_outcommission) formData.append('pay_outcommission', data?.pay_outcommission);

            const response = await updateAgentsById(userId, formData);

            if (response?.status === 200) {
                console.log('Data updated successfully:', response.data);
                setOpenSnackBar(true);
            }
        } catch (error) {
            console.error('Error saving data:', error);
        }
    };



    const handleUpdateClick = () => {
        setIsEditable(true);
    };

    const handleCancelClick = () => {
        setIsEditable(false);
    };


    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Grid item xs={12} sx={{ mt: 2 }}>
                <Grid container sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography textAlign="center" variant="h5">
                        Operation Data
                    </Typography>
                    <div>
                        {!isEditable ? (
                            <Grid display='flex' alignItems='center' onClick={handleUpdateClick} sx={{ border: '1px solid #2C6DB5', borderRadius: '34px', px: 4, py: 1, color: '#2C6DB5' }} >
                                <DriveFileRenameOutlineIcon /> <Typography>Update</Typography>
                            </Grid>
                        ) : (
                            <>
                                <Button variant="outlined" type="submit" sx={{ border: '1px solid #2C6DB5', borderRadius: '34px', px: 4, color: '#2C6DB5', marginRight: 2, }} >
                                    Save
                                </Button>
                                <Button variant="outlined" onClick={handleCancelClick} sx={{ border: '1px solid #d32f2f', borderRadius: '34px', px: 4, color: '#d32f2f', }} >
                                    Cancel
                                </Button>
                            </>
                        )}
                    </div>
                </Grid>
            </Grid>
            <Grid item xs={12} alignSelf="center" sx={{ backgroundColor: '#F6F8FC', borderRadius: '15px', p: 2, mt: 2, }} >
                <Grid container rowSpacing={1.5} columnSpacing={2}>
                    <Grid item xs={12} md={6}>
                        <Stack spacing={1}>
                            <Typography sx={{ color: '#929292', fontWeight: 'bold' }}>UPI ID</Typography>
                            <OutlinedInput {...register('upi_id')} disabled={!isEditable} sx={{ mb: 2, width: '100%', backgroundColor: '#fff', borderRadius: '15px', }} />
                        </Stack>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Stack spacing={1}>
                            <Typography sx={{ color: '#929292', fontWeight: 'bold' }}>Bank Name</Typography>
                            <OutlinedInput {...register('bank_name')} disabled={!isEditable} sx={{ mb: 2, width: '100%', backgroundColor: '#fff', borderRadius: '15px', }} />
                        </Stack>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Stack spacing={1}>
                            <Typography sx={{ color: '#929292', fontWeight: 'bold' }}>PayIn</Typography>
                            <OutlinedInput {...register('total_payin_amount')} disabled={!isEditable} sx={{ mb: 2, width: '100%', backgroundColor: '#fff', borderRadius: '15px', }} />
                        </Stack>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Stack spacing={1}>
                            <Typography sx={{ color: '#929292', fontWeight: 'bold' }}>Bank Account Number</Typography>
                            <OutlinedInput {...register('bank_account_number')} disabled={!isEditable} sx={{ mb: 2, width: '100%', backgroundColor: '#fff', borderRadius: '15px', }} />
                        </Stack>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Stack spacing={1}>
                            <Typography sx={{ color: '#929292', fontWeight: 'bold' }}>PayIn Limit</Typography>
                            <OutlinedInput {...register('payin_limit')} disabled={!isEditable} sx={{ mb: 2, width: '100%', backgroundColor: '#fff', borderRadius: '15px', }} />
                        </Stack>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Stack spacing={1}>
                            <Typography sx={{ color: '#929292', fontWeight: 'bold' }}>Bank IFSC</Typography>
                            <OutlinedInput {...register('IFSC')} disabled={!isEditable} sx={{ mb: 2, width: '100%', backgroundColor: '#fff', borderRadius: '15px', }} />
                        </Stack>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Stack spacing={1}>
                            <Typography sx={{ color: '#929292', fontWeight: 'bold' }}>PayOut</Typography>
                            <OutlinedInput {...register('total_payout_amount')} disabled={!isEditable} sx={{ mb: 2, width: '100%', backgroundColor: '#fff', borderRadius: '15px', }} />
                        </Stack>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Stack spacing={1}>
                            <Typography sx={{ color: '#929292', fontWeight: 'bold' }}>PayOut Commission Percent</Typography>
                            <OutlinedInput {...register('pay_incommission')} disabled={!isEditable} sx={{ mb: 2, width: '100%', backgroundColor: '#fff', borderRadius: '15px', }} />
                        </Stack>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Stack spacing={1}>
                            <Typography sx={{ color: '#929292', fontWeight: 'bold' }}>PayOut Limit</Typography>
                            <OutlinedInput {...register('payOutLimit')} disabled={!isEditable} sx={{ mb: 2, width: '100%', backgroundColor: '#fff', borderRadius: '15px', }} />
                        </Stack>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Stack spacing={1}>
                            <Typography sx={{ color: '#929292', fontWeight: 'bold' }}>PayIn Commission Percent</Typography>
                            <OutlinedInput {...register('pay_outcommission')} disabled={!isEditable} sx={{ mb: 2, width: '100%', backgroundColor: '#fff', borderRadius: '15px', }} />
                        </Stack>
                    </Grid>
                </Grid>
            </Grid>

            <Snackbar open={openSnackBar} autoHideDuration={6000} onClose={() => setOpenSnackBar(false)}>
                <Alert
                    onClose={()=> setOpenSnackBar(false)}
                    severity="success"
                    variant="filled"
                    sx={{ width: '100%' }}
                >
                    This is a success Alert inside a Snackbar!
                </Alert>
            </Snackbar>
        </form>
    );
};

export default OperationDataForm;
