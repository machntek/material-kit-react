import { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Box,
  Card,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
} from '@material-ui/core';

const VcUsingHistoryResults = ({ dids, onClick, ...rest }) => {
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
      <Box sx={{ minWidth: 600 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                DID
              </TableCell>
              <TableCell>
                상태
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {dids.slice(0, limit).map((did) => (
              <TableRow
                hover
                key={did.did}
                onClick={onClick}
                sx={{
                  cursor: 'pointer',
                }}
              >
                <TableCell>
                  {did.did}
                </TableCell>
                <TableCell>
                  {did.status}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>
      <TablePagination
        component="div"
        count={dids.length}
        onPageChange={handlePageChange}
        onRowsPerPageChange={handleLimitChange}
        page={page}
        rowsPerPage={limit}
        rowsPerPageOptions={[5, 10, 25]}
      />
    </Card>
  );
};

VcUsingHistoryResults.propTypes = {
  dids: PropTypes.array.isRequired,
  onClick: PropTypes.func
};

export default VcUsingHistoryResults;
