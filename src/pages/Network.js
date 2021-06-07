import { Helmet } from 'react-helmet';
import {
  Box,
  Container,
  Grid, Typography
} from '@material-ui/core';
import NetworkStatus from 'src/components/network/NetworkStatus';
import NetworkControll from 'src/components/network/NetworkControll';
import { useEffect, useState } from 'react';
import axios from '../utils/axiosUtil';

const Network = () => {
  const initStatus = {
    connected: false,
    activeSchedule: false,
    retry: false
  };
  const [networkStatus, setNetworkStatus] = useState([initStatus, initStatus]);
  // const handleNetworkStatus = () => {
  //   setNetworkStatus([networkStatus.map((value, index) => {
  //     console.log(index, value);
  //     let responseObject = {};
  //     axios.get(`/did/admin/myinfo/fdid/health/${index + 1}`)
  //       .then((Response) => {
  //         console.log(Response.data);
  //         responseObject = Response.data;
  //       }).catch((Error) => {
  //       console.log(Error);
  //     });
  //     return responseObject;
  //   })]);
  const handleNetworkStatus = () => {
    console.log('rendering');
    const responseStatus = networkStatus.map(async (value, index) => {
      console.log(value);
      const response = await axios.get(`/did/admin/myinfo/fdid/health/${index + 1}`);
      console.log(response.data);
      console.log(response.data);
      console.log(response);
      console.log('응답');
      return response.data;
    });
    console.log('xxx');
    console.log(responseStatus);
    console.log('xxx');
    setNetworkStatus(responseStatus);
  };
  useEffect(() => {
    handleNetworkStatus();
  }, []);
  console.log('aaa');
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
            console.log('rendering init');
            console.log(status);
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
