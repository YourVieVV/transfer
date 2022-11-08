import React, { useEffect, useRef, useState } from 'react';
import {
  BackgroundWorldMap,
  BackgroundWorldMapWrapper,
} from '../StyledComponents/Wrappers';
import Map from '../../images/RussianMap.jpeg';
import { ContentWrapper } from '../V2/MainPage/ContentWrappers';
import {
  FlexItem,
  FlexWrapper,
} from '../StyledComponents/Wrappers/FlexWrappers';
import { AuthForm, LoginForm } from './AuthForm';
import { Test } from '../../Animations/StyledComponentAnimation';
import { Button, styled } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import { LoginFields } from './AuthForm/LoginForm/LoginFields';

export const AAA = styled('button')(({ isAnimation }) => ({
  position: 'absolute',
  transition: '1s',
}));

export const AuthPage = () => {
  const [animation, setAnimation] = useState(false);
  const qwe = useRef<any>(null);
  useEffect(() => {
    console.log('==========>qwe.current = ', qwe.current);

    const random = (min, max) => {
      console.log('==========> = ');
      const rand = min + Math.random() * (max - min + 1);
      return Math.floor(rand);
    };

    qwe.current?.addEventListener(
      'mouseenter',
      () => {
        console.log('==========> = ');
        qwe.current.style.left = `${random(0, 90)}%`;
        qwe.current.style.top = `${random(0, 90)}%`;
      },
      false
    );
  }, []);

  return (
    <div>
      <BackgroundWorldMapWrapper>
        <BackgroundWorldMap src={Map} scale="scale(1)" />
        <ContentWrapper>
          <FlexWrapper gap="30px" justifyContent="center" height="100vh">
            <FlexItem width="770px" alignItems="center">
              <AuthForm setter={setAnimation} />
            </FlexItem>
          </FlexWrapper>
          <div
            style={{
              width: '100vw',
              height: '100vh',
              backgroundColor: `rgb(124,115,207)`,
            }}
          >
            <AAA ref={qwe} id={'btn'}>
              CLICK
            </AAA>
          </div>
        </ContentWrapper>
      </BackgroundWorldMapWrapper>
    </div>
  );
};
