import React, { FC } from 'react';
import Box from '@mui/material/Box';
import { Autocomplete, Fab, TextField, Typography } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';


export const AdditionalQuehsion: FC = () => {
    return (
        <Box sx={{width:'40%'}}>
            <Typography id='defaultText' variant="h6" gutterBottom>
                Заполнили документы, но информация поменялась?
            </Typography>
            <Typography id='defaultText' variant="subtitle2" gutterBottom>
                Изменение получателя
            </Typography>
            <Typography id='defaultText' variant="subtitle2" gutterBottom>
                Изменение пункта назначения
            </Typography>
            <Typography id='defaultText' variant="subtitle2" gutterBottom>
                Изменение пункта доставки
            </Typography>
            <Typography id='defaultText' variant="subtitle2" gutterBottom>
                Изменение типа перевозки
            </Typography>
            <Typography id='defaultText' variant="subtitle2" gutterBottom>
                Изменение бухгалтерских документов
            </Typography>


            <Typography id='defaultText' variant="subtitle2" gutterBottom>
                Хотите, что бы мы взяли дополнительный груз по пути?(добавить снакбар)
            </Typography>
            <Typography id='defaultText' variant="subtitle2" gutterBottom>
                Изменение маршрута следования груза
            </Typography>
        </Box>
    );
};
