import PropTypes from 'prop-types';

// material-ui
import { useTheme } from '@mui/material/styles';

import { handlerDrawerOpen, useGetMenuMaster } from 'api/menu';

// project import
import DrawerHeaderStyled from './DrawerHeaderStyled';

import Logo from 'assets/images/PowerLogo.svg';
import Logo2 from 'assets/images/PowerIconSmall.svg';
import { Grid } from '@mui/material';
// ==============================|| DRAWER HEADER ||============================== //

export default function DrawerHeader({ open }) {
  const theme = useTheme();

  const { menuMaster } = useGetMenuMaster();
  const drawerOpen = menuMaster.isDashboardDrawerOpened;

  const iconBackColor = 'grey.100';
  const iconBackColorOpen = 'grey.200';

  // console.log(menuMaster, 'menuMastermenuMaster')
  // console.log(drawerOpen, 'drawerOpendrawerOpen')

  return (
    <DrawerHeaderStyled theme={theme} open={!!open} sx={{ borderBottom: '1px solid #D9D9D9', alignContent: 'center' }}>
      <Grid sx={{ display: 'flex', justifyContent: 'center', alignSelf: 'center '}}>
        {drawerOpen ? <img src={Logo} alt='Logo' /> : <img src={Logo2} alt='Logo' /> }
      </Grid>
      {/* <Logo isIcon={!open} sx={{ width: open ? 'auto' : 35, height: 35 }} /> */}
      {/* <IconButton
        disableRipple
        aria-label="open drawer"
        onClick={() => handlerDrawerOpen(!drawerOpen)}
        edge="start"
        color="secondary"
        variant="light"
        sx={{ color: 'text.primary', bgcolor: drawerOpen ? iconBackColorOpen : iconBackColor, 
        position: 'absolute', right:'-12px', zIndex: 1000000 }}
      >
        <UnfoldLessIcon sx={{ rotate: '90deg' }} />
        {!drawerOpen ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </IconButton> */}
    </DrawerHeaderStyled>
  );
}

DrawerHeader.propTypes = { open: PropTypes.bool };
