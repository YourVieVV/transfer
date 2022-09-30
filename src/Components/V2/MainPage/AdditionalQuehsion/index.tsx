import React, { FC } from 'react';
import Box from '@mui/material/Box';
import { Autocomplete, Fab, TextField, Typography } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';


export const AdditionalQuehsion: FC = () => {
    return (
        <Box sx={{width:'100%', display:'flex', flexWrap:'wrap', justifyContent:'center', rowGap:'20px'}}>
            <Typography id='defaultText' variant="h6" gutterBottom style={{width:'100%'}}>
                Заполнили документы, но информация поменялась?
            </Typography>

            <div style={{width:'100%', display:'flex', flexWrap:'wrap', justifyContent:'center', columnGap:'40px'}}>
            <div style={{width:'40%'}}>
            <Typography id='defaultText' variant="subtitle2" gutterBottom style={{textAlign:'left'}}>
                Изменение получателя
            </Typography>

            <Typography id='defaultText' variant="subtitle2" gutterBottom style={{textAlign:'left'}}>
                Изменение пункта назначения
            </Typography>
            </div>
        <div style={{width:'40%'}}>
            <Typography id='defaultText' variant="subtitle2" gutterBottom style={{textAlign:'left'}}>
                Изменение пункта доставки
            </Typography>

            <Typography id='defaultText' variant="subtitle2" gutterBottom style={{textAlign:'left'}}>
                Изменение типа перевозки
            </Typography>
        </div>
            <div style={{width:'86%'}}>
            <Typography id='defaultText' variant="subtitle2" gutterBottom style={{textAlign:'left'}}>
                Изменение бухгалтерских документов
            </Typography>
                </div>

            <div style={{width:'100%'}}>
            <Typography id='defaultText' variant="subtitle2" gutterBottom style={{textAlign:'left'}}>
                Хотите, что бы мы взяли дополнительный груз по пути?(добавить снакбар)
            </Typography>
            <Typography id='defaultText' variant="subtitle2" gutterBottom style={{textAlign:'left'}}>
                Хотите, что бы мы изменили маршрута следования груза?
            </Typography>
                </div>
            </div>
        </Box>
    );
};
