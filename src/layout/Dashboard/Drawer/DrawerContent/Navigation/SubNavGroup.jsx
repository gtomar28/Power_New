import PropTypes from 'prop-types';
import React, { forwardRef, useState } from 'react';
import { Link, useLocation, matchPath } from 'react-router-dom';

// material-ui
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import Typography from '@mui/material/Typography';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';

// project import
import NavItem from './NavItem';
import { useGetMenuMaster } from 'api/menu';

export default function SubNavGroup({ item, level }) {
  const theme = useTheme();
  const { menuMaster } = useGetMenuMaster();
  const drawerOpen = menuMaster?.isDashboardDrawerOpened;

  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);

  const isSelected = item.url
    ? pathname === item.url 
    : false;

  const textColor = 'text.primary';
  const iconSelectedColor = 'primary.main';

  const navCollapse = item.children?.map((menuItemm, index) => (
    <NavItem key={`${menuItemm.id}-${index}`} item={menuItemm} level={level + 1} />
  ));

  let listItemProps = {};
  if (item.url) {
    listItemProps = item.external
      ? { component: 'a', href: item.url, target: item.target || '_self' }
      : { component: forwardRef((props, ref) => <Link ref={ref} {...props} to={item.url} target={item.target || '_self'} />) };
  }

  const Icon = item.icon;
  const itemIcon = item.icon ? (
    <Icon style={{ fontSize: drawerOpen ? theme.typography.pxToRem(16) : theme.typography.pxToRem(20) }} />
  ) : null;

  return (
    <List component="div" disablePadding sx={{ p: 0 }}>
      <ListItemButton
        onClick={() => setOpen(!open)}
        {...listItemProps}
        selected={isSelected}
        sx={{
          display: 'flex',
          justifyContent: drawerOpen ? 'flex-start' : 'center', // Align text when open, center icon when closed
          alignItems: 'center',
          pl: drawerOpen ? `${level * 28}px` : 0, // Adjust padding when drawer is open
          // pr: drawerOpen ? `${level * 24}px` : 0, // Adjust padding when drawer is open
          py: 1, // Padding vertically
          zIndex: 1201,
          color: open || isSelected ? iconSelectedColor : textColor,
          '&:hover': {
            bgcolor: 'primary.lighter',
          },
          '&.Mui-selected': {
            bgcolor: 'primary.lighter',
            borderRight: `2px solid ${theme.palette.primary.main}`,
            color: iconSelectedColor,
          },
        }}
      >
        {/* Render icon */}
        <ListItemIcon
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minWidth: drawerOpen ? 0 : 0, // Reserve space for icon alignment
            color: isSelected ? iconSelectedColor : textColor,
          }}
        >
          {itemIcon}
        </ListItemIcon>

        {/* Render text only when drawer is open */}
        {drawerOpen && (
          <ListItemText
            primary={
              <Typography
                variant="body1"
                sx={{
                  color: isSelected ? iconSelectedColor : textColor,
                  fontWeight: isSelected ? 600 : 400,
                }}
              >
                {item.title}
              </Typography>
            }
            sx={{ ml: 1 }} // Add a little space between icon and text
          />
        )}
      </ListItemButton>


      {item.children && (
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {navCollapse}
          </List>
        </Collapse>
      )}
    </List>
  );
}

SubNavGroup.propTypes = {
  item: PropTypes.shape({
    url: PropTypes.string,
    icon: PropTypes.elementType,
    title: PropTypes.string.isRequired,
    children: PropTypes.array,
    external: PropTypes.bool,
    target: PropTypes.string,
    disabled: PropTypes.bool,
  }).isRequired,
  level: PropTypes.number.isRequired
};

























// Corrected by chat gpt

// import PropTypes from 'prop-types';
// import React, { forwardRef, useState } from 'react';
// import { Link, useLocation, matchPath } from 'react-router-dom';

// // material-ui
// import List from '@mui/material/List';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
// import Collapse from '@mui/material/Collapse';
// import Typography from '@mui/material/Typography';
// import { ExpandLess, ExpandMore } from '@mui/icons-material';
// import { useTheme } from '@mui/material/styles';

// // project import
// import NavItem from './NavItem';
// import { useGetMenuMaster } from 'api/menu';

// export default function SubNavGroup({ item, level }) {
//   const theme = useTheme();
//   const { menuMaster } = useGetMenuMaster();
//   const drawerOpen = menuMaster?.isDashboardDrawerOpened;

//   const { pathname } = useLocation();
//   const [open, setOpen] = useState(false);

//   // Corrected `matchPath` logic for selected state
//   const isSelected = item.url ? !!matchPath({ path: item.url, end: false }, pathname) : false;

//   const textColor = 'text.primary';
//   const iconSelectedColor = 'primary.main';

//   const navCollapse = item.children?.map((menuItemm, index) => (
//     <NavItem key={`${menuItemm.id}-${index}`} item={menuItemm} level={level + 1} />
//   ));

//   let listItemProps = {};
//   if (item.url) {
//     listItemProps = item.external
//       ? { component: 'a', href: item.url, target: item.target || '_self' }
//       : { component: forwardRef((props, ref) => <Link ref={ref} {...props} to={item.url} target={item.target || '_self'} />) };
//   }

