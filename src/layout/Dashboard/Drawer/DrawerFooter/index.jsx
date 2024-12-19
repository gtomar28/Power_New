import PropTypes from 'prop-types';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Grid, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

// project import
import DrawerFooterStyled from './DrawerFooterStyled';
import profileBg from 'assets/images/profileBg.svg';
import profileImage from 'assets/images/profileImage.svg';
import { useGetMenuMaster } from 'api/menu';

const userLocalData = JSON.parse(localStorage.getItem('assigned_data'));

export default function DrawerFooter({ open }) {
  const theme = useTheme();
  const { menuMaster } = useGetMenuMaster();
  const drawerOpen = menuMaster.isDashboardDrawerOpened;

  return (
    <DrawerFooterStyled theme={theme} open={!!open} sx={{ p: 1 }}>
      <Grid component={Link} to="/profile" sx={{ color: '#fff', textDecoration: 'none', p: drawerOpen ? 2 : 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', 
      backgroundImage: `url(${profileBg})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center', width: '100%', height: 'fit-content', borderRadius: drawerOpen ? '20px' : '0px', }} >
        <img src={profileImage} alt="Logo" />
        {drawerOpen && (
          <>
            <Typography variant="h6" mt={1} sx={{ textTransform: 'uppercase' }}>
              {userLocalData?.name !== '' ? userLocalData?.name : userLocalData?.username}
            </Typography>
            <Typography variant="h6"> 
              {userLocalData?.is_superadmin ? 'Super Admin' : userLocalData?.is_admin ? 'Admin' : userLocalData?.is_creator ? 'Sub Admin' : 'Peer'}
            </Typography>
          </>
        )}
      </Grid>
    </DrawerFooterStyled>
  );
}

DrawerFooter.propTypes = { open: PropTypes.bool };















// import PropTypes from 'prop-types';

// // material-ui
// import { useTheme } from '@mui/material/styles';
// import { Grid, Typography } from '@mui/material';
// import { Link } from 'react-router-dom';

// // project import
// import DrawerFooterStyled from './DrawerFooterStyled';
// import profileBg from 'assets/images/profileBg.svg';
// import profileImage from 'assets/images/profileImage.svg';
// import { useGetMenuMaster } from 'api/menu';

// const userLocalData = JSON.parse(localStorage.getItem('assigned_data'));

// export default function DrawerFooter({ open }) {
//   const theme = useTheme();
//   const { menuMaster } = useGetMenuMaster();
//   const drawerOpen = menuMaster.isDashboardDrawerOpened;

//   return (
//     <DrawerFooterStyled theme={theme} open={!!open} sx={{ p: 1 }}>
//       <Grid
//         component={Link}
//         to="/profile"
//         sx={{
//           color: '#fff',
//           textDecoration: 'none',
//           p: drawerOpen ? 2 : 1,
//           display: 'flex',
//           flexDirection: 'column',
//           justifyContent: 'center',
//           alignItems: 'center',
//           position: 'relative',
//           backgroundImage: `url(${profileBg})`,
//           backgroundRepeat: 'no-repeat',
//           backgroundSize: 'cover',
//           backgroundPosition: 'center',
//           borderRadius: '20px',
//           width: '100%',
//           height: '150px',
//         }}
//       >
//         {/* Profile Image */}
//         <img
//           src={profileImage}
//           alt="Profile"
//           style={{
//             position: 'absolute',
//             top: '10px',
//             left: '50%',
//             transform: 'translateX(-50%)',
//             width: '60px',
//             height: '60px',
//             borderRadius: '50%',
//             objectFit: 'cover',
//           }}
//         />
//         {drawerOpen && (
//           <>
//             <Typography
//               variant="h6"
//               sx={{
//                 position: 'absolute',
//                 top: '80px',
//                 fontWeight: 'bold',
//                 color: '#fff',
//                 textAlign: 'center',
//                 textTransform: 'capitalize',
//               }}
//             >
//               {userLocalData?.name || userLocalData?.username}
//             </Typography>

//             {/* Role */}
//             <Typography
//               variant="body2"
//               sx={{
//                 position: 'absolute',
//                 top: '110px',
//                 color: '#fff',
//                 fontSize: '0.9rem',
//                 textAlign: 'center',
//               }}
//             >
//               {userLocalData?.is_superadmin
//                 ? 'Super Admin'
//                 : userLocalData?.is_admin
//                   ? 'Admin'
//                   : userLocalData?.is_creater
//                     ? 'Sub Admin'
//                     : 'Peer'}
//             </Typography>
//           </>
//         )}
//       </Grid>
//     </DrawerFooterStyled>
//   );
// }

// DrawerFooter.propTypes = { open: PropTypes.bool };



















