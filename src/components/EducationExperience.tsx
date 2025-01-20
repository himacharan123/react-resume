// src/components/EducationExperience.tsx
import React, { useState } from "react";
import { TextField, Button, Box } from "@mui/material";

interface EducationExperienceProps {
  onSubmit: (data: { school: string; title: string; date: string }) => void;
  initialData?: { school: string; title: string; date: string } | null; // Allow null
}


const EducationExperience: React.FC<EducationExperienceProps> = ({
  onSubmit,
  initialData,
}) => {
  const [formData, setFormData] = useState(
    initialData || { school: "", title: "", date: "" }
  );
  const [isEditing, setIsEditing] = useState(!initialData);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    onSubmit(formData);
    setIsEditing(false);
  };

  return (
    <Box
      sx={{
        mb: 2,
        width: "100%",
        maxWidth: "600px",
        mx: "auto",
        p: 2,
        backgroundColor: "#fff",
        borderRadius: "8px",
        boxShadow: 2,
      }}
    >
      {isEditing ? (
        <form>
          <TextField
            label="School"
            name="school"
            value={formData.school}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Title of Study"
            name="title"
            value={formData.title}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Date of Study"
            name="date"
            value={formData.date}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <Button onClick={handleSubmit} variant="contained" sx={{ mt: 2 }}>
            Submit
          </Button>
        </form>
      ) : (
        <Box>
          <p>School: {formData.school}</p>
          <p>Title: {formData.title}</p>
          <p>Date: {formData.date}</p>
          <Button onClick={() => setIsEditing(true)} variant="outlined">
            Edit
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default EducationExperience;
