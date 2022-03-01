import React, {FC, useEffect, useState} from 'react';
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText, FormControl,
  TextField,
  Typography
} from '@mui/material';
import logoTeal from '../../assets/images/CairlinnBayLogo-teal.png';
import {useCookies} from 'react-cookie';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import {IMaskInput} from 'react-imask';
import moment from 'moment';

interface CustomProps {
  onChange: (event: { target: { name: string; value: string } }) => void;
  name: string;
}

const TextMaskCustom = React.forwardRef<HTMLElement, CustomProps>(
  function TextMaskCustom(props, ref) {
    const { onChange, ...other } = props;
    return (
      <IMaskInput
        {...other}
        mask={'##/##/####'}
        definitions={{
          '#': /[0-9]/,
        }}
        inputRef={ref}
        onAccept={(value: any) => onChange({ target: { name: props.name, value } })}
        overwrite
      />
    );
  },
);


export const AgeDialog: FC = () => {
  const [cookies, setCookie, removeCookie] = useCookies(['ageCheck']);
  const [isOpen, setIsOpen] = useState(true);
  const [formState, setFormState] = useState({
    dob: '',
  });
  const [isValid, setIsValid] = useState(true);

  // useEffect(() => {
  //   if (cookies.ageCheck) {
  //     setIsOpen(false);
  //   }
  // }, []);

  useEffect(() => {
    const enteredDate = moment(formState.dob);
    setIsValid(moment(formState.dob, 'MM/DD/YYYY', true).isValid() && moment().subtract('21', 'years') > enteredDate);
  }, [formState.dob]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormState({ ...formState, [event.target.name]: event.target.value });
  };

  const hidePrompt = (e: React.MouseEvent<HTMLButtonElement> | React.FormEvent<HTMLFormElement>) => {
    // setCookie('ageCheck', true);
    e.preventDefault();
    if (isValid) {
      setIsOpen(false);
    }
  };

  return (
    <div id='age-dialog'>
      <Dialog open={isOpen} maxWidth={'md'} PaperProps={{
        sx: {
          backgroundColor: '#FAF7ED',
          borderRadius: '16px',
          textAlign: 'center',
          width: '800px'
        }
      }}>
        <DialogContent sx={{
          padding: 0
        }}>
          <Box sx={{
            marginTop: '37px'
          }}>
            <img className='logo' src={logoTeal}/>
          </Box>
          <Box sx={{
            color: '#211F1D !important',
            margin: '60px 0'
          }}>
            <Typography variant={'h5'} sx={{
              color: '#211F1D !important',
              opacity: 0.8,
              margin: '0 auto',
              maxWidth: '500px',
              padding: '0 25px'
            }}>You must confirm that you are above the age of 21</Typography>
          </Box>
          <Box>
            <form onSubmit={hidePrompt}>
              <FormControl>
                <TextField
                  placeholder="DOB (MM/DD/YYYY)"
                  name={'dob'}
                  value={formState.dob}
                  onChange={handleChange}
                  variant={'outlined'}
                  sx={{
                    input: {
                      color: '#211F1D !important'
                    },
                    backgroundColor: 'rgba(0,0,0,0) !important',
                  }}
                  InputProps={{
                    inputComponent: TextMaskCustom as any,
                    inputProps: {
                      style: {
                        textAlign: 'center',
                        fontSize: 20,
                        backgroundColor: 'clear',
                        color: 'black'
                      },
                    }
                  }}
                />
              </FormControl>
            </form>
          </Box>
          <Box sx={{
            marginBottom: '51px'
          }}>
            <Button
              variant={'contained'}
              onClick={hidePrompt}
              sx={{
                fontSize: '24px !important',
                padding: '16px 20px 8px 20px !important',
              }}
              disabled={!isValid}
            >
              Enter
            </Button>
          </Box>
        </DialogContent>
      </Dialog>
    </div>
  );
};
