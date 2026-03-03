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
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';

// --- Shared Components ---

const StyledInput = ({ label, icon, ...props }: any) => (
    <Box sx={{ mb: 2 }}>
        <Typography variant="body2" sx={{ color: '#fff', mb: 1, fontWeight: 500, fontSize: '0.85rem', display: 'flex', alignItems: 'center' }}>
            {icon && <Box component="span" sx={{ mr: 1, display: 'flex', opacity: 0.8 }}>{icon}</Box>}
            {label}
        </Typography>
        <TextField
            fullWidth
            variant="outlined"
            InputProps={props.select ? undefined : {
                startAdornment: props.value === '' && icon ? (
                    <InputAdornment position="start" sx={{ display: 'none' }} />
                ) : null
            }}
            sx={{
                '& .MuiOutlinedInput-root': {
                    color: '#fff', bgcolor: 'rgba(255,255,255,0.05)', borderRadius: '12px',
                    height: '48px',
                    '& fieldset': { borderColor: 'rgba(255,255,255,0.15)' },
                    '&:hover fieldset': { borderColor: 'rgba(255,255,255,0.3)' },
                },
                '& .MuiInputBase-input::placeholder': { color: 'rgba(255,255,255,0.2)', opacity: 1 }
            }}
            {...props}
        />
    </Box>
);

const FileUploadRow = ({ label }: { label: string }) => {
    const [fileName, setFileName] = useState<string>('No file chosen');

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            setFileName(e.target.files[0].name);
        }
    };

    return (
        <Box sx={{ mb: 2 }}>
            <Typography variant="body2" sx={{ color: '#fff', mb: 1, fontSize: '0.85rem', display: 'flex', alignItems: 'center' }}>
                <CloudUploadOutlined sx={{ mr: 1, fontSize: 18, opacity: 0.7 }} /> {label}
            </Typography>
            <Box sx={{
                display: 'flex', alignItems: 'center', bgcolor: 'rgba(255,255,255,0.05)',
                p: '4px 8px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.15)', height: '48px'
            }}>
                <Button variant="contained" component="label" sx={{
                    bgcolor: 'rgba(255,255,255,0.1)', color: '#fff', textTransform: 'none',
                    fontSize: '0.75rem', borderRadius: '8px', boxShadow: 'none',
                    '&:hover': { bgcolor: 'rgba(255,255,255,0.2)' }
                }}>
                    Choose file
                    <input
                        hidden
                        accept="image/*"
                        type="file"
                        onChange={handleFileChange}
                    />
                </Button>
                <Typography
                    variant="caption"
                    sx={{
                        color: fileName === 'No file chosen' ? 'rgba(255,255,255,0.3)' : '#f1d302',
                        ml: 2,
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap'
                    }}
                >
                    {fileName}
                </Typography>
            </Box>
        </Box>
    );
};
// --- Step Content ---

const PersonalStep = ({ data, onUpdate }: any) => (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Box>
            <Typography variant="h6" sx={{ display: 'flex', alignItems: 'center', fontWeight: 600, mb: 3 }}>
                <PersonOutlined sx={{ mr: 1.5, opacity: 0.8 }} /> Personal Information
            </Typography>
            <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2 }}>
                <StyledInput label="First Name" placeholder="John" value={data.firstName} onChange={onUpdate('firstName')} />
                <StyledInput label="Last Name" placeholder="Doe" value={data.lastName} onChange={onUpdate('lastName')} />
            </Box>
            <StyledInput label="Email Address" icon={<MailOutlined sx={{ fontSize: 18 }} />} placeholder="johndoe@gmail.com" value={data.email} onChange={onUpdate('email')} />
            <StyledInput label="Phone Number" icon={<LocalPhoneOutlined sx={{ fontSize: 18 }} />} placeholder="+27 356 4852" value={data.phone} onChange={onUpdate('phone')} />
            
            <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2 }}>
                <Box>
                    <Typography variant="body2" sx={{ color: '#fff', mb: 1, fontWeight: 500, fontSize: '0.85rem', display: 'flex', alignItems: 'center' }}>
                        <CalendarTodayOutlined sx={{ mr: 1, fontSize: 18, opacity: 0.8 }} /> Date of Birth
                    </Typography>
                    <DatePicker
                        value={data.dob ? dayjs(data.dob) : null}
                        onChange={(val) => onUpdate('dob')({ target: { value: val?.format('YYYY-MM-DD') } })}
                        slotProps={{
                            textField: {
                                fullWidth: true,
                                sx: {
                                    '& .MuiOutlinedInput-root': {
                                        color: '#fff', 
                                        bgcolor: 'rgba(255,255,255,0.05)', 
                                        borderRadius: '12px', 
                                        height: '48px', // Matches Nationality field
                                        '& fieldset': { borderColor: 'rgba(255,255,255,0.15)' },
                                        '&:hover fieldset': { borderColor: 'rgba(255,255,255,0.3)' },
                                    },
                                    '& .MuiInputBase-input': {
                                        padding: '0 14px', // Strips MUI default padding for exact centering
                                        fontSize: '0.85rem',
                                        height: '48px',
                                        color: 'rgba(255, 255, 255, 0.7)'
                                    },
                                    '& .MuiInputAdornment-root': {
                                        marginLeft: 0 // Pulls calendar icon closer to the edge
                                    },
                                    '& .MuiSvgIcon-root': { 
                                        color: 'rgba(255,255,255,0.5)', 
                                        fontSize: '1.1rem' 
                                    }
                                }
                            },
                            // Fixed the 'paper' error by using 'popper' slot
                            popper: {
                                sx: {
                                    '& .MuiPaper-root': {
                                        bgcolor: '#1e1e1e',
                                        color: '#fff',
                                        borderRadius: '16px',
                                        border: '1px solid rgba(255,255,255,0.1)',
                                        '& .MuiPickersDay-root': { color: '#fff' },
                                        '& .MuiPickersDay-root.Mui-selected': { bgcolor: '#f1d302', color: '#000' },
                                        '& .MuiDayCalendar-weekDayLabel': { color: 'rgba(255,255,255,0.5)' }
                                    }
                                }
                            }
                        }}
                    />
                </Box>
                <StyledInput label="Nationality" icon={<Public sx={{ fontSize: 18 }} />} placeholder="South African" value={data.nationality} onChange={onUpdate('nationality')} />
            </Box>
        </Box>
    </LocalizationProvider>
);

