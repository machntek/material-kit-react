import {
  Box,
  Card,
  CardContent, Grid,
  Paper, Typography,
} from '@material-ui/core';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles, experimentalStyled as styled } from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch';
import FormGroup from '@material-ui/core/FormGroup';
import Stack from '@material-ui/core/Stack';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(16),
      height: theme.spacing(10),
    },
  },
}));

const AntSwitch = styled(Switch)(({ theme }) => ({
  width: 28,
  height: 16,
  padding: 0,
  display: 'flex',
  '&:active': {
    '& .MuiSwitch-thumb': {
      width: 15,
    },
    '& .MuiSwitch-switchBase.Mui-checked': {
      transform: 'translateX(9px)',
    },
  },
  '& .MuiSwitch-switchBase': {
    padding: 2,
    '&.Mui-checked': {
      transform: 'translateX(12px)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: theme.palette.mode === 'dark' ? '#177ddc' : '#1890ff',
      },
    },
  },
  '& .MuiSwitch-thumb': {
    boxShadow: '0 2px 4px 0 rgb(0 35 11 / 20%)',
    width: 12,
    height: 12,
    borderRadius: 6,
    transition: theme.transitions.create(['width'], {
      duration: 200,
    }),
  },
  '& .MuiSwitch-track': {
    borderRadius: 16 / 2,
    opacity: 1,
    backgroundColor:
      theme.palette.mode === 'dark' ? 'rgba(255,255,255,.35)' : 'rgba(0,0,0,.25)',
    boxSizing: 'border-box',
  },
}));

const NetworkControll = ({ activeSchedule, connected, retry }) => {
  const [state, setState] = useState({
    activeSchedule: true,
    connected: true,
    retry: true
  });
  console.log(activeSchedule);
  console.log(connected);
  console.log(retry);
  const classes = useStyles();
  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  return (
    <Card>
      <CardContent
        sx={{
          backgroundColor: 'rgb(220, 230, 242)'
        }}
      >
        <Box
          className={classes.root}
          sx={{
            alignItems: 'left',
            display: 'flex',
            flexDirection: 'column',
            float: 'left'
          }}
        >
          <Paper elevation={3}>
            <Typography
              color="textPrimary"
              variant="h4"
              paragraph="false"
              align="center"
              sx={{ verticalAlign: 'middle' }}
            >
              lpfapxxd
            </Typography>
          </Paper>
        </Box>
        <Box
          sx={{
            alignItems: 'left',
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          <Box
            sx={{
              alignItems: 'left',
              display: 'flex',
              flexDirection: 'row'
            }}
          >
            <Typography
              color="textPrimary"
              gutterBottom
              variant="h4"
              sx={{
                paddingRight: 1
              }}
            >
              회선 체크 스케쥴링 :
            </Typography>
            <Typography component="div">
              <Grid component="label" container alignItems="center" spacing={1}>
                <Grid item>Off</Grid>
                <Grid item>
                  <AntSwitch checked={state.activeSchedule} onChange={handleChange} name="activeSchedule" />
                </Grid>
                <Grid item>On</Grid>
              </Grid>
            </Typography>
          </Box>
          <Typography
            color="textPrimary"
            gutterBottom
            variant="h4"
          >
            연결 상태 :
            {state.connected === true ? '연결' : '중단'}
          </Typography>
          <Box
            sx={{
              alignItems: 'left',
              display: 'flex',
              flexDirection: 'row'
            }}
          >
            <Typography
              color="textPrimary"
              gutterBottom
              variant="h4"
              sx={{
                paddingRight: 1
              }}
            >
              재연결 시도 상태 :
            </Typography>
            <FormGroup>
              <Stack direction="row" spacing={1} alignItems="center">
                <Typography>Off</Typography>
                <AntSwitch defaultChecked inputProps={{ 'aria-label': 'ant design' }} />
                <Typography>On</Typography>
              </Stack>
            </FormGroup>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

NetworkControll.propTypes = {
  activeSchedule: PropTypes.bool.isRequired,
  connected: PropTypes.bool,
  retry: PropTypes.bool
};

export default NetworkControll;
