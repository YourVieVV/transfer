import React, { useState, FC } from 'react';
import { Box, Tab } from '@mui/material';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import { useLocation, useNavigate } from 'react-router-dom';
import { Wrapper } from '../../StylesComponents/Wrapper';

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
                value="/"
                onClick={() => navigate('/')}
              />
              <Tab
                label="Создание/Отправка"
                value="/transfer"
                onClick={() => navigate('/transfer')}
              />
              <Tab
                label="Архив"
                value="/archive"
                onClick={() => navigate('/archive')}
              />
            </TabList>
          </Box>
        </TabContext>
      </Box>
    </Wrapper>
  );
};
