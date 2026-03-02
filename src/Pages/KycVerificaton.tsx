import React, { useState } from 'react';
import {
    Box, Typography, TextField, Button, Stepper, Step,
    StepLabel, Paper, MenuItem, GlobalStyles, InputAdornment
} from '@mui/material';
import {
    PersonOutlined, MailOutlined, LocalPhoneOutlined,
    CalendarTodayOutlined, Public, RoomOutlined,
    CloudUploadOutlined, CheckCircleOutlined, ArrowBackIosNew, ArrowForwardIos,
    CameraAltOutlined
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

// --- Shared Components ---

const StyledInput = ({ label, icon, ...props }: any) => (
    <Box sx={{ mb: 1.5 }}>
        <Typography variant="body2" sx={{ color: '#fff', mb: 0.8, fontWeight: 500, fontSize: '0.85rem' }}>{label}</Typography>
        <TextField
            fullWidth
            variant="outlined"
            InputProps={{
                startAdornment: icon ? <InputAdornment position="start" sx={{ color: 'rgba(255,255,255,0.4)' }}>{icon}</InputAdornment> : null
            }}
            sx={{
                '& .MuiOutlinedInput-root': {
                    color: '#fff', bgcolor: 'rgba(255,255,255,0.05)', borderRadius: '12px',
                    '& fieldset': { borderColor: 'rgba(255,255,255,0.15)' },
                    '&:hover fieldset': { borderColor: 'rgba(255,255,255,0.3)' },
                }
            }}
            {...props}
        />
    </Box>
);

// --- Step Content Components ---

const PersonalStep = () => (
    <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 1.5 }}>
        <Box sx={{ gridColumn: 'span 2', mb: 1 }}>
            <Typography variant="h6" sx={{ display: 'flex', alignItems: 'center', fontWeight: 600 }}>
                <PersonOutlined sx={{ mr: 1.5, opacity: 0.7 }} /> Personal Information
            </Typography>
        </Box>
        <StyledInput label="First Name" placeholder="John" />
        <StyledInput label="Last Name" placeholder="Doe" />
        <Box sx={{ gridColumn: 'span 2' }}><StyledInput label="Email Address" icon={<MailOutlined sx={{ fontSize: 20 }} />} placeholder="johndoe@gmail.com" /></Box>
        <Box sx={{ gridColumn: 'span 2' }}><StyledInput label="Phone Number" icon={<LocalPhoneOutlined sx={{ fontSize: 20 }} />} placeholder="+27 356 4852" /></Box>
        <StyledInput label="Date of Birth" icon={<CalendarTodayOutlined sx={{ fontSize: 18 }} />} placeholder="yyyy/mm/dd" />
        <StyledInput label="Nationality" icon={<Public sx={{ fontSize: 20 }} />} placeholder="South African" />
    </Box>
);

const AddressStep = () => (
    <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 1.5 }}>
        <Box sx={{ gridColumn: 'span 2', mb: 1 }}>
            <Typography variant="h6" sx={{ display: 'flex', alignItems: 'center', fontWeight: 600 }}>
                <RoomOutlined sx={{ mr: 1.5, opacity: 0.7 }} /> Address Information
            </Typography>
        </Box>
        <Box sx={{ gridColumn: 'span 2' }}><StyledInput label="Street Address" placeholder="123 Main Street" /></Box>
        <StyledInput label="City" placeholder="Cape Town" />
        <StyledInput label="State / Province" placeholder="Western Cape" />
        <StyledInput label="ZIP / Postal Code" placeholder="7785" />
        <StyledInput label="Country" placeholder="South Africa" />
    </Box>
);

const DocumentStep = () => (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
        <Typography variant="h6" sx={{ display: 'flex', alignItems: 'center', mb: 1, fontWeight: 600 }}>
            <CloudUploadOutlined sx={{ mr: 1.5, opacity: 0.7 }} /> Document Verification
        </Typography>
        <StyledInput label="Document Type" select defaultValue="">
            <MenuItem value="passport">Passport</MenuItem>
            <MenuItem value="id">National ID Card</MenuItem>
        </StyledInput>
        <StyledInput label="Document Number" placeholder="Enter your document number" />
        <Button fullWidth variant="outlined" sx={{ border: '1px dashed rgba(255,255,255,0.2)', color: 'rgba(255,255,255,0.6)', py: 1.5, borderRadius: '12px', textTransform: 'none', mb: 1 }}>
            Choose ID Front
        </Button>
        <Button fullWidth variant="outlined" sx={{ border: '1px dashed rgba(255,255,255,0.2)', color: 'rgba(255,255,255,0.6)', py: 1.5, borderRadius: '12px', textTransform: 'none' }}>
            Choose ID Back
        </Button>
    </Box>
);

