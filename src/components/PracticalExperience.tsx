// src/components/PracticalExperience.tsx
import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';

interface PracticalExperienceProps {
  onSubmit: (data: { company: string; position: string; responsibilities: string; dateFrom: string; dateTo: string }) => void;
  initialData?: { company: string; position: string; responsibilities: string; dateFrom: string; dateTo: string } | null; // Allow null
}

const PracticalExperience: React.FC<PracticalExperienceProps> = ({ onSubmit, initialData }) => {
  const [formData, setFormData] = useState(initialData || { company: '', position: '', responsibilities: '', dateFrom: '', dateTo: '' });
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
          <TextField label="Company" name="company" value={formData.company} onChange={handleChange} fullWidth margin="normal" />
          <TextField label="Position Title" name="position" value={formData.position} onChange={handleChange} fullWidth margin="normal" />
          <TextField label="Responsibilities" name="responsibilities" value={formData.responsibilities} onChange={handleChange} fullWidth margin="normal" />
          <TextField label="Date From" name="dateFrom" value={formData.dateFrom} onChange={handleChange} fullWidth margin="normal" />
          <TextField label="Date To" name="dateTo" value={formData.dateTo} onChange={handleChange} fullWidth margin="normal" />
          <Button onClick={handleSubmit} variant="contained" sx={{ mt: 2 }}>Submit</Button>
        </form>
      ) : (
        <Box>
          <p>Company: {formData.company}</p>
          <p>Position: {formData.position}</p>
          <p>Responsibilities: {formData.responsibilities}</p>
          <p>Date From: {formData.dateFrom} - Date To: {formData.dateTo}</p>
          <Button onClick={() => setIsEditing(true)} variant="outlined">Edit</Button>
        </Box>
      )}
    </Box>
  );
};

export default PracticalExperience;
