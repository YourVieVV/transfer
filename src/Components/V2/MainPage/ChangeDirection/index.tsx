import React, { FC } from 'react';
import Box from '@mui/material/Box';
import { Autocomplete, Fab, TextField, Typography } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';


export const ChangeDirection: FC = () => {
    return (
        <Box sx={{width:'40%'}}>
            <Typography id='defaultText' variant="subtitle1" gutterBottom>
                Ошибка в адресе?
            </Typography>
            <Fab color="secondary" variant="extended" aria-label="add">
                <EditIcon />
                <Typography variant="button" gutterBottom style={{marginTop:'7px', fontWeight:'bold'}}> Исправь это!
                </Typography>
            </Fab>
        </Box>
    );
};
