import {
  Box,
  Button,
  Card,
  CardContent,
  TextField,
  InputAdornment,
  SvgIcon, Typography
} from '@material-ui/core';
import { Search as SearchIcon } from 'react-feather';
import React from 'react';

const BankIdHistoryListToolbar = (props) => (
  <Box {...props}>
    <Box sx={{ mt: 3, align: 'right' }}>
      <Card>
        <CardContent>
          <Typography
            color="textPrimary"
            variant="h4"
            sx={{
              display: 'flex',
              flexDirection: 'row',
              float: 'left'
            }}
          >
            DID조회
          </Typography>
          <Box
            sx={{
              alignItems: 'right',
              display: 'flex',
              flexDirection: 'row',
              float: 'right'
            }}
          >
            <TextField
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SvgIcon
                      fontSize="small"
                      color="action"
                    >
                      <SearchIcon />
                    </SvgIcon>
                  </InputAdornment>
                )
              }}
              placeholder="고객번호"
              variant="outlined"
              sx={{
                float: 'left'
              }}
            />
            <Button
              sx={{
                float: 'left'
              }}
            >
              조회
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Box>
  </Box>
);

export default BankIdHistoryListToolbar;
