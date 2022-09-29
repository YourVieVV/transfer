import React, {FC} from 'react';
import Box from '@mui/material/Box';
import {CalcSlider} from './CalcSliders';
import {CalcFields} from './CalcFields';
import Typography from "@mui/material/Typography";
import CalculateTwoToneIcon from '@mui/icons-material/CalculateTwoTone';
import {Button} from '@mui/material';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';

export const CalculationForm: FC = () => {
    return (
        <Box sx={{width: '100%', display: 'flex', flexWrap: 'wrap', rowGap: '20px', justifyContent: 'center'}}>
            <Typography id="defaultText" variant="h6">Калькулятор стоимости грузоперевозки</Typography>
            <CalcFields/>
            <CalcSlider/>
            <div style={{display:'flex', width: '100%', gap: '40px', justifyContent: 'center',}}>
                <div style={{display:'flex', width:'40%'}}>
                    <div style={{display:'flex'}}>
                    <CalculateTwoToneIcon style={{width: '35px', height: '35px', color: '#5dfefe'}}/>
                    <Typography id="defaultText" variant="h6">≈</Typography><Typography id="defaultText" variant="subtitle2">Тут будет посчитанное значение &#8381;</Typography>
                    </div>
                </div>
                <div style={{ width:'40%'}}>
                    <Button id='button-main' variant='contained' endIcon={<AutoAwesomeIcon/>} sx={{borderRadius: '17px'}}>
                        Рассчитать
                    </Button>
                </div>
            </div>
        </Box>
    );
};