//   const Icon = item.icon;
//   const itemIcon = item.icon ? (
//     <Icon style={{ fontSize: drawerOpen ? theme.typography.pxToRem(16) : theme.typography.pxToRem(20) }} />
//   ) : null;

//   return (
//     <List component="div" disablePadding sx={{ p: 0 }}>
//       <ListItemButton
//         onClick={() => setOpen(!open)}
//         {...listItemProps}
//         disabled={item.disabled}
//         selected={isSelected}
//         sx={{
//           zIndex: 1201,
//           pl: drawerOpen ? `${level * 28}px` : 1.5,
//           py: !drawerOpen && level === 1 ? 1.25 : 1,
//           color: open || isSelected ? iconSelectedColor : textColor,
//           ...(drawerOpen && {
//             '&:hover': {
//               bgcolor: 'primary.lighter',
//             },
//             '&.Mui-selected': {
//               bgcolor: 'primary.lighter',
//               borderRight: `2px solid ${theme.palette.primary.main}`,
//               color: iconSelectedColor,
//             },
//           }),
//         }}
//       >
//         {itemIcon && (
//           <ListItemIcon sx={{ minWidth: 28, color: isSelected ? iconSelectedColor : textColor }}>
//             {itemIcon}
//           </ListItemIcon>
//         )}
//         <ListItemText
//           primary={
//             <Typography
//               variant="body1"
//               sx={{
//                 color: isSelected ? iconSelectedColor : textColor,
//                 fontWeight: isSelected ? 600 : 400,
//               }}
//             >
//               {item.title}
//             </Typography>
//           }
//         />
//         {item.children && (open ? <ExpandLess /> : <ExpandMore />)}
//       </ListItemButton>

//       {item.children && (
//         <Collapse in={open} timeout="auto" unmountOnExit>
//           <List component="div" disablePadding>
//             {navCollapse}
//           </List>
//         </Collapse>
//       )}
//     </List>
//   );
// }

// SubNavGroup.propTypes = {
//   item: PropTypes.shape({
//     url: PropTypes.string,
//     icon: PropTypes.elementType,
//     title: PropTypes.string.isRequired,
//     children: PropTypes.array,
//     external: PropTypes.bool,
//     target: PropTypes.string,
//     disabled: PropTypes.bool,
//   }).isRequired,
//   level: PropTypes.number.isRequired
// };






















// Corrected on 8th dec

// import PropTypes from 'prop-types';
// import React, { forwardRef } from 'react';
// import { Link, useLocation, matchPath } from 'react-router-dom';

// // material-ui
// import List from '@mui/material/List';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
// import Collapse from '@mui/material/Collapse';
// import Typography from '@mui/material/Typography';
// import { ExpandLess, ExpandMore } from '@mui/icons-material';
// import { useTheme } from '@mui/material/styles';

// // project import
// import NavItem from './NavItem';
// import { useGetMenuMaster } from 'api/menu';

// export default function SubNavGroup({ item, level }) {
//   const theme = useTheme();
//   const { pathname } = useLocation();
//   const [open, setOpen] = React.useState(false);
//   const drawerOpen = useGetMenuMaster.isDashboardDrawerOpened;

//   const isSelected = item.url ? !!matchPath({ path: item.url, end: false }, pathname) : false;

//   const textColor = 'text.primary';
//   const iconSelectedColor = 'primary.main';
//   // console.log(item, 'item')
//   const navCollapse = item.children?.map((menuItemm, index) => {
//     switch (menuItemm.type) {
//       case 'item':
//         return <NavItem key={`${menuItemm.id}-${index}`} item={menuItemm} level={1} />;
//       default:
//         return (
//           <Typography key={`default-${index}`} variant="h6" color="error" align="center">
//             Fix - Sub Group Collapse
//           </Typography>
//         );
//     }
//   });

//   let itemTarget = '_self';
//   if (item.target) {
//     itemTarget = '_blank';
//   }
//   let listItemProps = {};
//   if (item.url) {
//     if (item.external) {
//       listItemProps = { component: 'a', href: item.url, target: item.target || '_self' };
//     } else {
//       listItemProps = { component: forwardRef((props, ref) => <Link ref={ref} {...props} to={item.url} target={item.target || '_self'} />) };
//     }
//   }

//   const Icon = item.icon;
//   const itemIcon = item.icon ? <Icon style={{ fontSize: drawerOpen ? '1rem' : '1.25rem' }} /> : false;

