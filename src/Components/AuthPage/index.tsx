import React from 'react';
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
import { AuthForm } from './AuthForm';
import {initialValueFormik} from "../../Types";
import {MainSchema} from "../V1/ValidationShema";
import { Formik } from 'formik';

// ---------- Что бы кнопка убегала ------------
// export const AAA = styled('button')(({ isAnimation }) => ({
//   position: 'absolute',
//   transition: '1s',
// }));
// ---------- Что бы кнопка убегала ------------

export const AuthPage = () => {
  // ---------- Что бы кнопка убегала ------------
  // const qwe = useRef<any>(null);
  // useEffect(() => {
  //   const random = (min: number, max: number) => {
  //     const rand = min + Math.random() * (max - min + 1);
  //     return Math.floor(rand);
  //   };
  //
  //   qwe.current?.addEventListener(
  //     'mouseenter',
  //     () => {
  //       qwe.current.style.left = `${random(0, 90)}%`;
  //       qwe.current.style.top = `${random(0, 90)}%`;
  //     },
  //     false
  //   );
  // }, []);
  // ---------- Что бы кнопка убегала ------------

  return (
      <Formik
          initialValues={initialValueFormik}
          onSubmit={(values) => {
            console.log(values);
          }}
          validationSchema={MainSchema}
      >
        {() => (
    <div>
      <BackgroundWorldMapWrapper>
        <BackgroundWorldMap src={Map} scale="scale(1)" />
        <ContentWrapper>
          <FlexWrapper gap="30px" justifyContent="center" height="100vh">
            <FlexItem width="770px" alignItems="center">
              <AuthForm />
            </FlexItem>
          </FlexWrapper>

          {/*---------- Что бы кнопка убегала ------------*/}
          {/*<div*/}
          {/*  style={{*/}
          {/*    width: '100vw',*/}
          {/*    height: '100vh',*/}
          {/*    backgroundColor: `rgb(124,115,207)`,*/}
          {/*  }}*/}
          {/*>*/}
          {/*  <AAA ref={qwe} id={'btn'}>*/}
          {/*    CLICK*/}
          {/*  </AAA>*/}
          {/*</div>*/}
          {/*---------- Что бы кнопка убегала ------------*/}
        </ContentWrapper>
      </BackgroundWorldMapWrapper>
    </div>
  )}
</Formik>
  );
};
