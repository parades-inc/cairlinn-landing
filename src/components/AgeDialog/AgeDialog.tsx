import {FC, useState} from 'react';
import {Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, Typography} from '@mui/material';
import logoTeal from '../../assets/images/CairlinnBayLogo-teal.png';


export const AgeDialog: FC = () => {
  const [isOpen, setIsOpen] = useState(true);
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
        <DialogContent>
          <Box>
            <img className='logo' src={logoTeal}/>
          </Box>
          <Box sx={{
            color: '#211F1D !important',
            margin: '75px 0'
          }}>
            <Typography variant={'h5'} sx={{
              color: '#211F1D !important',
              opacity: 0.8
            }}>By entering this site, you are confirmingthat you are of legal drinking age</Typography>
          </Box>
          <Box sx={{}}>
            <Button variant={'contained'} onClick={() => setIsOpen(false)}>
              Enter
            </Button>
          </Box>

        </DialogContent>
      </Dialog>
    </div>
  );
};
