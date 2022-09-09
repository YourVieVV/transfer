import React, { useState, FC } from 'react';
import { Box, Tab } from '@mui/material';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import { useLocation, useNavigate } from 'react-router-dom';
import { Wrapper } from '../../StyledComponents/Wrapper';

export const Header: FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [value, setValue] = useState<string>(location.pathname);

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Wrapper>
      <Box sx={{ width: '100%', typography: 'h4' }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab
                label="Отправленные"
                value="/V1/transfer"
                onClick={() => navigate('/V1/transfer')}
              />
              <Tab
                label="Создание/Отправка"
                value="/V1/addCargo"
                onClick={() => navigate('/V1/addCargo')}
              />
              <Tab
                label="Архив"
                value="/V1/archive"
                onClick={() => navigate('/V1/archive')}
              />
            </TabList>
          </Box>
        </TabContext>
      </Box>
    </Wrapper>
  );
};
