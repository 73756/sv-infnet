import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const FooterContainer = styled('footer')(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  padding: theme.spacing(2),
  marginTop: 'auto',
}));

const Footer = () => {
  return (
    <FooterContainer>
      <Box textAlign="center">
        <Typography variant="body2" color="text.secondary">
          © {new Date().getFullYear()} My App. All rights reserved.
        </Typography>
      </Box>
    </FooterContainer>
  );
};

export default Footer;
