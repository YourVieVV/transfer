import React, { FC } from 'react';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';

export const AdditionalQuehsion: FC = () => {
  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        rowGap: '20px',
      }}
    >
      <Typography
        id="defaultText"
        variant="h6"
        gutterBottom
        sx={{ width: '90%', textAlign: 'center' }}
      >
        Заполнили документы, но информация поменялась?
      </Typography>

      <div
        style={{
          width: '100%',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          columnGap: '40px',
          rowGap: '5px',
        }}
      >
        <Typography
          id="defaultText"
          variant="subtitle2"
          gutterBottom
          style={{ textAlign: 'left', width: '40%' }}
        >
          Изменение получателя
        </Typography>

        <Typography
          id="defaultText"
          variant="subtitle2"
          gutterBottom
          style={{ textAlign: 'left', width: '40%' }}
        >
          Изменение пункта назначения
        </Typography>

        <Typography
          id="defaultText"
          variant="subtitle2"
          gutterBottom
          style={{ textAlign: 'left', width: '40%' }}
        >
          Изменение пункта доставки
        </Typography>

        <Typography
          id="defaultText"
          variant="subtitle2"
          gutterBottom
          style={{ textAlign: 'left', width: '40%' }}
        >
          Изменение типа перевозки
        </Typography>

        <Typography
          id="defaultText"
          variant="subtitle2"
          gutterBottom
          style={{ textAlign: 'left', width: '86%' }}
        >
          Изменение бухгалтерских документов
        </Typography>

        <Typography
          id="defaultText"
          variant="subtitle2"
          gutterBottom
          style={{ textAlign: 'left', width: '86%' }}
        >
          Хотите, что бы мы взяли дополнительный груз по пути?(добавить снакбар)
        </Typography>
        <Typography
          id="defaultText"
          variant="subtitle2"
          gutterBottom
          style={{ textAlign: 'left', width: '86%' }}
        >
          Хотите, что бы мы изменили маршрута следования груза?
        </Typography>
      </div>
    </Box>
  );
};
