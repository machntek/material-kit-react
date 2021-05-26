import { useState } from 'react';
import PropTypes from 'prop-types';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {
  Box,
  Card,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Typography
} from '@material-ui/core';

const FldHistoryResults = ({ histories, ...rest }) => {
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(0);

  const handleLimitChange = (event) => {
    setLimit(event.target.value);
  };

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  return (
    <Card {...rest}>
      <PerfectScrollbar>
        <Box sx={{ minWidth: 1050 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  전문 시리얼 번호
                </TableCell>
                <TableCell>
                  전송일시
                </TableCell>
                <TableCell>
                  금결원 전문 번호
                </TableCell>
                <TableCell>
                  송수신 구분
                </TableCell>
                <TableCell>
                  상세
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {histories.slice(0, limit).map((history) => (
                <TableRow
                  hover
                >
                  <TableCell>
                    <Box
                      sx={{
                        alignItems: 'center',
                        display: 'flex'
                      }}
                    >
                      <Typography
                        color="textPrimary"
                        variant="body1"
                      >
                        {history.eaiSeq}
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell>
                    {history.timestamp}
                  </TableCell>
                  <TableCell>
                    {history.fdidSeq}
                  </TableCell>
                  <TableCell>
                    {history.twayCd}
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
  );
};

FldHistoryResults.propTypes = {
  histories: PropTypes.array.isRequired
};

export default FldHistoryResults;