//   return (
//     <List component="div" disablePadding sx={{ p: 0 }}>
//       <ListItemButton onClick={() => setOpen(!open)} {...listItemProps} disabled={item.disabled} selected={isSelected} sx={{ zIndex: 1201, pl: drawerOpen ? `${level * 28}px` : 1.5, py: !drawerOpen && level === 1 ? 1.25 : 1, color: open ? iconSelectedColor : isSelected ? iconSelectedColor : textColor, ...(drawerOpen && { '&:hover': { bgcolor: 'primary.lighter', }, '&.Mui-selected': { bgcolor: 'primary.lighter', borderRight: `2px solid ${theme.palette.primary.main}`, color: iconSelectedColor, '&:hover': { color: iconSelectedColor, bgcolor: 'primary.lighter', }, }, }), ...(!drawerOpen && { '&:hover': { bgcolor: 'transparent', }, '&.Mui-selected': { '&:hover': { bgcolor: 'transparent', }, bgcolor: 'transparent', }, }), }} >
//         {itemIcon && (
//           <ListItemIcon sx={{ minWidth: 28, color: isSelected ? iconSelectedColor : textColor, ...(!drawerOpen && { borderRadius: 1.5, width: 36, height: 36, alignItems: 'center', justifyContent: 'center', '&:hover': { bgcolor: 'secondary.lighter', }, }), ...(!drawerOpen && isSelected && { bgcolor: 'primary.lighter', '&:hover': { bgcolor: 'primary.lighter', }, }), }} >
//             {itemIcon}
//           </ListItemIcon>
//         )}
//         <ListItemText
//             primary={
//               <Typography
//                 variant="body1"
//                 sx={{
//                   color: isSelected ? iconSelectedColor : textColor,
//                   fontWeight: isSelected ? 600 : 400,
//                   whiteSpace: 'nowrap',
//                   overflow: 'hidden',
//                   textOverflow: 'ellipsis',
//                 }}
//               >
//                 {item.title}
//               </Typography>
//             }
//           />
//         {item.children && (open ? <ExpandLess /> : <ExpandMore />)}
//         {/* {drawerOpen && item.children && (open ? <ExpandLess /> : <ExpandMore />)} */}
//       </ListItemButton>

//       {/* Dropdown/Collapse Content */}
//       {item.children && (
//         <Collapse in={open} timeout="auto" unmountOnExit>
//           <List component="div" disablePadding>
//             {navCollapse}
//           </List>
//         </Collapse>
//       )}
//     </List>

//   );

// }

// SubNavGroup.propTypes = {
//   item: PropTypes.object.isRequired,
// };














// 27th Nov 2024 working code 

// import PropTypes from 'prop-types';
// import React from 'react';
// import { Link, useLocation, matchPath } from 'react-router-dom';

// // material-ui
// import List from '@mui/material/List';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
// import Collapse from '@mui/material/Collapse';
// import Typography from '@mui/material/Typography';
// import { ExpandLess, ExpandMore } from '@mui/icons-material';
// import { useTheme } from '@mui/material/styles';

// // project import
// import NavItem from './NavItem';
// import { useGetMenuMaster } from 'api/menu';

// export default function SubNavGroup({ item, level }) {
//   const theme = useTheme();
//   const { pathname } = useLocation();
//   const [open, setOpen] = React.useState(false);
//   const drawerOpen = useGetMenuMaster.isDashboardDrawerOpened;


//   const handleClick = () => {
//     setOpen(!open);
//   };

//   const isSelected = item.url ? !!matchPath({ path: item.url, end: false }, pathname) : false;

//   const textColor = 'text.primary';
//   const iconSelectedColor = 'primary.main';
//   // console.log(item, 'item')
//   const navCollapse = item.children?.map((menuItemm, index) => {
//     switch (menuItemm.type) {
//       case 'item':
//         return <NavItem key={`${menuItemm.id}-${index}`} item={menuItemm} level={1} />;
//       default:
//         return (
//           <Typography key={`default-${index}`} variant="h6" color="error" align="center">
//             Fix - Sub Group Collapse
//           </Typography>
//         );
//     }
//   });
  

//   return (
//     <List component="div" disablePadding sx={{p:0}}>
//       <ListItemButton
//         onClick={handleClick}
//         selected={isSelected}
//         sx={{
//           p:0,
//           pl: drawerOpen ? `${level * 28}px` : 3,
//           py: !drawerOpen && level === 2 ? 2 : 1,
//           color: open ? iconSelectedColor : isSelected ? iconSelectedColor : textColor,
//           '&:hover': {
//             bgcolor: 'primary.lighter',
//           },
//           '&:focus, &.Mui-focusVisible, &:focusVisible, &:visited': {
//             bgcolor: `${theme.palette.primary.lighter} !important`,
//           },
//           ...(isSelected && {
//             bgcolor: 'primary.lighter',
//             borderRight: `2px solid ${theme.palette.primary.main}`,
//             '&:hover': {
//               bgcolor: 'primary.lighter',
//             },
//           }),
//         }}
//       >

//         <ListItemIcon sx={{ color: open ? iconSelectedColor : isSelected ? iconSelectedColor : textColor, }}>
//           {item.icon && <item.icon />}
//         </ListItemIcon>
//         <ListItemText primary={item.title} sx={{px:1}}/>
//         {open ? <ExpandLess /> : <ExpandMore />}
//       </ListItemButton>
//       <Collapse in={open} timeout="auto" unmountOnExit>
//         <List component="div" disablePadding>
//           {navCollapse}
//         </List>
//       </Collapse>
//     </List>
//   );
// }

// SubNavGroup.propTypes = {
//   item: PropTypes.object.isRequired,
// };







