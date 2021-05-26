import { Helmet } from 'react-helmet';
import { Box, Container, Typography } from '@material-ui/core';
import { useState } from 'react';
import axios from 'axios';
import FldHistoryListToolbar from '../components/history/fld/FldHistoryListToolbar';
import FldHistoryResults from '../components/history/fld/FldHistoryResults';

const FldHistoryList = () => {
  const [histories, setHistories] = useState({
    content: []
  });

  const searchFldHistories = () => {
    axios.get('http://localhost:8081/did/admin/myinfo/query/fld')
      .then((Response) => {
        console.log(Response);
        setHistories({ ...histories, content: Response.data.content });
      }).catch((Error) => {
        console.log(Error);
      });
  };

  return (
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
          <FldHistoryListToolbar onSearch={searchFldHistories} />
          <Box sx={{ pt: 3 }}>
            <FldHistoryResults customers={histories.content} />
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default FldHistoryList;
