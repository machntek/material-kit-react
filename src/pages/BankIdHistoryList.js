import { Helmet } from 'react-helmet';
import { Box, Container, Typography } from '@material-ui/core';
import VcUsingHistoryResults from 'src/components/history/bankid/VcUsingHistoryResults';
import BankIdHistoryListToolbar from 'src/components/history/bankid/BankIdHistoryListToolbar';
import vcUsingHistory from 'src/__mocks__/vcUsingHistory';
import DidList from '../components/history/bankid/DidList';
import didHistory from '../__mocks__/didHistory';
import VcList from '../components/history/bankid/VcList';
import vcIssuingHistory from '../__mocks__/vcIssuingHistory';

const BankIdHistoryList = () => (
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
      <Container
        maxWidth={false}
        sx={{
          alignItems: 'right',
          display: 'flex',
          flexDirection: 'row',
          float: 'right'
        }}
      >
        <Box sx={{ pt: 3, width: 600 }}>
          <BankIdHistoryListToolbar />
          <DidList dids={didHistory} />
        </Box>
        <Box sx={{ pt: 3, width: 600 }}>
          <VcList vcs={vcIssuingHistory} />
        </Box>
      </Container>
      <Box sx={{ pt: 10 }}>
        <VcUsingHistoryResults histories={vcUsingHistory} />
      </Box>
    </Box>
  </>
);

export default BankIdHistoryList;
