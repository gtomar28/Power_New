
import { useRef, useState } from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Avatar from '@mui/material/Avatar';
import Badge from '@mui/material/Badge';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import ListItemSecondaryAction from '@mui/material/ListItemSecondaryAction';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import bellNotification from 'assets/images/bellNotification.svg';

// project import
import MainCard from 'components/MainCard';
import Transitions from 'components/@extended/Transitions';

// assets
import BellOutlined from '@ant-design/icons/BellOutlined';
import CheckCircleOutlined from '@ant-design/icons/CheckCircleOutlined';
import GiftOutlined from '@ant-design/icons/GiftOutlined';
import MessageOutlined from '@ant-design/icons/MessageOutlined';
import SettingOutlined from '@ant-design/icons/SettingOutlined';

// sx styles
const avatarSX = {
  width: 36,
  height: 36,
  fontSize: '1rem'
};

const actionSX = {
  mt: '6px',
  ml: 1,
  top: 'auto',
  right: 'auto',
  alignSelf: 'flex-start',

  transform: 'none'
};

// ==============================|| HEADER CONTENT - NOTIFICATION ||============================== //

export default function Notification() {
  const theme = useTheme();
  const matchesXs = useMediaQuery(theme.breakpoints.down('md'));

  const anchorRef = useRef(null);
  const [read, setRead] = useState(2);
  const [open, setOpen] = useState(false);
  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpen(false);
  };

  const iconBackColorOpen = 'grey.100';

  return (
    <Box sx={{ flexShrink: 0, ml: 0.75 }}>
      <IconButton
        color="secondary"
        variant="light"
        sx={{ color: 'text.primary', bgcolor: open ? iconBackColorOpen : 'transparent' }}
        aria-label="open profile"
        ref={anchorRef}
        aria-controls={open ? 'profile-grow' : undefined}
        aria-haspopup="true"
        onClick={handleToggle}
      >
        <img src={bellNotification} alt="bellNotification" />
      </IconButton>
      <Popper
        placement={matchesXs ? 'bottom-start' : 'bottom-start'}
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
        modifiers={[
          {
            name: 'offset',
            options: {
              offset: [0, 10], // Adjust as needed
            },
          },
        ]}
        style={{
          zIndex: 1500, // Ensure it appears above other elements
        }}
      >
        {({ TransitionProps }) => (
          <Transitions type="grow" position={matchesXs ? 'top' : 'top-right'} in={open} {...TransitionProps}>
            <Paper sx={{ boxShadow: theme.customShadows.z1, width: '100%', minWidth: 400, maxWidth: { xs: 400, md: 600 } }}>
              <ClickAwayListener onClickAway={handleClose}>
                <MainCard
                  title="All Notification"
                  elevation={0}
                  border={false}
                  content={false}
                  secondary={
                    <>
                      {read > 0 && (
                        <Tooltip title="Mark as all read">
                          <IconButton color="success" size="small" onClick={() => setRead(0)}>
                            <CheckCircleOutlined style={{ fontSize: '1.15rem' }} />
                          </IconButton>
                        </Tooltip>
                      )}
                    </>
                  }
                  sx={{
                    '& .MuiCardHeader-root': {
                      padding: '10px', // Adjust padding to 10px
                    },
                  }}
                >
                  <List
                    component="nav"
                    sx={{
                      p: 0,
                      bgcolor: '#F2F6FC',
                      color: 'text.primary',
                      borderRadius: 1,
                      boxShadow: 1,
                      '& .MuiListItemButton-root': {
                        py: 1.5,
                        px: 1.5,
                        border: '6px solid white',
                        '&:hover': {
                          bgcolor: '#e3ebf6',
                        },
                        '&.Mui-selected': {
                          bgcolor: '#e3ebf6',
                          color: 'text.primary',
                        },
                      },
                      '& .MuiTypography-h6': {
                        fontWeight: 'bold',
                      },
                      '& .MuiTypography-subtitle1': {
                        color: '#757575',
                      },
                      '& .MuiTypography-caption': {
                        fontSize: '0.75rem',
                        color: '#9e9e9e',
                      },
                    }}
                  >
                    <ListItemButton>
                      <ListItemText
                        primary={
                          <Typography variant="h6">
                            Atom requested for PayIn Limit!
                          </Typography>
                        }
                        secondary={
                          <Typography variant="subtitle1">
                            INR <b>20,000</b> payIn limit has been requested by Admin Atom.
                          </Typography>
                        }
                      />
                    </ListItemButton>
                    <ListItemButton>
                      <ListItemText
                        primary={
                          <Typography variant="h6">
                            Payment waiting for approval!
                          </Typography>
                        }
                        secondary={
                          <Typography variant="subtitle1">
                            INR <b>1,000</b> payment is declined by agent RB Payout.
                          </Typography>
                        }
                      />
                    </ListItemButton>
                    <ListItemButton>
                      <ListItemText
                        primary={
                          <Typography variant="h6">
                            PayIn limit approved for AmritaHDFC!
                          </Typography>
                        }
                        secondary={
                          <Typography variant="subtitle1">
                            INR <b>10,000</b> payment is pending approval. Please review and approve.
                          </Typography>
                        }
                      />
                    </ListItemButton>
                  </List>
                </MainCard>
              </ClickAwayListener>
            </Paper>
          </Transitions>
        )}
      </Popper>
    </Box>
  );
}
