import React, { useState, FC } from 'react';
import { Box, Tab } from '@mui/material';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import { useLocation, useNavigate } from 'react-router-dom';
import { Wrapper } from '../../StyledComponents/Wrappers';

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
                value="/old/transfer"
                onClick={() => navigate('/old/transfer')}
              />
              <Tab
                label="Создание/Отправка"
                value="/old/addCargo"
                onClick={() => navigate('/old/addCargo')}
              />
              <Tab
                label="Архив"
                value="/old/archive"
                onClick={() => navigate('/old/archive')}
              />
            </TabList>
          </Box>
        </TabContext>
      </Box>
    </Wrapper>
  );
};
