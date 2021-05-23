import { Helmet } from 'react-helmet';
import { Box, Container, Typography } from '@material-ui/core';
import fldhistory from 'src/__mocks__/fldhistory';
import FldHistoryListToolbar from '../components/history/fld/FldHistoryListToolbar';
import FldHistoryResults from '../components/history/fld/FldHistoryResults';

const FldHistoryList = () => (
  <>
    <Helmet>
      <title>전문처리현황 조회 | 뱅크ID 어드민</title>
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
          전문처리현황 조회
        </Typography>
      </Container>
      <Container maxWidth="xl">
        <FldHistoryListToolbar />
        <Box sx={{ pt: 3 }}>
          <FldHistoryResults customers={fldhistory.data} />
        </Box>
      </Container>
    </Box>
  </>
);

export default FldHistoryList;
