import React from 'react';
import { Container, Typography, Button, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const KycHero: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Container maxWidth={false} disableGutters sx={{ pl: { xs: 4, md: 10 } }}>
      <Box sx={{ maxWidth: '600px', textAlign: 'left' }}>
        <Typography 
          variant="h2" 
          sx={{ 
            fontWeight: 700, 
            mb: 2, 
            color: 'white',
            lineHeight: 1.1,
            // Ensure Montserrat is loaded in your index.html
            fontFamily: '"Montserrat", sans-serif',
            letterSpacing: '-0.02em'
          }}
        >
          Verify Your Identity <br /> in Minutes
        </Typography>
        
        <Typography 
          variant="h6" 
          sx={{ 
            mb: 4, 
            opacity: 0.7, 
            color: 'white',
            fontWeight: 300,
            fontSize: '1.2rem',
            lineHeight: 1.6
          }}
        >
          Secure, fast, and compliant identity verification <br /> 
          built for the modern digital era.
        </Typography>

        <Button 
          variant="contained" 
          onClick={() => navigate('/verify')} // Navigates to your multi-step form
          sx={{ 
            bgcolor: '#003249', // Deep teal from your reference
            color: 'white',
            px: 4, 
            py: 1.5,
            borderRadius: '12px',
            fontSize: '1.1rem',
            fontWeight: 600,
            textTransform: 'none',
            boxShadow: '0 4px 20px rgba(0, 209, 255, 0.2)',
            '&:hover': {
              bgcolor: '#27474e',
              transform: 'translateY(-2px)'
            },
            transition: 'all 0.3s ease'
          }}
        >
          Start Verification
        </Button>
      </Box>
    </Container>
  );
};

export default KycHero;