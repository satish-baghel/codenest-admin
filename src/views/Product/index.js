import React from 'react';
import PropTypes from 'prop-types';

// theme
import {
    CardContent,
    Grid,
    TextField,
    InputAdornment,
    Fab,
    Tooltip,
    TableHead,
    TableRow,
    Checkbox,
    TableCell,
    TableSortLabel
} from '@mui/material';
import MainCard from 'ui-component/cards/MainCard';
// assets
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/AddTwoTone';
import { visuallyHidden } from '@mui/utils';
import { Box } from '@mui/system';

const Index = (props) => {
    // table header
    const headCells = [
        {
            id: 'no',
            numeric: false,
            disablePadding: true,
            label: 'No'
        },
        {
            id: 'title',
            numeric: false,
            disablePadding: true,
            label: 'Title'
        },
        {
            id: 'action',
            numeric: false,
            disablePadding: true,
            label: 'Action'
        }
    ];

    return (
        <MainCard
            title={
                <Grid container justifyContent="space-between" alignItems="center" spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <SearchIcon fontSize="small" />
                                    </InputAdornment>
                                )
                            }}
                            // onChange={handleSearch}
                            placeholder="Search Product"
                            // value={search}
                            size="small"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} sx={{ textAlign: 'right' }}>
                        <Tooltip title="Add Product">
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
                <TableHead>
                    <TableRow>
                        <TableCell padding="checkbox" sx={{ pl: 3 }}>
                            <Checkbox
                                color="primary"
                                // indeterminate={numSelected > 0 && numSelected < rowCount}
                                // checked={rowCount > 0 && numSelected === rowCount}
                                // onChange={onSelectAllClick}
                                inputProps={{
                                    'aria-label': 'select all desserts'
                                }}
                            />
                        </TableCell>
                        {headCells.map((headCell) => (
                            <TableCell
                                key={headCell.id}
                                align={headCell.numeric ? 'right' : 'left'}
                                padding={headCell.disablePadding ? 'none' : 'normal'}
                                // sortDirection={orderBy === headCell.id ? order : false}
                            >
                                <TableSortLabel
                                // active={orderBy === headCell.id}
                                // direction={orderBy === headCell.id ? order : 'asc'}
                                // onClick={createSortHandler(headCell.id)}
                                >
                                    {headCell.label}
                                    {/* {orderBy === headCell.id ? ( */}
                                    <Box component="span" sx={visuallyHidden}>
                                        Sort
                                    </Box>
                                    {/* ) : null} */}
                                </TableSortLabel>
                            </TableCell>
                        ))}
                    </TableRow>
                </TableHead>
            </CardContent>
        </MainCard>
    );
};

Index.propTypes = {};

export default Index;
