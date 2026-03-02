import React from 'react';
import { Box, Container, Typography, Stack } from '@mui/material';

const KycFeatures: React.FC = () => {
  return (
    <Box sx={{ py: 15, bgcolor: '#ffffff', color: '#000' }}> 
      {/* 1. maxWidth={false} and disableGutters removes the default centered margins */}
      <Container maxWidth={false} disableGutters sx={{ px: { xs: 2, md: 5 } }}> 
        <Box sx={{ 
          display: 'flex', 
          flexDirection: { xs: 'column', md: 'row' }, 
          alignItems: 'center', 
          gap: 4 // Reduced gap to keep the phone and text closer
        }}>
          
          {/* 2. Left Side: Phone Mockup - Removed flex: 1 to let it sit naturally on the left */}
          <Box sx={{ width: { xs: '100%', md: '45%' }, display: 'flex', justifyContent: 'flex-start' }}>
            <Box
              component="img"
              src="/phone.png" 
              sx={{ 
                width: '100%', 
                maxWidth: '650px', // Increased size slightly to fill the left space
                height: 'auto',
                display: 'block'
              }}
              alt="Phone Mockup"
            />
          </Box>

          {/* Right Side: Text Content */}
          <Box sx={{ flex: 1, width: '100%', pl: { md: 5 } }}>
            <Typography 
              variant="h3" 
              sx={{ 
                fontWeight: 600, 
                mb: 4, 
                fontFamily: '"Montserrat", sans-serif',
                color: '#1a1a1a'
              }}
            >
              Protected, Verified, {' '}
              <Box
                component="span"
                sx={{
                  // Applied the 3-stop gradient from your Figma
                  background: 'linear-gradient(90deg, #285E6D 20%, #BEB51D 44%, #003249 88%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  display: 'inline-block'
                }}
              >
                Seamless
              </Box>
            </Typography>

            <Stack spacing={3}>
              <Typography 
                variant="h6" 
                sx={{ 
                  fontWeight: 400, 
                  lineHeight: 1.6, 
                  color: '#444',
                  fontSize: '1.25rem'
                }}
              >
                Send and receive payments with <span style={{ color: '#f1d302', fontWeight: 600 }}>built-in trust</span> 
                — no risk, no uncertainty, <span style={{ color: '#508991', fontWeight: 600 }}>just secure transactions.</span>
              </Typography>
            </Stack>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default KycFeatures;