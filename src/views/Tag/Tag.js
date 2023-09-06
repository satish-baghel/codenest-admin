import React from 'react';
import PropTypes from 'prop-types';

// theme
import { useTheme } from '@mui/material/styles';
import {
    CardContent,
    Chip,
    Fab,
    Grid,
    IconButton,
    InputAdornment,
    Stack,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    TextField,
    Tooltip,
    Typography
} from '@mui/material';
import MainCard from 'ui-component/cards/MainCard';
// assets
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/AddTwoTone';

// assets
import ChatBubbleTwoToneIcon from '@mui/icons-material/ChatBubbleTwoTone';
import BlockTwoToneIcon from '@mui/icons-material/BlockTwoTone';

const Tag = () => {
    const theme = useTheme();
    console.log();

    return (
        <MainCard
            title={
                <Grid container justifyContent="space-between" alignItems="center" spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        {' '}
                                        <SearchIcon fontSize="small" />
                                    </InputAdornment>
                                )
                            }}
                            // onChange={handleSearch}
                            placeholder="Search By tag"
                            // value={search}
                            size="small"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} sx={{ textAlign: 'right' }}>
                        <Tooltip title="Add Tag">
                            <Fab
                                color="primary"
                                size="small"
                                // onClick={handleClickOpenDialog}
                                sx={{ boxShadow: 'none', ml: 1, width: 32, height: 32, minHeight: 32 }}
                            >
                                <AddIcon fontSize="small" />
                            </Fab>
                        </Tooltip>
                    </Grid>
                </Grid>
            }
            content={false}
        >
            <CardContent>
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell sx={{ pl: 3 }}>#</TableCell>
                                <TableCell>Title</TableCell>
                                <TableCell align="center" sx={{ pr: 3 }}>
                                    Actions
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow hover>
                                <TableCell sx={{ pl: 3 }}>1</TableCell>
                                <TableCell>Node</TableCell>
                                <TableCell align="center" sx={{ pr: 3 }}>
                                    <Stack direction="row" justifyContent="center" alignItems="center">
                                        <Tooltip placement="top" title="Message">
                                            <IconButton color="primary" aria-label="delete" size="large">
                                                <ChatBubbleTwoToneIcon sx={{ fontSize: '1.1rem' }} />
                                            </IconButton>
                                        </Tooltip>
                                        <Tooltip placement="top" title="Block">
                                            <IconButton
                                                color="primary"
                                                sx={{
                                                    color: theme.palette.orange.dark,
                                                    borderColor: theme.palette.orange.main,
                                                    '&:hover ': { background: theme.palette.orange.light }
                                                }}
                                                size="large"
                                            >
                                                <BlockTwoToneIcon sx={{ fontSize: '1.1rem' }} />
                                            </IconButton>
                                        </Tooltip>
                                    </Stack>
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </CardContent>
        </MainCard>
    );
};

export default Tag;
