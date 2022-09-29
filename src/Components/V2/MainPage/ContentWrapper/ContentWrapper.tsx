import React, { ReactNode } from 'react';
import { StyledContentWrapper, Wrapper } from './ContentWrapper.styles';

export const ContentWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <Wrapper>
      <StyledContentWrapper>{children}</StyledContentWrapper>
    </Wrapper>
  );
};
