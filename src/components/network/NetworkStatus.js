import {
  Box,
  Typography
} from '@material-ui/core';

const NetworkStatus = () => (
  <Box
    sx={{
      alignItems: 'left',
      display: 'flex',
      flexDirection: 'column'
    }}
  >
    <Typography
      color="textPrimary"
      align="left"
      gutterBottom
      variant="h3"
    >
      현재 스케줄링 서비스 : lpfapxxp(변경되는값)
    </Typography>
    <Typography
      color="textPrimary"
      align="left"
      gutterBottom
      variant="h3"
    >
      금결원 연결 상태(isConnected) : 연결(변경되는값)
    </Typography>
  </Box>
);

export default NetworkStatus;
