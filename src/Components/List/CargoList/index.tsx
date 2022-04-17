import React, { useState, FC } from 'react';
import { Item } from '../../Grid/Item';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Alert,
  Chip,
  Typography,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import RestoreFromTrashOutlinedIcon from '@mui/icons-material/RestoreFromTrashOutlined';
import { useDispatch, useSelector } from 'react-redux';
import { onMyWay, outFromStore } from '../../../redux/Action';
import { ModalEditCargo } from '../../Modals/ModalEditCargo';
import DirectionsBoatFilledIcon from '@mui/icons-material/DirectionsBoatFilled';
import AirplanemodeActiveIcon from '@mui/icons-material/AirplanemodeActive';
import DirectionsBusIcon from '@mui/icons-material/DirectionsBus';
import DirectionsSubwayIcon from '@mui/icons-material/DirectionsSubway';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import { formikTypes } from '../../../redux/Types';
import { ModalInArchive } from '../../Modals/ModalInArchive';

interface cargoListProps {
  cargo: formikTypes;
  state?: string;
}

export const CargoList: FC<cargoListProps> = ({ cargo, state }) => {
  const [expanded, setExpanded] = useState<string | false>(false);
  const redux = useSelector((state) => state.reducer);
  const reduxValue = [...redux];
  const dispatch = useDispatch();

  const arrayProduct = cargo?.product.split(',');
  const setState = state;
  const item = { ...cargo };

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  const handleClickOnMyWay = () => {
    item.onMyWay = true;
    const data = reduxValue.map((el) => {
      if (el.id === item.id) {
        return item;
      } else {
        return el;
      }
    });
    dispatch(onMyWay(data));
  };

  const handleClickOutFromStore = () => {
    const data = reduxValue.filter((i) => i.id !== item.id);
    dispatch(outFromStore(data));
  };

  return (
    <Item
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
      }}
      elevation={0}
    >
      <Accordion
        expanded={expanded === 'panel1'}
        onChange={handleChange('panel1')}
        sx={{ width: '80%' }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ flexGrow: 2, flexShrink: 1, flexBasis: 0 }}>
            {item?.nameCargo}
          </Typography>
          <Typography sx={{ flexGrow: 1, flexShrink: 1, flexBasis: 0 }}>
            {item?.volume}м³
          </Typography>
          <Typography sx={{ flexGrow: 1, flexShrink: 1, flexBasis: 0 }}>
            {item?.weight}кг
          </Typography>
          <Typography sx={{ flexGrow: 2, flexShrink: 1, flexBasis: 0 }}>
            {item?.departure} - {item?.arrival}
          </Typography>
          <Typography sx={{ flexGrow: 1, flexShrink: 1, flexBasis: 0 }}>
            {item?.typeTransportation === 'sea' ? (
              <DirectionsBoatFilledIcon color={'primary'} />
            ) : item?.typeTransportation === 'air' ? (
              <AirplanemodeActiveIcon color={'primary'} />
            ) : item?.typeTransportation === 'bus' ? (
              <DirectionsBusIcon color={'primary'} />
            ) : (
              <DirectionsSubwayIcon color={'primary'} />
            )}
          </Typography>
        </AccordionSummary>
        <AccordionDetails
          sx={{ display: 'flex', flexWrap: 'wrap', pr: '40px' }}
        >
          <Typography sx={{ flexGrow: 2, flexShrink: 1, flexBasis: 0 }}>
            {arrayProduct.map((product) => {
              return (
                <Chip sx={{ m: '1px' }} label={product} variant="outlined" />
              );
            })}
          </Typography>
          <Typography sx={{ flexGrow: 1, flexShrink: 1, flexBasis: 0 }}>
            {item?.price}руб
          </Typography>
          <Typography sx={{ flexGrow: 1, flexShrink: 1, flexBasis: 0 }}>
            {item?.luxury && item?.additionalDocuments
              ? 'Роскошь c доп. документами'
              : item?.luxury
              ? 'Роскошь без доп. документов'
              : 'Не роскошь'}
          </Typography>
          <Typography sx={{ flexGrow: 1, flexShrink: 1, flexBasis: 0 }}>
            Скорость доставки {item?.priority}
          </Typography>
        </AccordionDetails>
        <div>
          {setState === 'archive' ? (
            <>
              <Typography sx={{ flexGrow: 1, flexShrink: 1, flexBasis: 0 }}>
                рейтинг: {item?.rating}
              </Typography>
              <Typography sx={{ flexGrow: 1, flexShrink: 1, flexBasis: 0 }}>
                {item?.isDone ? (
                  <Alert severity="success">{item?.comment}</Alert>
                ) : (
                  <Alert severity="warning">{item?.comment}</Alert>
                )}
              </Typography>
            </>
          ) : null}
        </div>
      </Accordion>
      {setState === 'create' ? (
        <>
          <ModalEditCargo cargo={item} />
          <LocalShippingIcon color="info" onClick={handleClickOnMyWay} />
          <RestoreFromTrashOutlinedIcon
            color="info"
            onClick={handleClickOutFromStore}
          />
        </>
      ) : setState === 'onMyWay' ? (
        <ModalInArchive cargo={item} />
      ) : null}
    </Item>
  );
};
