import React, { FC, useEffect, useState } from 'react';
import {
  SlideInLeftField,
  WobbleWrapperButton,
  ZoomInUpButton,
} from '../../../../Animations/StyledComponentAnimation';
import {
  FlexItem,
  FlexWrapper,
} from '../../../StyledComponents/Wrappers/FlexWrappers';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { LoginFields } from './LoginFields';
import { SimpleSnackbar } from '../Snackbar';
import {formikTypes, ILogin, TEXT} from '../../../../Types';
import { useButtonAnimationTimeout } from '../../../../hooks/useButtonAnimationTimeout';
import {useFormikContext} from "formik";
import {useAppDispatch} from "../../../../hooks/newReduxHook";
import { fetchRelatedPersons} from "../../../../newRedux/reduxSlice/userSlice";
import {userAuthApi} from "../../../../newRedux/services/UserService";

export const LoginForm: FC = () => {
    const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { buttonAnimation, setButtonAnimation } = useButtonAnimationTimeout();

    const { values, handleChange, handleBlur } = useFormikContext<formikTypes>();

  const [loginUser, {}] = userAuthApi.useFetchLoginDataMutation();

  const handleLogin = async () => {
      // dispatch(fetchRelatedPersons());
      setButtonAnimation(true);
      // navigate('/');
      const loginData:ILogin =     {
          name:values.login,
          password:values.password
      }
      await loginUser({body:loginData})
  }

  return (
    <FlexWrapper flexWrap="wrap" gap="10px">
      <LoginFields />

      <FlexItem width="100%" justifyContent="space-around">
        <SimpleSnackbar text={TEXT.PASSWORD} />
        <WobbleWrapperButton isAnimation={buttonAnimation}>
          <ZoomInUpButton
            variant="contained"
            onClick={handleLogin}
          >
            Авторизоваться!
          </ZoomInUpButton>
        </WobbleWrapperButton>
      </FlexItem>
    </FlexWrapper>
  );
};
