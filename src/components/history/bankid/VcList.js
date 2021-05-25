import React, { useState } from 'react';
import PropTypes from 'prop-types';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {
  Box, Button,
  Card,
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow, Typography
} from '@material-ui/core';

const VcUsingHistoryResults = ({ vcs, onSearch, ...rest }) => {
  const [selectedCustomerIds, setSelectedCustomerIds] = useState();
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(0);

  const handleSelectOne = (vcId) => {
    if (vcId === selectedCustomerIds) {
      setSelectedCustomerIds(null);
    } else {
      setSelectedCustomerIds(vcId);
    }
  };

  const handleLimitChange = (event) => {
    setLimit(event.target.value);
  };

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  return (
    <Box>
      <Box>
        <Typography
          color="textPrimary"
          variant="h4"
          sx={{
            float: 'left'
          }}
        >
          VC조회
        </Typography>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-end'
          }}
        >
          <Button
            variant="contained"
            color="secondary"
          >
            폐기
          </Button>
        </Box>
      </Box>
      <Card {...rest}>
        <PerfectScrollbar>
          <Box sx={{ minWidth: 600 }}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell padding="checkbox" />
                  <TableCell>
                    VC ID
                  </TableCell>
                  <TableCell>
                    종류
                  </TableCell>
                  <TableCell>
                    상태
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {vcs.slice(0, limit).map((vc) => (
                  <TableRow
                    hover
                    key={vc.id}
                    selected={selectedCustomerIds === vc.vcId}
                  >
                    <TableCell padding="checkbox">
                      <Checkbox
                        checked={selectedCustomerIds === vc.vcId}
                        onChange={() => handleSelectOne(vc.vcId)}
                        value="true"
                      />
                    </TableCell>
                    <TableCell onClick={onSearch} sx={{ cursor: 'pointer' }}>
                      {vc.vcId}
                    </TableCell>
                    <TableCell onClick={onSearch} sx={{ cursor: 'pointer' }}>
                      {vc.vcType}
                    </TableCell>
                    <TableCell onClick={onSearch} sx={{ cursor: 'pointer' }}>
                      {vc.status}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Box>
        </PerfectScrollbar>
        <TablePagination
          component="div"
          count={vcs.length}
          onPageChange={handlePageChange}
          onRowsPerPageChange={handleLimitChange}
          page={page}
          rowsPerPage={limit}
          rowsPerPageOptions={[5, 10, 25]}
        />
      </Card>
    </Box>
  );
};

VcUsingHistoryResults.propTypes = {
  vcs: PropTypes.array.isRequired,
  onSearch: PropTypes.func
};

export default VcUsingHistoryResults;
