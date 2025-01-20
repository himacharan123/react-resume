// src/components/CVDisplay.tsx
import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import { Person, School, Work } from '@mui/icons-material';

interface CVDisplayProps {
  data: {
    generalInfo: { name: string; email: string; phone: string };
    educationExperience: { school: string; title: string; date: string };
    practicalExperience: { company: string; position: string; responsibilities: string; dateFrom: string; dateTo: string };
  };
}


const CVDisplay: React.FC<CVDisplayProps> = ({ data }) => {
  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant="h4" component="h2" gutterBottom>
        CV Details
      </Typography>

      {/* General Information Card */}
      <Card sx={{ mb: 4 }}>
        <CardContent>
          <Typography variant="h5" component="h3" gutterBottom>
            <Person sx={{ verticalAlign: 'middle', mr: 1 }} /> General Information
          </Typography>
          <Typography>
            <strong>Name:</strong> {data.generalInfo.name}
          </Typography>
          <Typography>
            <strong>Email:</strong> {data.generalInfo.email}
          </Typography>
          <Typography>
            <strong>Phone:</strong> {data.generalInfo.phone}
          </Typography>
        </CardContent>
      </Card>

      {/* Education Experience Card */}
      <Card sx={{ mb: 4 }}>
        <CardContent>
          <Typography variant="h5" component="h3" gutterBottom>
            <School sx={{ verticalAlign: 'middle', mr: 1 }} /> Education Experience
          </Typography>
          <Typography>
            <strong>School:</strong> {data.educationExperience.school}
          </Typography>
          <Typography>
            <strong>Title of Study:</strong> {data.educationExperience.title}
          </Typography>
          <Typography>
            <strong>Date of Study:</strong> {data.educationExperience.date}
          </Typography>
        </CardContent>
      </Card>

      {/* Practical Experience Card */}
      <Card>
        <CardContent>
          <Typography variant="h5" component="h3" gutterBottom>
            <Work sx={{ verticalAlign: 'middle', mr: 1 }} /> Practical Experience
          </Typography>
          <Typography>
            <strong>Company:</strong> {data.practicalExperience.company}
          </Typography>
          <Typography>
            <strong>Position Title:</strong> {data.practicalExperience.position}
          </Typography>
          <Typography>
            <strong>Main Responsibilities:</strong> {data.practicalExperience.responsibilities}
          </Typography>
          <Typography>
            <strong>Date From:</strong> {data.practicalExperience.dateFrom} - <strong>Date To:</strong> {data.practicalExperience.dateTo}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default CVDisplay;