const AddressStep = ({ data, onUpdate }: any) => (
    <Box>
        <Typography variant="h6" sx={{ display: 'flex', alignItems: 'center', fontWeight: 600, mb: 3 }}>
            <RoomOutlined sx={{ mr: 1.5, opacity: 0.8 }} /> Address Information
        </Typography>
        <StyledInput label="Street Address" placeholder="123 Main Street" value={data.street} onChange={onUpdate('street')} />
        <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2 }}>
            <StyledInput label="City" placeholder="Cape Town" value={data.city} onChange={onUpdate('city')} />
            <StyledInput label="State / Province" placeholder="Western Cape" value={data.state} onChange={onUpdate('state')} />
            <StyledInput label="ZIP / Postal Code" placeholder="7785" value={data.zip} onChange={onUpdate('zip')} />
            <StyledInput label="Country" placeholder="South Africa" value={data.country} onChange={onUpdate('country')} />
        </Box>
    </Box>
);

const DocumentStep = ({ data, onUpdate }: any) => (
    <Box>
        <Typography variant="h6" sx={{ display: 'flex', alignItems: 'center', mb: 3, fontWeight: 600 }}>
            <CloudUploadOutlined sx={{ mr: 1.5, opacity: 0.8 }} /> Document Verification
        </Typography>
        
        <StyledInput 
            label="Document Type" 
            select 
            value={data.docType} 
            onChange={onUpdate('docType')}
            SelectProps={{
                displayEmpty: true, // Allows the placeholder to show when value is ""
                renderValue: (selected: any) => {
                    if (!selected) {
                        return <span style={{ color: 'rgba(255, 255, 255, 0.4)' }}>Select Document</span>;
                    }
                    return selected === 'passport' ? 'Passport' : 'National ID Card';
                }
            }}
        >
            {/* The Placeholder Item */}
            <MenuItem value="" disabled>Select Document</MenuItem>
            
            <MenuItem value="passport">Passport</MenuItem>
            <MenuItem value="id">National ID Card</MenuItem>
        </StyledInput>

        <StyledInput 
            label="Document Number" 
            placeholder="Enter your document number" 
            value={data.docNumber} 
            onChange={onUpdate('docNumber')} 
        />
        
        <FileUploadRow label="ID Document (Front)" />
        <FileUploadRow label="ID Document (Back)" />
        <FileUploadRow label="Selfie with ID" />
        
        <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.4)', fontStyle: 'italic', display: 'block', mt: -1 }}>
            Please take a clear photo of yourself holding your ID document
        </Typography>
    </Box>
);

