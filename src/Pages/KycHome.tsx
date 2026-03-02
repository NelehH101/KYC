import React from 'react';
import { Box, GlobalStyles } from '@mui/material';
import KycHero from '../components/KycHero';
import KycFeatures from '../components/KycFeatures';
import KycFinalSections from '../components/KycFinalSections';

const KycHome: React.FC = () => {
  return (
    <Box 
      sx={{ 
        width: '100%', 
        minHeight: '100vh', 
        bgcolor: '#000',
        overflowX: 'hidden', // Prevents horizontal jitter
        position: 'relative',
      }}
    >
      {/* 1. GLOBAL SCROLLBAR HIDER */}
      {/* This ensures that even though the page is long, the physical bar is invisible */}
      <GlobalStyles styles={{
        'body, html': {
          backgroundColor: '#000',
          margin: 0,
          padding: 0,
          scrollbarWidth: 'none', // Firefox
          msOverflowStyle: 'none', // IE/Edge
        },
        'body::-webkit-scrollbar': {
          display: 'none', // Chrome/Safari/Opera
        }
      }} />

      {/* SECTION 1: HERO */}
      {/* Uses backgroundAttachment: 'fixed' for that premium parallax effect */}
      <Box
        sx={{
          width: '100%',
          height: '100vh',
          backgroundImage: "url('/hero.jpg')", 
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed', 
          backgroundColor: '#000',
          display: 'flex',
        }}
      >
        <Box
          sx={{
            width: '100%',
            height: '100%',
            // Dark gradient overlay to make text pop
            background: 'linear-gradient(to right, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.3) 100%)',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <KycHero />
        </Box>
      </Box>

      {/* SECTION 2: PROTECTED, VERIFIED, SEAMLESS */}
      <Box sx={{ position: 'relative', zIndex: 2, bgcolor: '#000' }}>
        <KycFeatures />
      </Box>

      {/* SECTION 3: EVERYTHING YOU NEED + FOOTER */}
      <Box sx={{ position: 'relative', zIndex: 2, bgcolor: '#000' }}>
        <KycFinalSections /> 
      </Box>
    </Box>
  );
};

export default KycHome;