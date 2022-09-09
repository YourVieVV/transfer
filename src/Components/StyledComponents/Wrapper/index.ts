import styled from '@emotion/styled';
import World from '../../../images/WorldMap.jpeg';
export const Wrapper = styled.div`
  padding: 2em 0 0 0;
`;

export const UpWrapper = styled.div`
  min-height: 27vh;
`;

// export const BackgroundWorldMapWrapper = styled.div`
//   position: relative;
//   overflow: hidden;
//   width: 100%;
//   height: 100%;
// `;
//
// export const BackgroundWorldMap = styled.img`
//   position: absolute;
//   width: 100%;
//   height: 100%;
//   display: block;
//   transform: scale(1.3);
// `;
export const BackgroundWorldMapWrapper = styled.div`
  position: relative;
  overflow: hidden;
  width: 100vw;
  height: 100vh;
`;

export const BackgroundWorldMap = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(1.3);
  object-fit: cover;
  width: 100vw;
  height: 100vh;
  //opacity: 0.8;
`;