const FaceScanStep = ({ onCameraToggle }: any) => (
    <Box sx={{ textAlign: 'center' }}>
        <Typography variant="h6" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 600, mb: 3 }}>
            Face Scan Verification
        </Typography>
        <Box sx={{
            width: '100%', height: 280, borderRadius: '24px', border: '1px solid rgba(255,255,255,0.1)',
            mb: 3, display: 'flex', alignItems: 'center', justifyContent: 'center', bgcolor: 'rgba(255,255,255,0.02)', position: 'relative'
        }}>
            <Box sx={{ position: 'absolute', width: '220px', height: '220px' }}>
                <Box sx={{ position: 'absolute', top: 0, left: 0, width: 50, height: 50, borderTop: '4px solid #fff', borderLeft: '4px solid #fff', borderRadius: '4px' }} />
                <Box sx={{ position: 'absolute', top: 0, right: 0, width: 50, height: 50, borderTop: '4px solid #fff', borderRight: '4px solid #fff', borderRadius: '4px' }} />
                <Box sx={{ position: 'absolute', bottom: 0, left: 0, width: 50, height: 50, borderBottom: '4px solid #fff', borderLeft: '4px solid #fff', borderRadius: '4px' }} />
                <Box sx={{ position: 'absolute', bottom: 0, right: 0, width: 50, height: 50, borderBottom: '4px solid #fff', borderRight: '4px solid #fff', borderRadius: '4px' }} />
                <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 100, height: 130, border: '3px solid #fff', borderRadius: '50% 50% 45% 45%', opacity: 0.9 }} />
            </Box>
        </Box>

        <Button
            fullWidth variant="contained"
            onClick={onCameraToggle}
            startIcon={<CameraAltOutlined />}
            sx={{ bgcolor: 'rgba(255,255,255,0.1)', color: '#fff', py: 1.2, borderRadius: '10px', textTransform: 'none', mb: 1, '&:hover': { bgcolor: 'rgba(255,255,255,0.15)' } }}
        >
            Enable Camera
        </Button>
        <Button fullWidth variant="text" sx={{ color: 'rgba(255,255,255,0.4)', textTransform: 'none', fontSize: '0.8rem' }}>Skip for now</Button>

        <Box sx={{ bgcolor: 'rgba(255,255,255,0.03)', p: 2, borderRadius: '12px', textAlign: 'left', mt: 3, border: '1px solid rgba(255,255,255,0.05)' }}>
            <Typography variant="caption" sx={{ color: '#fff', fontWeight: 'bold', mb: 0.5, display: 'block' }}>For best results:</Typography>
            <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.5)', lineHeight: 1.6, display: 'block' }}>
                • Ensure your face is clearly visible and well-lit<br />
                • Remove glasses, hats, or face coverings<br />
                • Look directly at the camera with a neutral expression<br />
                • Keep your head centered within the oval frame
            </Typography>
        </Box>
    </Box>
);

// --- Main Page ---

