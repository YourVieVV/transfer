import React, { useState } from 'react';
import { Item } from '../../Grid/Item';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Chip,
  Typography,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import RestoreFromTrashOutlinedIcon from '@mui/icons-material/RestoreFromTrashOutlined';
import { useDispatch } from 'react-redux';
import { outFromStore } from '../../../redux/Action';
import ModalEditCargo from '../../Modals/ModalEditCargo';
import DirectionsBoatFilledIcon from '@mui/icons-material/DirectionsBoatFilled';
import AirplanemodeActiveIcon from '@mui/icons-material/AirplanemodeActive';
import DirectionsBusIcon from '@mui/icons-material/DirectionsBus';
import DirectionsSubwayIcon from '@mui/icons-material/DirectionsSubway';

// @ts-ignore
export const CargoList = ({ cargo }) => {
  const [expanded, setExpanded] = useState<string | false>(false);

  const dispatch = useDispatch();

  const arrayProduct = cargo?.product.split(',');

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <Item
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
      }}
    >
      <Accordion
        expanded={expanded === 'panel1'}
        onChange={handleChange('panel1')}
        sx={{ width: '90%' }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ flexGrow: 2, flexShrink: 1, flexBasis: 0 }}>
            {cargo?.nameCargo}
          </Typography>
          <Typography sx={{ flexGrow: 1, flexShrink: 1, flexBasis: 0 }}>
            {cargo?.volume}м³
          </Typography>
          <Typography sx={{ flexGrow: 1, flexShrink: 1, flexBasis: 0 }}>
            {cargo?.weight}кг
          </Typography>
          <Typography sx={{ flexGrow: 3, flexShrink: 1, flexBasis: 0 }}>
            {cargo?.departure} - {cargo?.arrival}
          </Typography>
          <Typography sx={{ flexGrow: 1, flexShrink: 1, flexBasis: 0 }}>
            {cargo?.typeTransportation === 'sea' ? (
              <DirectionsBoatFilledIcon color={'primary'} />
            ) : cargo?.typeTransportation === 'air' ? (
              <AirplanemodeActiveIcon color={'primary'} />
            ) : cargo?.typeTransportation === 'bus' ? (
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
            {cargo?.price}руб
          </Typography>
          <Typography sx={{ flexGrow: 1, flexShrink: 1, flexBasis: 0 }}>
            {cargo?.luxury && cargo?.additionalDocuments
              ? 'Роскошь c доп. документами'
              : cargo?.luxury
              ? 'Роскошь без доп. документов'
              : 'Не роскошь'}
          </Typography>
          <Typography sx={{ flexGrow: 1, flexShrink: 1, flexBasis: 0 }}>
            Скорость доставки {cargo?.priority}
          </Typography>
        </AccordionDetails>
      </Accordion>
      <ModalEditCargo cargo={cargo} />
      <RestoreFromTrashOutlinedIcon
        onClick={() => dispatch(outFromStore({ ...cargo }))}
      />
    </Item>
  );
};
