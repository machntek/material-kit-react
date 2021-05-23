import { Helmet } from 'react-helmet';
import { Box, Container, Typography } from '@material-ui/core';
import Stack from '@material-ui/core/Stack';
import { useState } from 'react';
import VcUsingHistoryResults from 'src/components/history/bankid/VcUsingHistoryResults';
import DidSearchToolbar from 'src/components/history/bankid/DidSearchToolbar';
import vcUsingHistory from 'src/__mocks__/vcUsingHistory';
import DidList from '../components/history/bankid/DidList';
import VcList from '../components/history/bankid/VcList';
import VcUseHistorySearchToolbar from '../components/history/bankid/VcUseHistorySearchToolbar';

const BankIdHistoryList = () => {
  const [dids, setDids] = useState({
    data: []
  });
  const [vcs, setVcs] = useState({
    data: []
  });
  const handleDidSearch = (cusno) => {
    setDids({
      ...dids,
      data: [{
        did: 'did:omn:'.concat(cusno.value),
        status: 1
      }]
    });
  };
  const searchDidByCusNo = (cusno) => {
    handleDidSearch(cusno);
  };
  const handleVcSearch = () => {
    setVcs({
      ...vcs,
      data: [
        {
          vcId: '12vcid34test',
          vcType: 'bankid',
          status: 1
        }
      ]
    });
  };
  const searchVcByDid = () => {
    handleVcSearch();
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
            <DidList onClick={searchVcByDid} dids={dids.data} />
          </Container>
          <Container sx={{ pt: 3, width: '50%' }}>
            <VcList vcs={vcs.data} />
          </Container>
        </Stack>
        <Box sx={{ pt: 10 }}>
          <VcUseHistorySearchToolbar />
          <VcUsingHistoryResults histories={vcUsingHistory.data} />
        </Box>
      </Box>
    </>
  );
};

export default BankIdHistoryList;
