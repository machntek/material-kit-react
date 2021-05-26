import { Helmet } from 'react-helmet';
import {
  Box,
  Container,
  Grid, Typography
} from '@material-ui/core';
import NetworkStatus from 'src/components/network/NetworkStatus';
import NetworkControll from 'src/components/network/NetworkControll';
import React, { useState } from 'react';
import axios from 'axios';

const Network = () => {
  const [networkStatus, setNetworkStatus] = useState([{}, {}]);

  const handleNetworkStatus = () => {
    networkStatus.forEach((value, index) => {
      axios.get(`http://localhost:8081/did/admin/myinfo/fdid/health/${index}`)
        .then((Response) => {
          console.log(Response);
          setNetworkStatus({ ...networkStatus, value: [{}, {}] });
        }).catch((Error) => {
          console.log(Error);
        });
    });
  };
  const handleFuck = () => {
    console.log(networkStatus);
  };

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
            onClick={handleNetworkStatus}
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
            onClick={handleFuck}
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
              <NetworkControll hostname="lpfap01d" />
            </Grid>
          </Box>
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
              <NetworkControll />
            </Grid>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Network;
