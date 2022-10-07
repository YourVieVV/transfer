import React, { FC } from 'react';
import {TextField } from '@mui/material';
import { FlexWrapper } from '../../../StyledComponents/Wrappers/FlexWrappers';

export const LoginFields: FC = () => {
    return (
        <FlexWrapper justifyContent='center' gap='40px'>
            <TextField
                name="nameCargo"
                label="Откуда"
                type="search"
                variant="outlined"
                color="primary"
                margin="dense"
                value={'kljkjl'}
                sx={{ width:'40%' }}
            />
            <TextField
                name="nameCargo"
                label="Куда"
                type="search"
                variant="outlined"
                color="primary"
                margin="dense"
                value={'kljkjl'}
                sx={{ width:'40%' }}
            />
        </FlexWrapper>
    );
};