const KycVerification: React.FC = () => {
    const [activeStep, setActiveStep] = useState(0);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const navigate = useNavigate();
    const steps = ['Personal', 'Address', 'Documents', 'Face Scan'];

    const [formData, setFormData] = useState({
        firstName: '', lastName: '', email: '', phone: '', dob: '', nationality: '',
        street: '', city: '', state: '', zip: '', country: '',
        docType: '', docNumber: '', cameraEnabled: false
    });

    const handleUpdate = (field: string) => (e: any) => {
        setFormData({ ...formData, [field]: e.target.value });
    };

    const isStepComplete = () => {
        if (activeStep === 0) return !!(formData.firstName && formData.lastName && formData.email.includes('@') && formData.phone && formData.dob && formData.nationality);
        if (activeStep === 1) return !!(formData.street && formData.city && formData.state && formData.zip && formData.country);
        if (activeStep === 2) return !!(formData.docType && formData.docNumber);
        if (activeStep === 3) return formData.cameraEnabled;
        return false;
    };

    const bgStyles = {
        backgroundImage: "url('/hero.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
    };

    if (isSubmitted) return (
        <Box sx={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', ...bgStyles }}>
            <Paper sx={{ p: 5, textAlign: 'center', bgcolor: 'rgba(30, 30, 30, 0.75)', backdropFilter: 'blur(30px)', borderRadius: '32px', color: '#fff', border: '1px solid rgba(255,255,255,0.1)', maxWidth: 480 }}>
                <CheckCircleOutlined sx={{ fontSize: 60, color: '#4CAF50', mb: 2 }} />
                <Typography variant="h4" fontWeight="bold">KYC Submitted!</Typography>
                <Typography sx={{ mt: 2, opacity: 0.6, fontSize: '0.85rem', lineHeight: 1.6 }}>
                    Your KYC application has been submitted successfully.<br />
                    We'll review your information and get back to you within 24-48 hours.
                </Typography>
                <Box sx={{ mt: 4 }}>
                    <Button
                        onClick={() => navigate('/')}
                        sx={{
                            px: 4, py: 1.2, color: 'white', textTransform: 'none', borderRadius: '25px', fontSize: '0.85rem',
                            background: 'linear-gradient(180deg, rgba(146, 164, 194, 0.4) 0%, rgba(70, 78, 91, 0.4) 100%)',
                            border: '1px solid rgba(255,255,255,0.3)',
                            '&:hover': { background: 'linear-gradient(180deg, rgba(146, 164, 194, 0.6) 0%, rgba(70, 78, 91, 0.6) 100%)' }
                        }}
                    >
                        Submit Another Application
                    </Button>
                </Box>
            </Paper>
        </Box>
    );

    return (
        <Box sx={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', ...bgStyles, p: 2 }}>
            <GlobalStyles styles={{ 'body, html': { margin: 0, backgroundColor: '#000', overflowX: 'hidden' } }} />

            <Button
                onClick={() => navigate('/')}
                startIcon={<ArrowBackIosNew sx={{ fontSize: '10px !important' }} />}
                sx={{ position: 'absolute', top: 30, left: 30, color: 'white', textTransform: 'none', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '8px', px: 2, fontSize: '0.75rem' }}
            >
                Back to Main
            </Button>

            <Paper sx={{ width: '100%', maxWidth: 650, bgcolor: 'rgba(30, 30, 30, 0.6)', backdropFilter: 'blur(40px)', borderRadius: '32px', p: { xs: 3, md: 5 }, color: '#fff', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
                <Typography variant="h4" align="center" fontWeight="700" sx={{ mb: 1 }}>KYC Verification</Typography>
                <Typography variant="body2" align="center" sx={{ color: 'rgba(255,255,255,0.4)', mb: 5 }}>Please complete all steps to verify your identity</Typography>

                <Stepper activeStep={activeStep} alternativeLabel sx={{ mb: 6, '& .MuiStepConnector-line': { borderColor: 'rgba(255,255,255,0.1)' } }}>
                    {steps.map((label, index) => (
                        <Step key={label}>
                            <StepLabel StepIconComponent={() => (
                                <Box sx={{ width: 32, height: 32, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', bgcolor: activeStep >= index ? '#f1d302' : 'transparent', color: activeStep >= index ? '#003249' : '#888', fontWeight: 'bold', border: activeStep >= index ? 'none' : '1px solid rgba(255,255,255,0.2)', zIndex: 1 }}>{index + 1}</Box>
                            )}>
                                <Typography variant="caption" sx={{ color: activeStep >= index ? '#ffffff' : '#555', fontSize: '0.75rem', fontWeight: 500 }}>{label}</Typography>
                            </StepLabel>
                        </Step>
                    ))}
                </Stepper>

                <Box sx={{ mb: 5 }}>
                    {activeStep === 0 && <PersonalStep data={formData} onUpdate={handleUpdate} />}
                    {activeStep === 1 && <AddressStep data={formData} onUpdate={handleUpdate} />}
                    {activeStep === 2 && <DocumentStep data={formData} onUpdate={handleUpdate} />}
                    {activeStep === 3 && <FaceScanStep onCameraToggle={() => setFormData({ ...formData, cameraEnabled: true })} />}
                </Box>

                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', pt: 2, borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                    <Button
                        onClick={() => setActiveStep(p => p - 1)}
                        disabled={activeStep === 0}
                        startIcon={<ArrowBackIosNew sx={{ fontSize: '12px !important' }} />}
                        sx={{ color: '#fff', textTransform: 'none', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '10px', px: 2.5, fontSize: '0.8rem', '&:disabled': { opacity: 0.3, color: '#fff' } }}
                    >
                        Previous
                    </Button>

                    {activeStep === 3 && (
                        <Typography
                            variant="caption"
                            sx={{
                                color: '#f1d302',
                                cursor: 'pointer',
                                fontWeight: 600,
                                position: 'absolute',
                                left: '50%',
                                transform: 'translateX(-50%)',
                                whiteSpace: 'nowrap'
                            }}
                        >
                            Support?
                        </Typography>
                    )}

                    <Button
                        variant="contained"
                        disabled={!isStepComplete()}
                        onClick={() => activeStep === 3 ? setIsSubmitted(true) : setActiveStep(p => p + 1)}
                        endIcon={activeStep < 3 ? <ArrowForwardIos sx={{ fontSize: '12px !important' }} /> : null}
                        sx={{
                            bgcolor: 'rgba(255, 255, 255, 0.05)', color: '#fff', borderRadius: '12px', textTransform: 'none', px: 3, fontWeight: 'bold', border: '1px solid rgba(255, 255, 255, 0.2)',
                            '&:disabled': { color: 'rgba(255,255,255,0.2)', bgcolor: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)' }
                        }}
                    >
                        {activeStep === 3 ? 'Submit KYC' : 'Next'}
                    </Button>
                </Box>
                <Typography variant="caption" align="center" sx={{ display: 'block', mt: 3, color: 'rgba(255,255,255,0.3)', fontSize: '0.65rem' }}>
                    Your information is securely encrypted and will only be used for verification purposes
                </Typography>
            </Paper>
        </Box>
    );
};

export default KycVerification;