const FaceScanStep = () => (
    <Box sx={{ textAlign: 'center' }}>
        <Box sx={{
            width: '100%', height: 200, borderRadius: '24px', border: '1px solid rgba(255,255,255,0.1)',
            mb: 3, display: 'flex', alignItems: 'center', justifyContent: 'center', bgcolor: 'rgba(255,255,255,0.02)',
            position: 'relative', overflow: 'hidden'
        }}>
            <Box sx={{ width: 100, height: 130, border: '2px solid #f1d302', borderRadius: '50% 50% 45% 45%' }} />
            <CameraAltOutlined sx={{ position: 'absolute', bottom: 10, right: 10, opacity: 0.3 }} />
        </Box>
        <Typography variant="h6" fontWeight="600">Face Scan Verification</Typography>
        <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.4)', mb: 3 }}>Ensure your face is clearly visible and well-lit.</Typography>

        <Box sx={{ bgcolor: 'rgba(0,0,0,0.2)', p: 2, borderRadius: '12px', textAlign: 'left', mb: 3 }}>
            <Typography variant="caption" display="block" sx={{ color: '#f1d302', mb: 1, fontWeight: 'bold' }}>For best results:</Typography>
            <Typography variant="caption" display="block" sx={{ color: 'rgba(255,255,255,0.5)', lineHeight: 1.6 }}>
                • Remove glasses, hats, or face coverings<br />
                • Look directly at the camera with a neutral expression<br />
                • Keep your head centered within the frame
            </Typography>
        </Box>

        <Button fullWidth variant="contained" sx={{ bgcolor: 'rgba(255,255,255,0.1)', color: '#fff', py: 1.2, borderRadius: '10px', textTransform: 'none' }}>
            Enable Camera
        </Button>
    </Box>
);

// --- Main Page ---

