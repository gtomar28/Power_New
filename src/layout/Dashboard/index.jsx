
import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';

// material-ui
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import UnfoldLessIcon from '@mui/icons-material/UnfoldLess';

// project import
import Drawer from './Drawer';
import navigation from 'menu-items';
import Loader from 'components/Loader';
import Breadcrumbs from 'components/@extended/Breadcrumbs';

import { handlerDrawerOpen, useGetMenuMaster } from 'api/menu';

export default function DashboardLayout() {
  const { menuMaster, menuMasterLoading } = useGetMenuMaster();
  const downXL = useMediaQuery((theme) => theme.breakpoints.down('xl'));
  const matchDownMD = useMediaQuery((theme) => theme.breakpoints.down('lg'));

  // const { menuMaster } = useGetMenuMaster();
  // const drawerOpen = menuMaster.isDashboardDrawerOpened;

  const iconBackColor = 'grey.100';
  const iconBackColorOpen = 'grey.200';


  useEffect(() => {
    handlerDrawerOpen(!downXL);
  }, [downXL]);

  if (menuMasterLoading) return <Loader />;

  return (
    <Box sx={{ display: 'flex', backgroundColor: ' #F6F8FC', position: 'relative', height: '100vh', overflow: 'scroll' }}>
      <Drawer sx={{
        height: '100%', overflow: 'scroll'
      }} />
      <Box component="main"
        sx={{
          // width: menuMaster?.isDashboardDrawerOpened ? '90%' : '96%',
          marginLeft: menuMaster?.isDashboardDrawerOpened ? '0%' : !matchDownMD && '6%',
          // backgroundColor:' #2a8746',
          flexGrow: 1,
          p: { xs: 2, sm: 3, md: 5 },
          transition: 'width 0.3s ease',
          height: '100%', overflow: 'scroll'
        }}>{matchDownMD &&
          <IconButton
            disableRipple
            aria-label="open drawer"
            onClick={() => handlerDrawerOpen(!menuMaster.isDashboardDrawerOpened)}
            edge="start"
            color="secondary"
            variant="light"
            sx={{
              color: 'text.primary', bgcolor: menuMaster.isDashboardDrawerOpened ? iconBackColorOpen : iconBackColor,
              position: menuMaster?.isDashboardDrawerOpened ? 'absolute':'relative', zIndex: 1000000,
              left: menuMaster?.isDashboardDrawerOpened ? '255px' : '2%',
              top: menuMaster?.isDashboardDrawerOpened ? '50px' : '0px',
              transition: 'width 0.3s ease',
              mb: 2,
              boxShadow: '0px 1px 3px #838383'
            }}
          >
            <UnfoldLessIcon sx={{ rotate: '90deg' }} />
            {/* {!menuMaster.isDashboardDrawerOpened ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />} */}
          </IconButton>
        }
        <Breadcrumbs navigation={navigation} title />
        <Outlet />
      </Box>


      {!matchDownMD &&
        <IconButton
          disableRipple
          aria-label="open drawer"
          onClick={() => handlerDrawerOpen(!menuMaster.isDashboardDrawerOpened)}
          edge="start"
          color="secondary"
          variant="light"
          sx={{
            color: 'text.primary', bgcolor: menuMaster.isDashboardDrawerOpened ? iconBackColorOpen : iconBackColor,
            position: 'absolute', zIndex: 1000000,
            left: menuMaster?.isDashboardDrawerOpened ? '254px' : '5.5%',
            top: '52px',
            transition: 'width 0.3s ease',
            boxShadow: '0px 1px 3px #838383'
          }}
        >
          <UnfoldLessIcon sx={{ rotate: '90deg' }} />
          {/* {!menuMaster.isDashboardDrawerOpened ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />} */}
        </IconButton>
      }
    </Box>
  );
}





















// import { useEffect, useState } from 'react';
// import { Outlet } from 'react-router-dom';
// import useMediaQuery from '@mui/material/useMediaQuery';
// import Box from '@mui/material/Box';
// import Drawer from './Drawer';
// import navigation from 'menu-items';
// import Loader from 'components/Loader';
// import Breadcrumbs from 'components/@extended/Breadcrumbs';
// import { handlerDrawerOpen, useGetMenuMaster } from 'api/menu';

// export default function DashboardLayout() {
//   const { menuMasterLoading } = useGetMenuMaster();
//   const downXL = useMediaQuery((theme) => theme.breakpoints.down('xl'));
//   const [drawerOpen, setDrawerOpen] = useState(false);

//   useEffect(() => {
//     setDrawerOpen(menuMasterLoading.isDashboardDrawerOpened);
//     console.log('drawer open mine useeffect ', drawerOpen)
//   }, [menuMasterLoading.isDashboardDrawerOpened]);

//   useEffect(() => {
//     const shouldOpen = !downXL;
//     setDrawerOpen(shouldOpen);
//     handlerDrawerOpen(shouldOpen);
//   }, [downXL]);

//   useEffect(() => {
//     console.log('drawerOpenVal in dashboard:', drawerOpen);
//   }, [drawerOpen]);

//   if (menuMasterLoading) return <Loader />;

//   return (
//     <Box sx={{ display: 'flex', width: '100%' }}>
//       <Drawer />
//       <Box
//         key={drawerOpen ? 'drawer-open' : 'drawer-closed'}
//         component="main"
//         sx={{
//           width: drawerOpen ? 'calc(100% - 260px)' : 'calc(100% - 160px)',
//           flexGrow: 1,
//           p: { xs: 2, sm: 3 },
//           transition: 'width 0.3s ease',
//         }}
//       >
//         <Breadcrumbs navigation={navigation} title />
//         <Outlet />
//       </Box>
//     </Box>
//   );
// }

















