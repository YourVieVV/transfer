import React, { FC } from 'react';
import Box from '@mui/material/Box';
import { Autocomplete, TextField, Typography } from '@mui/material';
import {ChangeDirection} from "../ChangeDirection";
import {BlockWrapper} from "../ContentWrapper/BlockWrapper";


export const SearchTrackCargoForm: FC = () => {
    const top100Films = [
        { title: 'Amadeus', year: 1984 },
        { title: 'To Kill a Mockingbird', year: 1962 },
        { title: 'Toy Story 3', year: 2010 },
        { title: 'Logan', year: 2017 },
        { title: 'Full Metal Jacket', year: 1987 },
        { title: 'Dangal', year: 2016 },
        { title: 'The Sting', year: 1973 },
        { title: '2001: A Space Odyssey', year: 1968 },
        { title: "Singin' in the Rain", year: 1952 },
        { title: 'Toy Story', year: 1995 },
        { title: 'Bicycle Thieves', year: 1948 },
        { title: 'The Kid', year: 1921 },
        { title: 'Inglourious Basterds', year: 2009 },
        { title: 'Snatch', year: 2000 },
        { title: '3 Idiots', year: 2009 },
        { title: 'Monty Python and the Holy Grail', year: 1975 },
    ];
    return (
        <div style={{display:'flex', width:'100%', justifyContent:'center', gap:'20px 40px',flexWrap: 'wrap'}}>
            <Typography id="defaultText" style={{width:'100%'}} variant="h6">Хотите узнать?</Typography>
            <div style={{width:'40%'}}>
            <Typography id='defaultText' variant="subtitle1" gutterBottom>
                Где ваш груз сейчас?
            </Typography>
            <Autocomplete
                freeSolo
                id="free-solo-2-demo"
                disableClearable
                options={top100Films.map((option) => option.title)}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        label="Введите трек-номер"
                        InputProps={{
                            ...params.InputProps,
                            type: 'search',
                        }}
                    />
                )}

            />
            </div>
            <ChangeDirection />
        </div>
    );
};
