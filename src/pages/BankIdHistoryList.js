import { Helmet } from 'react-helmet';
import { Box, Container, Typography } from '@material-ui/core';
import Stack from '@material-ui/core/Stack';
import VcUsingHistoryResults from 'src/components/history/bankid/VcUsingHistoryResults';
import DidSearchToolbar from 'src/components/history/bankid/DidSearchToolbar';
import vcUsingHistory from 'src/__mocks__/vcUsingHistory';
import DidList from '../components/history/bankid/DidList';
import didHistory from '../__mocks__/didHistory';
import VcList from '../components/history/bankid/VcList';
import vcIssuingHistory from '../__mocks__/vcIssuingHistory';
import VcUseHistorySearchToolbar from '../components/history/bankid/VcUseHistorySearchToolbar';

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
      <Stack
        direction="row"
        spacing={0}
      >
        <Container sx={{ pt: 3, width: '50%' }}>
          <DidSearchToolbar />
          <DidList dids={didHistory} />
        </Container>
        <Container sx={{ pt: 3, width: '50%' }}>
          <VcList vcs={vcIssuingHistory} />
        </Container>
      </Stack>
      <Box sx={{ pt: 10 }}>
        <VcUseHistorySearchToolbar />
        <VcUsingHistoryResults histories={vcUsingHistory} />
      </Box>
    </Box>
  </>
);

export default BankIdHistoryList;
