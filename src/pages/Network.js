import { Helmet } from 'react-helmet';
import {
  Box,
  Container,
  Grid, Typography
} from '@material-ui/core';
import axios from 'axios';
import NetworkStatus from 'src/components/network/NetworkStatus';
import NetworkControll from 'src/components/network/NetworkControll';

const Network = () => {
  const networkStatus = [{}, {}];

  const handleNetworkStatus = () => {
    networkStatus.forEach((value, index) => {
      axios.get(`http://localhost:8081/did/admin/myinfo/fdid/health/${index + 1}`)
        .then((Response) => {
          networkStatus[index] = Response.data;
        }).catch((Error) => {
          console.log(Error);
        });
    });
  };
  handleNetworkStatus();
  console.log(networkStatus);
  console.log('aaa');
  networkStatus.map((status) => console.log(status));
  console.log('xyz');
  console.log(networkStatus);
  console.log('xxx');

  return (
    <>
      <Helmet>
        <title>서비스 관리 | 뱅크ID 어드민</title>
      </Helmet>
      <Box
        sx={{
          backgroundColor: 'background.default',
          minHeight: '100%',
          py: 3,
        }}
      >
        <Container maxWidth="xl">
          <Typography
            color="textPrimary"
            gutterBottom
            variant="h1"
          >
            뱅크ID 서비스 관리
          </Typography>
        </Container>
        <Container maxWidth="xl">
          <Box
            sx={{
              backgroundColor: 'background.default',
              minHeight: '100%',
              py: 3
            }}
          >
            <Grid
              item
              lg={8}
              md={6}
              xs={12}
            >
              <NetworkStatus />
            </Grid>
          </Box>
          {networkStatus.map((status) => {
            console.log('000');
            return (
              <Box
                sx={{
                  backgroundColor: 'background.default',
                  minHeight: '100%',
                  py: 3
                }}
              >
                <Grid
                  item
                  lg={12}
                  md={6}
                  xs={12}
                >
                  <NetworkControll networkStatus={status} />
                </Grid>
              </Box>
            );
          })}
        </Container>
      </Box>
    </>
  );
};

export default Network;
