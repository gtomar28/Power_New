import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MainCard from 'components/MainCard';
import { Card, Grid, Stack, Typography, Box } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useNavigate } from 'react-router';

export default function AdminCount({ title, items, onSelectFirstAdmin, onSelectSecondAdmin }) {

    const navigate = useNavigate()
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [anchorElSecond, setAnchorElSecond] = React.useState(null);
    const [selectedAdmin, setSelectedAdmin] = React.useState(items[0]?.username || 'Select Admin');
    const [selectedSecondAdmin, setSelectedSecondAdmin] = React.useState(items[1]?.username || 'Select Admin');

    const open = Boolean(anchorEl);
    const openSecond = Boolean(anchorElSecond);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleClickSecond = (event) => {
        setAnchorElSecond(event.currentTarget);
    };
    const handleCloseSecond = () => {
        setAnchorElSecond(null);
    };

    const handleSelectAdmin = (username, id) => {
        setSelectedAdmin(username);
        onSelectFirstAdmin(id);
        handleClose();
    };

    const handleSelectSecondAdmin = (username, id) => {
        setSelectedSecondAdmin(username);
        onSelectSecondAdmin(id);
        handleCloseSecond();
    };

    return (
        <MainCard contentSX={{ p: 2 }}>
            <Typography variant="h6" sx={{ fontWeight: 900, color: '#676767' }}>
                {title}
            </Typography>

            {/* First Admin Dropdown */}
            <Grid id="basic-button" aria-controls={open ? 'basic-menu' : undefined} aria-haspopup="true" aria-expanded={open ? 'true' : undefined} onClick={handleClick}
                sx={{ width: '100%', backgroundColor: '#F2F6FC', borderRadius: '8px', p: 1, my: 2 }}
            >
                <Stack direction="row" sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography variant="h6" sx={{ fontWeight: 900, color: '#676767' }}>
                        {selectedAdmin}
                    </Typography>
                    <Card sx={{ backgroundColor: '#DAE5F2', boxShadow: 'none', borderRadius: '6px', display: 'flex', justifyContent: 'center', alignItems: 'center', p: 0.4 }}>
                        <KeyboardArrowDownIcon />
                    </Card>
                </Stack>
            </Grid>
            <Menu id="basic-menu" anchorEl={anchorEl} open={open} onClose={handleClose} MenuListProps={{ 'aria-labelledby': 'basic-button', }} sx={{ '& .MuiPaper-root': { boxShadow: '0px 3px 3px rgba(159, 159, 159, 0.15)', width: '35%', }, width: '100%', }} >
                {items.map((item, index) => (
                    <MenuItem key={index} onClick={() => handleSelectAdmin(item.username, item?.id)}>
                        {item.username}
                    </MenuItem>
                ))}
            </Menu>

            {/* Second Admin Dropdown */}
            <Grid id="second-button" aria-controls={openSecond ? 'second-menu' : undefined} aria-haspopup="true" aria-expanded={openSecond ? 'true' : undefined} onClick={handleClickSecond}
                sx={{ width: '100%', backgroundColor: '#F2F6FC', borderRadius: '8px', p: 1, my: 2 }}
            >
                <Stack direction="row" sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography variant="h6" sx={{ fontWeight: 900, color: '#676767' }}>
                        {selectedSecondAdmin}
                    </Typography>
                    <Card sx={{ backgroundColor: '#DAE5F2', boxShadow: 'none', borderRadius: '6px', display: 'flex', justifyContent: 'center', alignItems: 'center', p: 0.4 }}>
                        <KeyboardArrowDownIcon />
                    </Card>
                </Stack>
            </Grid>
            <Menu id="second-menu" anchorEl={anchorElSecond} open={openSecond} onClose={handleCloseSecond} MenuListProps={{ 'aria-labelledby': 'second-button', }} sx={{ '& .MuiPaper-root': { boxShadow: '0px 3px 3px rgba(159, 159, 159, 0.15)', width: '35%', }, width: '100%', }} >
                {items.map((item, index) => (
                    <MenuItem key={index} onClick={() => handleSelectSecondAdmin(item.username, item?.id)}>
                        {item.username}
                    </MenuItem>
                ))}
            </Menu>

            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <Button variant='contained' onClick={() => navigate('/createUser')} sx={{ backgroundColor: '#2C6DB5', borderRadius: '34px', px: 4 }}>Create User</Button>
            </Box>
        </MainCard>
    );
}
