import {
  Box,
  Card,
  CardContent, Grid,
  Paper, Typography,
} from '@material-ui/core';
import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch';

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

const AntSwitch = withStyles((theme) => ({
  root: {
    width: 28,
    height: 16,
    padding: 0,
    display: 'flex',
  },
  switchBase: {
    padding: 2,
    color: theme.palette.grey[500],
    '&$checked': {
      transform: 'translateX(12px)',
      color: theme.palette.common.white,
      '& + $track': {
        opacity: 1,
        backgroundColor: theme.palette.primary.main,
        borderColor: theme.palette.primary.main,
      },
    },
  },
  thumb: {
    width: 12,
    height: 12,
    boxShadow: 'none',
  },
  track: {
    border: `1px solid ${theme.palette.grey[500]}`,
    borderRadius: 16 / 2,
    opacity: 1,
    backgroundColor: theme.palette.common.white,
  },
  checked: {},
}))(Switch);

const NetworkControll = (props) => {
  const [state, setState] = React.useState({
    schedulingChecked: true,
    reconnectChecked: true
  });
  const classes = useStyles();
  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  return (
    <Card {...props}>
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
                  <AntSwitch checked={state.schedulingChecked} onChange={handleChange} name="schedulingChecked" />
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
            연결 상태 : 연결
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
            <Typography component="div">
              <Grid component="label" container alignItems="center" spacing={1}>
                <Grid item>Off</Grid>
                <Grid item>
                  <AntSwitch checked={state.reconnectChecked} onChange={handleChange} name="reconnectChecked" />
                </Grid>
                <Grid item>On</Grid>
              </Grid>
            </Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default NetworkControll;
