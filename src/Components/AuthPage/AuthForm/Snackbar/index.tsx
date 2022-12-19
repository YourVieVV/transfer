import React from 'react';
import { Button, Snackbar } from '@mui/material';
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';
import { ZoomInUpButton } from '../../../../Animations/StyledComponentAnimation';
import { MESSAGES, TEXT } from '../../../../Types';

type SimpleSnackbarProps = {
  text: string;
};

export const SimpleSnackbar: React.FC<SimpleSnackbarProps> = ({ text }) => {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const action = (
    <React.Fragment>
      <Button color="secondary" size="small" onClick={handleClose}>
        Закрыть
      </Button>
    </React.Fragment>
  );
  const message = text === TEXT.PASSWORD ? MESSAGES.PITY : MESSAGES.BEST_HELP;

  return (
    <div>
      <ZoomInUpButton style={{ color: 'white' }} onClick={handleClick}>
        {text}
      </ZoomInUpButton>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message={message}
        action={action}
      />
    </div>
  );
};
