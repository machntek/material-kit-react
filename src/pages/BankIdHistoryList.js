import { Helmet } from 'react-helmet';
import { Box, Container, Typography } from '@material-ui/core';
import Stack from '@material-ui/core/Stack';
import { useState } from 'react';
import axios from 'axios';
import VcUsingHistoryResults from 'src/components/history/bankid/VcUsingHistoryResults';
import DidSearchToolbar from 'src/components/history/bankid/DidSearchToolbar';
import DidList from '../components/history/bankid/DidList';
import VcList from '../components/history/bankid/VcList';
import VcUseHistorySearchToolbar from '../components/history/bankid/VcUseHistorySearchToolbar';

const BankIdHistoryList = () => {
  const [dids, setDids] = useState({
    content: []
  });
  const [vcs, setVcs] = useState({
    content: []
  });
  const [vcHistory, setVcHistory] = useState({
    content: []
  });
  const searchDidByCusNo = (cusno) => {
    setVcs({ ...dids, content: [] });
    setVcHistory({ ...vcHistory, content: [] });

    axios.get('http://localhost:8081/did/admin/myinfo/query/did', {
      params: {
        cusno: cusno.value
      }
    })
      .then((Response) => {
        setDids({ ...dids, content: Response.data.content });
      }).catch((Error) => {
        console.log(Error);
      });
  };
  const searchVcByDid = () => {
    axios.get('http://localhost:8081/did/admin/myinfo/query/vc')
      .then((Response) => {
        setVcs({ ...vcs, content: Response.data.content });
      }).catch((Error) => {
        console.log(Error);
      });
  };

  const searchVcHistoryByVcId = () => {
    axios.get('http://localhost:8081/did/admin/myinfo/query/vc/history')
      .then((Response) => {
        setVcHistory({ ...vcHistory, content: Response.data.content });
      }).catch((Error) => {
        console.log(Error);
      });
  };

  return (
    <>
      <Helmet>
        <title>뱅크ID 처리 현황 조회 | 뱅크ID 어드민</title>
      </Helmet>
      <Box
        sx={{
          backgroundColor: 'background.default',
          minHeight: '100%',
          py: 3
        }}
      >
        <Container maxWidth="xl">
          <Typography
            color="textPrimary"
            gutterBottom
            variant="h1"
          >
            뱅크ID 처리 현황 조회
          </Typography>
        </Container>
        <Stack
          direction="row"
          spacing={0}
        >
          <Container sx={{ pt: 3, width: '50%' }}>
            <DidSearchToolbar onSearch={searchDidByCusNo} />
            <DidList onSearch={searchVcByDid} dids={dids.content} />
          </Container>
          <Container sx={{ pt: 3, width: '50%' }}>
            <VcList onSearch={searchVcHistoryByVcId} vcs={vcs.content} />
          </Container>
        </Stack>
        <Box sx={{ pt: 10 }}>
          <VcUseHistorySearchToolbar />
          <VcUsingHistoryResults histories={vcHistory.content} />
        </Box>
      </Box>
    </>
  );
};

export default BankIdHistoryList;
