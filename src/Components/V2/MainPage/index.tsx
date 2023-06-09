import React from 'react';
import {
  BackgroundWorldMap,
  BackgroundWorldMapWrapper,
  ImgLogo,
  WidthWrapper,
} from '../../StyledComponents/Wrappers';
import World from '../../../images/WorldMapDark.jpg';
import LoginLogo from '../../../images/LoginNeon.png';
import TemporaryDrawer from './Drawer';
import { Box } from '@mui/material';
import { CalculationForm } from './CalculationForm';
import { ContentWrapper } from './ContentWrappers';
import { ImageSlider } from './ImageSlider';
import { SearchTrackCargoForm } from './SearchTrackCargoForm';
import { AdditionalQuehsion } from './AdditionalQuehsion';
import {
  FlexItem,
  FlexItemTestOverflow,
  FlexWrapper,
} from '../../StyledComponents/Wrappers/FlexWrappers';
import { useNavigate } from 'react-router-dom';
import {initialValueFormik} from "../../../Types";
import {MainSchema} from "../../V1/ValidationShema";
import { Formik } from 'formik';

export const MainPage = () => {
  // const [animation, setAnimation] = useState(true);

  // --------- Проверка на изменение урл адреса -----------
  // useEffect(() => {
  //   if (window.performance) {
  //     if (performance.navigation.type == 1) {
  //       setAnimation(false);
  //     } else setAnimation(true);
  //   }
  // }, []);

  const navigate = useNavigate();
  return (
      <Formik
          initialValues={initialValueFormik}
          onSubmit={(values) => {
            console.log(values);
          }}
          validationSchema={MainSchema}
      >
        {() => (
    <Box sx={{ flexGrow: 1, width: '100vw', height: '100vh' }}>
      <BackgroundWorldMapWrapper>
        <BackgroundWorldMap src={World} scale="scale(1.3)" />
        <ContentWrapper>
          {/*<img style={{ width:'70px', height:'70px',}} src={Logo}/>*/}
          {/*<div style={{ width:'100px', height:'100px','backgroundImage': `url(${Logo})`, backgroundSize:'100% 100%', }} />*/}

          <FlexWrapper justifyContent="center">
            <TemporaryDrawer />
          </FlexWrapper>
          <FlexWrapper gap="30px">
            <FlexItem alignItems="flex-start" justifyContent="center">
              <div>
                <ImgLogo onClick={() => navigate('/auth')} src={LoginLogo} />
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d13377355.00139292!2d96.55301474503143!3d63.24503109463191!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sru!4v1663571890772!5m2!1sen!2sru"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  style={{ height: '25vh' }}
                />
              </div>
            </FlexItem>
            <WidthWrapper width="35%">
              <ImageSlider />
            </WidthWrapper>
            <FlexItemTestOverflow width="45%" rowGap="60px" flexWrap="wrap">
              <CalculationForm />
              <SearchTrackCargoForm />
              <AdditionalQuehsion />
            </FlexItemTestOverflow>
          </FlexWrapper>
        </ContentWrapper>
      </BackgroundWorldMapWrapper>
    </Box>
        )}
      </Formik>
  );
};
