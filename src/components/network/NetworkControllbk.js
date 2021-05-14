import {
  Box,
  Card,
  Grid,
  CardContent,
  Divider, Typography,
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch';
import React from 'react';

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

const [state, setState] = React.useState({
  checked: true,
});

const handleChange = (event) => {
  setState({ ...state, [event.target.name]: event.target.checked });
};

const NetworkControll = (props) => (
  <Card {...props}>
    <CardContent>
      <Box
        sx={{
          alignItems: 'left',
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        <Typography
          color="textPrimary"
          gutterBottom
          variant="h4"
        >
          회선 체크 스케쥴링 : 버튼
        </Typography>
        <Typography
          color="textPrimary"
          gutterBottom
          variant="h4"
        >
          연결 상태 : 연결
        </Typography>
        <Typography
          color="textPrimary"
          gutterBottom
          variant="h4"
        >
          재연결 시도 상태 :
          <Typography component="div">
            <Grid component="label" container alignItems="center" spacing={1}>
              <Grid item>Off</Grid>
              <Grid item>
                <AntSwitch checked={state.checked} onChange={handleChange} name="checked" />
              </Grid>
              <Grid item>On</Grid>
            </Grid>
          </Typography>
        </Typography>
      </Box>
    </CardContent>
    <Divider />
  </Card>
);

export default NetworkControll;
