import {FC, useEffect, useState} from 'react';
import {Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, Typography} from '@mui/material';
import logoTeal from '../../assets/images/CairlinnBayLogo-teal.png';
import {useCookies} from 'react-cookie';


export const AgeDialog: FC = () => {
  const [cookies, setCookie, removeCookie] = useCookies(['ageCheck']);
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    if (cookies.ageCheck) {
      setIsOpen(false);
    }
  }, []);

  const hidePrompt = () => {
    setCookie('ageCheck', true);
    setIsOpen(false);
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
            }}>By entering this site, you are confirming that you are of legal drinking age</Typography>
          </Box>
          <Box sx={{
            marginBottom: '51px'
          }}>
            <Button variant={'contained'} onClick={hidePrompt} sx={{
              fontSize: '24px !important',
              padding: '16px 20px 8px 20px !important',
            }}>
              Enter
            </Button>
          </Box>

        </DialogContent>
      </Dialog>
    </div>
  );
};
