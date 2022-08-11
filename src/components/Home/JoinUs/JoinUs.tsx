import React, { FC, useState } from 'react';
import './joinUs.css';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore: hot fix for https://github.com/uNmAnNeR/imaskjs/issues/554
import {IMaskInput} from 'react-imask';
import joinUsImage from '../../../assets/images/joinUsImage.jpg';
import {Box, Button, FormControl, Input, Typography} from '@mui/material';
import { TextField } from '@mui/material';
import axios from 'axios';

interface CustomProps {
  onChange: (event: { target: { name: string; value: string } }) => void;
  name: string;
}

const TextMaskCustom = React.forwardRef<HTMLElement, CustomProps>(
  function TextMaskCustom(props) {
    const { onChange, ...other } = props;
    return (
      <IMaskInput
        {...other}
        mask={'##/##/####'}
        definitions={{
          '#': /[0-9]/,
        }}
        onAccept={(value: any) => onChange({ target: { name: props.name, value } })}
        overwrite
      />
    );
  },
);

export const JoinUs: FC = () => {

  const [formState, setFormState] = useState({
    email: '',
    dob: '',
    zip: ''
  });

  const [responseState, setResponseState] = useState<string>('');
  const [submitState, setSumbitState] = useState<boolean>(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormState({ ...formState, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement> | React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await axios.post('https://sheet.best/api/sheets/74d5e431-f9f3-40e9-8052-1c282f3ca645', formState);
      setSumbitState(true);
      setResponseState('Great to have you aboard! You\'ll be first to know when we go live!');
    } catch {
      console.log('Error');
      setResponseState('There was an issue saving your information, please try agian later.');
    }
  };

  return (
    <Box id='join-us' sx={{
      overflow: 'hidden',
      display: 'flex',
      position: 'relative',
      alignItems: 'center',
      maxWidth: { xs: '90vw', xl: '1440px' },
      margin: '100px auto',
    }}>
      <Box className="join-us-container" sx={{
        display: 'flex',
        justifyContent: { xs: 'center' },
        alignItems: 'center',
        backgroundColor: { xs: '#2C2A27', xl: 'rgba(0,0,0,0)' }, //
        maxWidth: { xs: '90vw', xl: '100%' },
        margin: '0 auto',
        borderRadius: '16px',
        padding: { xs: '50px 0', lg: 0 },
      }}>
        <Box
          component="img"
          sx={{
            position: 'relative',
            display: { xs: 'none', md: 'block' },
            zIndex: -10,
            maxWidth: { xs: '90vw', xl: '1440px' },
            borderRadius: '16px',
          }}
          alt="The house from the offer."
          src={joinUsImage}
        />
        <Box className={'join-us-content'} sx={{
          position: 'absolute',
          textAlign: { xs: 'center', xl: 'left' },
          maxWidth: { xs: '80%', xl: '30%' },
          left: { xs: 'inherit', xl: '5rem' }
        }}>
          { !submitState ? (
            <>
              <Box className="join-us-text" sx={{
                marginBottom: '25px'
              }}>
                <Typography variant="h1">Join Us</Typography>
              </Box>
              <Box component={'form'}>
                <FormControl fullWidth>
                  <TextField
                    placeholder="Email"
                    name={'email'}
                    value={formState.email}
                    onChange={handleChange}
                    variant={'outlined'}
                    InputProps={{
                      inputProps: {
                        style: {textAlign: 'center', fontSize: 20},
                      }
                    }}/>
                </FormControl>
                <FormControl fullWidth>
                  <TextField
                    placeholder="DOB (MM/DD/YYYY)"
                    name={'dob'}
                    value={formState.dob}
                    onChange={handleChange}
                    variant={'outlined'}
                    InputProps={{
                      inputComponent: TextMaskCustom as any,
                      inputProps: {
                        style: {textAlign: 'center', fontSize: 20},
                      }
                    }}
                  />
                </FormControl>
                <FormControl fullWidth>
                  <TextField
                    placeholder="ZIP CODE"
                    value={formState.zip}
                    name={'zip'}
                    onChange={handleChange}
                    variant={'outlined'}
                    InputProps={{
                      inputProps: {
                        style: {textAlign: 'center', fontSize: 20},
                      }
                    }}/>
                </FormControl>
                <Button color="primary" fullWidth variant={'contained'} onClick={handleSubmit}>GET NOTIFIED</Button>
              </Box>
            </>
          ) : (
            <Box sx={{
              padding: '10vw',
              backgroundColor: 'rgba(44, 42, 39, 0.6)',
              borderRadius: '16px'
            }}
            >
              <Typography variant={'h5'}>{ responseState }</Typography>
            </Box>
          )}
          <Box sx={{
            marginTop: 4
          }}>
            <a href={'mailto:info@cairlinnbay.com'}>
              <Button color="secondary" fullWidth variant={'contained'} onClick={handleSubmit} sx={{
                color: 'rgba(0, 0, 0, 0.4) !important',
              }}>CONTACT US</Button>
            </a>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
