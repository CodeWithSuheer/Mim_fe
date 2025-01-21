import { m } from 'framer-motion';
// @mui
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Container from '@mui/material/Container';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';

// components
import { MotionViewport, varFade } from 'src/components/animate';

import { IconButton } from '@mui/material';

// ----------------------------------------------------------------------

export default function ContactForm() {
  return (
    <Container>

      <m.div variants={varFade().inUp}>
        <Typography
          variant="h1"
          align="center"
          color={'#A70E16'}
          sx={{
            mb: 6,
            fontSize: { xs: '2.5rem', md: '3rem' },
            fontWeight: 700,
            color: '#A70E16',
            position: 'relative',
            display: 'inline-block',
            left: '50%',
            transform: 'translateX(-50%)',
            '&::after': {
              content: '""',
              position: 'absolute',
              bottom: -8,
              left: 0,
              width: '100%',
              height: '3px',
              backgroundColor: '#A70E16',
            }
          }}
        >
          Contact Us
        </Typography>
      </m.div>
      <m.div variants={varFade().inUp}>
        <Typography variant="body1" component="h2" align="center" sx={{ mb: 8, fontSize: { xs: '1.4rem', md: '1.8rem' }, fontWeight: 700 }}>
          We would love to hear from you
        </Typography>
      </m.div>
      <Stack direction={{ xs: 'column', md: 'row' }} spacing={0} sx={{ width: "100%" }}>
      <Stack 
      spacing={3} 
      sx={{
        flex: 1, 
        backgroundColor: '#8D2828', 
        color: '#F9D849', 
        p: 4, 
        borderRadius: 2, 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundImage: 'url(/assets/images/contact/form_1.png)',
      }}
    >
      <Typography 
        variant="h1" 
        sx={{ 
          fontWeight: 700, 
          fontSize: { xs: '1.4rem', md: '1.8rem' }, 
          textAlign: 'left' 
        }}
      >
        Contact Information
      </Typography>
      
      <Typography 
        variant="h4" 
        sx={{ 
          textAlign: 'left', 
          fontSize: { xs: '0.8rem', md: '1.1rem' }, 
          fontWeight: 400, 
          color: '#EAEAEA' 
        }}
      >
        Say something to start a live chat!
      </Typography>
      
      <Stack direction="column" spacing={3} sx={{ mt: 2 }}>
        <Stack direction="row" alignItems="center" spacing={2}>
          <img src="/assets/images/contact/phone.png" alt="Phone" style={{ color: '#F9D849',width:24,height:24,objectFit:"cover" }} />
          <Typography variant="body2">+1 (929) 224-1494</Typography>
        </Stack>

        <Stack direction="row" alignItems="center" spacing={2}>
          <img src="/assets/images/contact/email.png" alt="Email" style={{ color: '#F9D849',width:24,height:24,objectFit:"cover"  }} />
          <Typography variant="body2">demo@gmail.com</Typography>
        </Stack>

        <Stack direction="row" alignItems="center" spacing={2}>
          <img src="/assets/images/contact/location.png" alt="Location" style={{ color: '#F9D849',width:24,height:24,objectFit:"cover"  }} />
          <Typography variant="body2">
            2957 Brighton 8 street Brooklyn, NY, 11235
          </Typography>
        </Stack>
      </Stack>

      <Stack direction="row" spacing={2} sx={{ mt: 3 }}>
        <IconButton sx={{ backgroundColor: '#000', color: '#F9D849' }}>
          <img src="/assets/images/contact/twitter.png" alt="Twitter" style={{width:24,height:24,objectFit:"cover" }} />
        </IconButton>
        <IconButton sx={{ backgroundColor: '#F9D849', color: '#000' }}>
          <img src="/assets/images/contact/instagram.png" alt="Instagram" style={{width:24,height:24,objectFit:"cover" }}  />
        </IconButton>
        <IconButton sx={{ backgroundColor: '#000', color: '#F9D849' }}>
          <img src="/assets/images/contact/discord.png" alt="Chat" style={{width:24,height:24,objectFit:"cover" }}  />
        </IconButton>
      </Stack>
    </Stack>

    <Stack 
      spacing={3} 
      sx={{ 
        flex: 2, 
        p: 5, 
        width: "100%", 
        backgroundColor: '#FFFFFF', 
        boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)', 
        borderRadius: 3 
      }}
    >
      <Stack direction="row" spacing={3}>
        <TextField 
          fullWidth 
          label="First Name" 
          variant='standard' 
          InputLabelProps={{ shrink: true, style: { color: '#B3B3B3', fontSize: '14px' } }}
          sx={{ '& input': { fontWeight: 400, fontSize: '16px' } }}
        />
        <TextField 
          fullWidth 
          label="Last Name" 
          variant='standard' 
          defaultValue="Doe"
          InputLabelProps={{ shrink: true, style: { color: '#B3B3B3', fontSize: '14px' } }}
          sx={{ '& input': { fontWeight: 600, fontSize: '16px', color: '#666' } }}
        />
      </Stack>

      <Stack direction="row" spacing={3} sx={{position:"relative"}}>
        <TextField 
          fullWidth 
          label="Email" 
          variant='standard' 
          InputLabelProps={{ shrink: true, style: { color: '#B3B3B3', fontSize: '14px' } }}
        />
        <TextField 
          fullWidth 
          label="Phone Number" 
          variant='standard' 
          defaultValue="+1 012 3456 789"
          InputLabelProps={{ shrink: true, style: { color: '#B3B3B3', fontSize: '14px' } }}
          sx={{ '& input': { fontWeight: 600, fontSize: '16px', color: 'black' } }}
        />
      </Stack>

      <Typography variant="body1" sx={{ fontWeight: 600 }}>
        Select Subject?
      </Typography>
      <FormControl>
        <RadioGroup defaultValue="general" row>
        
          <FormControlLabel 
            value="support" 
            control={<Radio sx={{ color: 'black', '&.Mui-checked': { color: 'black' } }} />} 
            label="General Inquiry" 
          />
          <FormControlLabel 
            value="feedback" 
            control={<Radio sx={{ color: 'black', '&.Mui-checked': { color: 'black' } }} />} 
            label="General Inquiry" 
          />
          <FormControlLabel 
            value="other" 
            control={<Radio sx={{ color: 'black', '&.Mui-checked': { color: 'black' } }} />} 
            label="General Inquiry" 
          />
        </RadioGroup>
      </FormControl>

      <TextField 
        fullWidth 
        label="Message" 
        multiline 
        rows={4} 
        variant='standard' 
        placeholder="Write your message.." 
        InputLabelProps={{ shrink: true, style: { color: '#B3B3B3', fontSize: '14px' } }}
      />

      <Button 
        size="large" 
        variant="contained" 
        sx={{ 
          backgroundColor: '#FFEB3B', 
          color: 'black', 
          fontWeight: 600, 
          borderRadius: '10px', 
          px: 4, 
          py: 1.5, 
          alignSelf: "flex-end", 
          marginLeft: 'auto',
          '&:hover': { backgroundColor: '#FDD835' }
        }}
      >
        Send Message
      </Button>

      {/* <img
        src={'/assets/images/contact/vector.png'}
        alt="Paper Plane Vector"
        style={{
          // position: "absolute",
          // bottom: "-10px",
          // right: "-30px",
          width: "150px",
          height: "auto",
          marginLeft:"auto",
          alignSelf: "flex-end", 
          
        }}
      /> */}
    </Stack>
      </Stack>
    </Container>
  );
}
