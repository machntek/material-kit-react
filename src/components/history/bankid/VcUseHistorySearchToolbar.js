import {
  Box,
  Button,
  TextField,
  Typography, Container
} from '@material-ui/core';
import AdapterDateFns from '@material-ui/lab/AdapterDateFns';
import LocalizationProvider from '@material-ui/lab/LocalizationProvider';
import DatePicker from '@material-ui/lab/DatePicker';
import TimePicker from '@material-ui/lab/TimePicker';
import React from 'react';

const DidSearchToolbar = (props) => {
  const [value, setValue] = React.useState(null);
  return (
    <Container
      {...props}
      maxWidth="xl"
    >
      <Typography
        color="textPrimary"
        variant="h4"
        sx={{
          float: 'left',
        }}
      >
        VC 이용내역 조회
      </Typography>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-end'
        }}
      >
        <Typography
          color="textPrimary"
          variant="h4"
          sx={{
            paddingRight: 1
          }}
        >
          거래일시
        </Typography>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DatePicker
            value={value}
            onChange={(newValue) => {
              setValue(newValue);
            }}
            renderInput={(params) => <TextField {...params} />}
          />
          <Box sx={{ width: 10 }} />
          <TimePicker
            ampm={false}
            openTo="hours"
            views={['hours', 'minutes', 'seconds']}
            inputFormat="HH:mm:ss"
            mask="__:__:__"
            label="With seconds"
            value={value}
            onChange={(newValue) => {
              setValue(newValue);
            }}
            renderInput={(params) => <TextField {...params} />}
          />
          <Typography
            color="textPrimary"
            variant="h4"
            sx={{
              paddingLeft: 1,
              paddingRight: 1,
              alignItems: 'center'
            }}
          >
            ~
          </Typography>
          <TimePicker
            ampm={false}
            openTo="hours"
            views={['hours', 'minutes', 'seconds']}
            inputFormat="HH:mm:ss"
            mask="__:__:__"
            label="With seconds"
            value={value}
            onChange={(newValue) => {
              setValue(newValue);
            }}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>
        <Button
          variant="contained"
        >
          조회
        </Button>
      </Box>
    </Container>
  );
};

export default DidSearchToolbar;
