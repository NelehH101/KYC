import React from 'react';
import { Box, Container, Typography, Button, Stack } from '@mui/material';
import { VerifiedUser, Security, Public, Bolt } from '@mui/icons-material';

const KycFinalSections: React.FC = () => {
  const features = [
    { icon: <VerifiedUser />, title: "Identity Verification", text: "AI-powered document scanning that verifies passports, IDS, and driver's licenses in seconds with 99.7% accuracy." },
    { icon: <Security />, title: "Risk Assessment", text: "Real-time fraud detection using machine learning models trained on billions of data points to flag suspicious activity." },
    { icon: <Public />, title: "Global Compliance", text: "Stay compliant with AML, KYC, and GDPR regulations across 190+ countries with automatic regulatory updates." },
    { icon: <Bolt />, title: "Fast Integration", text: "API-first architecture with SDKs for every major platform. Go live in minutes, not months." }
  ];

  return (
    <Box sx={{ bgcolor: '#000', color: 'white', fontFamily: '"Montserrat", sans-serif' }}>
      
      {/* SECTION: FEATURE GRID */}
      <Container maxWidth="lg" sx={{ py: 12, textAlign: 'center' }}>
        <Typography variant="overline" sx={{ color: '#003249', fontWeight: 700, letterSpacing: 3 }}>
          FEATURES
        </Typography>
        
        <Typography variant="h3" sx={{ fontWeight: 800, mt: 2, mb: 2, fontSize: { xs: '2rem', md: '3.5rem' } }}>
          Everything you need for {' '}
          <Box component="span" sx={{
            background: 'linear-gradient(90deg, #285E6D 20%, #BEB51D 44%, #003249 88%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}>
            seamless KYC
          </Box>
        </Typography>
        
        <Typography variant="body1" sx={{ opacity: 0.6, mb: 10, maxWidth: '600px', mx: 'auto' }}>
          End-to-end identity verification built for speed, security, and scale.
        </Typography>

        <Box sx={{ 
          display: 'grid', 
          gridTemplateColumns: { xs: '1fr', md: 'repeat(4, 1fr)' }, 
          gap: 3 
        }}>
          {features.map((f, i) => (
            <Box key={i} sx={{
              p: 4, 
              textAlign: 'left',
              bgcolor: '#07080B', // Darker background for the cards
              borderRadius: '16px',
              border: '1px solid rgba(255, 255, 255, 0.05)',
              position: 'relative',
              transition: 'all 0.3s ease',
              // This creates the blue "glow" from your design
              '&:hover': {
                borderColor: '#27474e',
                boxShadow: '0px 0px 30px #003249',
                transform: 'translateY(-10px)'
              }
            }}>
              <Box sx={{ 
                width: '40px', height: '40px', borderRadius: '8px', 
                bgcolor: 'rgba(40, 94, 109, 0.2)', display: 'flex', 
                alignItems: 'center', justifyContent: 'center', color: '#285E6D', mb: 3 
              }}>
                {f.icon}
              </Box>
              <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, fontSize: '1.1rem' }}>{f.title}</Typography>
              <Typography variant="body2" sx={{ opacity: 0.5, lineHeight: 1.8, fontSize: '0.9rem' }}>{f.text}</Typography>
            </Box>
          ))}
        </Box>
      </Container>

      {/* SECTION: TEAL CTA FOOTER */}
      <Box sx={{ 
        bgcolor: '#003249', // The exact teal from your stops
        py: 12, 
        textAlign: 'center',
        borderTop: '1px solid rgba(255,255,255,0.1)'
      }}>
        <Container maxWidth="md">
          <Typography variant="h2" sx={{ fontWeight: 800, mb: 3, fontSize: { xs: '2.5rem', md: '4rem' } }}>
            Ready to Get Verified?
          </Typography>
          <Typography variant="h6" sx={{ opacity: 0.8, mb: 6, fontWeight: 400, maxWidth: '700px', mx: 'auto' }}>
            Join thousands of verified users. Complete your KYC process in less than 5 minutes.
          </Typography>
          
          <Button variant="contained" sx={{ 
            bgcolor: '#f1d302', // Yellow from your stops
            color: '#000', 
            fontWeight: 800, 
            px: 6, py: 2, 
            fontSize: '1.1rem',
            borderRadius: '12px',
            textTransform: 'none',
            '&:hover': { bgcolor: '#e6db1e', transform: 'scale(1.05)' },
            transition: 'all 0.2s ease'
          }}>
            Begin Verification Now
          </Button>
        </Container>
      </Box>

      {/* COPYRIGHT BAR */}
      <Box sx={{ py: 6, textAlign: 'center', opacity: 0.3, bgcolor: '#002535' }}>
        <Typography variant="body2">
          © 2026 KYC Verification. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default KycFinalSections;