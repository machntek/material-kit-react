import { Helmet } from 'react-helmet';
import { Box, Container, Typography } from '@material-ui/core';
import Stack from '@material-ui/core/Stack';
import { useState } from 'react';
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
  const handleDidSearch = (cusno) => {
    setVcs({ ...dids, content: [] });
    setVcHistory({ ...vcHistory, content: [] });
    setDids({
      ...dids,
      content: [
        {
          did: 'did:omn:'.concat(cusno.value),
          status: 1
        },
        {
          did: 'did:omn:2sf',
          status: 1
        }
      ]
    });
  };
  const searchDidByCusNo = (cusno) => {
    handleDidSearch(cusno);
  };
  const handleVcSearch = () => {
    setVcs({
      ...vcs,
      content: [
        {
          vcId: '12vcid34test',
          vcType: 'bankid',
          status: 1
        },
        {
          vcId: 'cccc',
          vcType: 'bankid',
          status: 1
        }
      ]
    });
  };
  const searchVcByDid = () => {
    handleVcSearch();
  };

  const handleVcHistorySearcy = () => {
    setVcHistory({
      ...vcHistory,
      content: [
        {
          did: 'did:omn:1234',
          vcId: '12vcid34test',
          vcType: 1,
          vcUseGb: 3,
          datetime: '2021/05/05 05:05:05'
        },
        {
          did: 'did:omn:1234',
          vcId: '12vcid34test',
          vcType: 1,
          vcUseGb: 2,
          datetime: '2021/05/06 05:05:05'
        },
        {
          did: 'did:omn:1234',
          vcId: '12vcid34test',
          vcType: 1,
          vcUseGb: 1,
          datetime: '2021/05/07 05:05:05'
        }
      ]
    });
  };

  const searchVcHistoryByVcId = () => {
    handleVcHistorySearcy();
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
