
// material-ui
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

const DrawerHeaderStyled = styled(Box, { shouldForwardProp: (prop) => prop !== 'open' })(({ theme, open }) => ({
  ...theme.mixins.toolbar,
  // display: 'flex',
  // alignItems: 'center',
  // paddingLeft: '33px',
  position: 'relative'
  // justifyContent: open ? 'flex-start' : 'center',
  // paddingLeft: theme.spacing(open ? 3 : 0)
}));

export default DrawerHeaderStyled;














// // material-ui
// import { styled } from '@mui/material/styles';
// import Box from '@mui/material/Box';

// const DrawerHeaderStyled = styled(Box, { shouldForwardProp: (prop) => prop !== 'open' })(({ theme, open }) => ({
//   ...theme.mixins.toolbar,

//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'center',
//   position: 'absolute',
//   right: '-12px',
//   transform: 'translate(50%)',
//   zIndex: 1500,


//   // display: 'flex',
//   // alignItems: 'center',
//   // position : 'absolute',
//   // right: -12,
//   // zIndex:1000

//   // paddingLeft: '33px',
//   // justifyContent: open ? 'flex-start' : 'center',
//   // paddingLeft: theme.spacing(open ? 3 : 0)
// }));

// export default DrawerHeaderStyled;











// // material-ui
// import { styled } from '@mui/material/styles';
// import Box from '@mui/material/Box';

// const DrawerHeaderStyled = styled(Box, { shouldForwardProp: (prop) => prop !== 'open' })(({ theme, open }) => ({
//   ...theme.mixins.toolbar,
//   display: 'flex',
//   alignItems: 'center',
//   paddingLeft: '33px',
//   position: 'relative'
//   // justifyContent: open ? 'flex-start' : 'center',
//   // paddingLeft: theme.spacing(open ? 3 : 0)
// }));

// export default DrawerHeaderStyled;
