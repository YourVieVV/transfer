import React from 'react';
import { Box, Tab } from '@mui/material';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import { useNavigate } from 'react-router-dom';
import { Wrapper } from '../../StylesComponents/Wrapper';

export default function Header() {
  const [value, setValue] = React.useState('1');
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  const navigate = useNavigate();
  return (
    <Wrapper>
      <Box sx={{ width: '100%', typography: 'h4' }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab
                label="Грузы/Направления"
                value="1"
                onClick={() => navigate('/')}
              />
              <Tab
                label="Отправка/Приём"
                value="2"
                onClick={() => navigate('transfer')}
              />
            </TabList>
          </Box>
        </TabContext>
      </Box>
    </Wrapper>
  );
}