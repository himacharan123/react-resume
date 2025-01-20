// src/components/GeneralInfo.tsx
import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';

interface GeneralInfoProps {
  onSubmit: (data: { name: string; email: string; phone: string }) => void;
  initialData?: { name: string; email: string; phone: string } | null; // Allow null
}

const GeneralInfo: React.FC<GeneralInfoProps> = ({ onSubmit, initialData }) => {
  const [formData, setFormData] = useState(initialData || { name: '', email: '', phone: '' });
  const [isEditing, setIsEditing] = useState(!initialData);

  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    onSubmit(formData);
    setIsEditing(false);
  };

  return (
    <Box sx={{ mb: 2, width: '100%', maxWidth: '600px', mx: 'auto', p: 2, backgroundColor: '#fff', borderRadius: '8px', boxShadow: 2 }}>
      {isEditing ? (
        <form>
          <TextField label="Name" name="name" value={formData.name} onChange={handleChange} fullWidth margin="normal" />
          <TextField label="Email" name="email" value={formData.email} onChange={handleChange} fullWidth margin="normal" />
          <TextField label="Phone" name="phone" value={formData.phone} onChange={handleChange} fullWidth margin="normal" />
          <Button onClick={handleSubmit} variant="contained" sx={{ mt: 2 }}>Submit</Button>
        </form>
      ) : (
        <Box>
          <p>Name: {formData.name}</p>
          <p>Email: {formData.email}</p>
          <p>Phone: {formData.phone}</p>
          <Button onClick={() => setIsEditing(true)} variant="outlined">Edit</Button>
        </Box>
      )}
    </Box>
  );
};

export default GeneralInfo;