const KycVerification: React.FC = () => {
    const [activeStep, setActiveStep] = useState(0);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const navigate = useNavigate();
    const steps = ['Personal', 'Address', 'Documents', 'Face Scan'];

    const bgStyles = {
        backgroundImage: "url('/hero.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
    };

    if (isSubmitted) return (
        <Box sx={{
            minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center',
            ...bgStyles
        }}>
            <Paper sx={{
                p: 6, textAlign: 'center', bgcolor: 'rgba(20,20,20,0.8)', backdropFilter: 'blur(30px)',
                borderRadius: 8, color: '#fff', border: '1px solid rgba(255,255,255,0.1)', maxWidth: 550
            }}>
                <CheckCircleOutlined sx={{ fontSize: 80, color: '#4CAF50', mb: 2 }} />
                <Typography variant="h4" fontWeight="bold">KYC Submitted!</Typography>
                <Typography sx={{ mt: 5, opacity: 0.6 }}>Your KYC application has been submitted successfully.
                    We'll review your information and get back to you within 24-48 hours.</Typography>
                <Box sx={{ mt: 8, display: 'flex', justifyContent: 'center' }}>
                    <Button
                        onClick={() => navigate('/')}
                        startIcon={<ArrowBackIosNew sx={{ fontSize: '16px !important' }} />}
                        sx={{
                            // Shrinking the button size
                            px: 5,
                            py: 1,
                            fontSize: '16px',
                            minWidth: '140px',

                            color: 'white',
                            textTransform: 'none',
                            borderRadius: '20px', // High border radius for that pill shape in your image
                            fontWeight: 500,

                            // Gradient background from your screenshot
                            background: 'linear-gradient(180deg, rgba(146, 164, 194, 0.4) 0%, rgba(70, 78, 91, 0.4) 100%)',
                            border: '1px solid rgba(255, 255, 255, 0.2)',
                            backdropFilter: 'blur(8px)',

                            transition: 'all 0.3s ease',
                            '&:hover': {
                                background: 'linear-gradient(180deg, rgba(146, 164, 194, 0.6) 0%, rgba(70, 78, 91, 0.6) 100%)',
                                border: '1px solid rgba(255, 255, 255, 0.4)',
                                transform: 'translateY(-1px)',
                            }
                        }}
                    >
                        Submit Another Application
                    </Button>
                </Box>
            </Paper>
            <Button
                onClick={() => navigate('/')}
                startIcon={<ArrowBackIosNew sx={{ fontSize: '12px !important' }} />}
                sx={{ position: 'absolute', top: 30, left: 30, color: 'white', textTransform: 'none', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '8px', px: 2 }}
            >
                Back to Main
            </Button>
        </Box>
    );

    return (
        <Box sx={{
            minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center',
            ...bgStyles, p: 2
        }}>
            <GlobalStyles styles={{ 'body, html': { overflow: 'hidden !important', margin: 0, backgroundColor: '#000' } }} />

            {/* Top Navigation */}
            <Button
                onClick={() => navigate('/')}
                startIcon={<ArrowBackIosNew sx={{ fontSize: '12px !important' }} />}
                sx={{ position: 'absolute', top: 30, left: 30, color: 'white', textTransform: 'none', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '8px', px: 2 }}
            >
                Back to Main
            </Button>

            <Paper sx={{
                width: '100%', maxWidth: 700, bgcolor: 'rgba(30, 30, 30, 0.6)',
                backdropFilter: 'blur(40px)', borderRadius: '32px', p: { xs: 3, md: 5 }, color: '#fff',
                border: '1px solid rgba(255, 255, 255, 0.1)', boxShadow: '0 25px 50px rgba(0,0,0,0.5)'
            }}>
                <Typography variant="h4" align="center" fontWeight="700" sx={{ mb: 1 }}>KYC Verification</Typography>
                <Typography variant="body2" align="center" sx={{ color: 'rgba(255,255,255,0.4)', mb: 4 }}>
                    Please complete all steps to verify your identity
                </Typography>

                <Stepper
                    activeStep={activeStep}
                    alternativeLabel
                    sx={{
                        mb: 6,
                        // This targets the horizontal connecting lines
                        '& .MuiStepConnector-root': {
                            display: 'none',
                        },
                        // Adjusting margin since lines are gone
                        '& .MuiStep-root': {
                            padding: 0,
                        }
                    }}
                >
                    {steps.map((label, index) => (
                        <Step key={label}>
                            <StepLabel StepIconComponent={() => (
                                <Box sx={{
                                    width: 32, height: 32, borderRadius: '50%',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    bgcolor: activeStep >= index ? '#f1d302' : 'transparent',
                                    color: activeStep >= index ? '#003249' : '#888',
                                    fontWeight: 'bold', border: activeStep >= index ? 'none' : '1px solid rgba(255,255,255,0.2)'
                                }}>{index + 1}</Box>
                            )}>
                                <Typography variant="caption" sx={{ color: activeStep >= index ? '#ffffff' : '#555', fontWeight: 400 }}>{label}</Typography>
                            </StepLabel>
                        </Step>
                    ))}
                </Stepper>

                <Box sx={{ mb: 4 }}>
                    {activeStep === 0 && <PersonalStep />}
                    {activeStep === 1 && <AddressStep />}
                    {activeStep === 2 && <DocumentStep />}
                    {activeStep === 3 && <FaceScanStep />}
                </Box>

                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Button
                        onClick={() => setActiveStep(p => p - 1)}
                        disabled={activeStep === 0}
                        startIcon={<ArrowBackIosNew sx={{ fontSize: '14px !important' }} />}
                        sx={{
                            // rgba(red, green, blue, alpha/transparency)
                            bgcolor: 'rgba(255, 255, 255, 0.05)', // This is your 5% white background
                            color: '#ffffff',                      // Text remains fully opaque
                            borderRadius: '12px',
                            textTransform: 'none',
                            px: 2,
                            py: 1,
                            fontWeight: 'bold',
                            border: '1px solid rgba(255, 255, 255, 0.1)', // Optional: adds definition
                            '&:hover': {
                                bgcolor: 'rgba(255, 255, 255, 0.1)',      // Slightly brighter on hover
                            }
                        }}
                    >
                        Previous
                    </Button>

                    <Button
                        variant="contained"
                        onClick={() => activeStep === 3 ? setIsSubmitted(true) : setActiveStep(p => p + 1)}
                        endIcon={activeStep < 3 ? <ArrowForwardIos sx={{ fontSize: '14px !important' }} /> : null}
                        sx={{
                            // rgba(red, green, blue, alpha/transparency)
                            bgcolor: 'rgba(255, 255, 255, 0.05)', // This is your 5% white background
                            color: '#ffffff',                      // Text remains fully opaque
                            borderRadius: '12px',
                            textTransform: 'none',
                            px: 4,
                            py: 1,
                            fontWeight: 'bold',
                            border: '1px solid rgba(255, 255, 255, 0.1)', // Optional: adds definition
                            '&:hover': {
                                bgcolor: 'rgba(255, 255, 255, 0.1)',      // Slightly brighter on hover
                            }
                        }}
                    >
                        {activeStep === 3 ? 'Submit KYC' : 'Next'}
                    </Button>
                </Box>
            </Paper>
        </Box>
    );
};

export default KycVerification;