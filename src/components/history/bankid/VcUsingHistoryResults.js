import { useState } from 'react';
import PropTypes from 'prop-types';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {
  Box, Button,
  Card, Container,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
} from '@material-ui/core';

const VcUsingHistoryResults = ({ histories, ...rest }) => {
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(0);

  const handleLimitChange = (event) => {
    setLimit(event.target.value);
  };

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  return (
    <Container maxWidth="xl">
      VC 이용내역 조회
      <Box
        sx={{
          float: 'right',
        }}
      >
        <Button>
          전체조회
        </Button>
      </Box>
      <Card {...rest}>
        <PerfectScrollbar>
          <Box sx={{ minWidth: 1050 }}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>
                    DID
                  </TableCell>
                  <TableCell>
                    VC ID
                  </TableCell>
                  <TableCell>
                    서비스 종류
                  </TableCell>
                  <TableCell>
                    이용 구분
                  </TableCell>
                  <TableCell>
                    일시
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {histories.slice(0, limit).map((history) => (
                  <TableRow
                    hover
                    key={history.did}
                  >
                    <TableCell>
                      {history.did}
                    </TableCell>
                    <TableCell>
                      {history.vcId}
                    </TableCell>
                    <TableCell>
                      {history.vcType}
                    </TableCell>
                    <TableCell>
                      {history.vcUseGb}
                    </TableCell>
                    <TableCell>
                      {history.datetime}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Box>
        </PerfectScrollbar>
        <TablePagination
          component="div"
          count={histories.length}
          onPageChange={handlePageChange}
          onRowsPerPageChange={handleLimitChange}
          page={page}
          rowsPerPage={limit}
          rowsPerPageOptions={[5, 10, 25]}
        />
      </Card>
    </Container>
  );
};

VcUsingHistoryResults.propTypes = {
  histories: PropTypes.array.isRequired
};

export default VcUsingHistoryResults;
