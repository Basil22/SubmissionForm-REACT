import { Box, Paper, Typography } from "@mui/material";
import MyInputBox from "./FormParts/MyInputBox";
import MyRadioButton from "./FormParts/MyRadioButtons";
import MyCheckBox from "./FormParts/MyCheckBox";
import MyUploadButton from "./FormParts/MyUploadButton";
import MyFormHeading from "./FormParts/MyFormHeading";
import MyChoiceSelections from "./FormParts/MyChoiceSelections";
import MyFooterButtons from "./FormParts/MyFooterButtons";
import { useState } from "react";

function SubmissionForm() {
  const initialState = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    url: "",
    about: "",
  };

  const [formData, setFormData] = useState(initialState);
  const [gender, setGender] = useState("");
  const [selectedChoices, setSelectedChoices] = useState<string[]>([]);
  const [fileName, setFileName] = useState<string | null>("");
  const [selectedAnswer, setSelectedAnswer] = useState<string | "">("");

  const [errors, setErrors] = useState<Record<string, string>>({});

  const requiredInputFields = [
    { label: "First Name", id: "firstName", required: true },
    { label: "Last Name", id: "lastName", required: true },
    { label: "Email", id: "email", required: true },
    { label: "Phone", id: "phone", required: true },
    { label: "URL", id: "url", placeholder: "Enter URL" },
    {
      label: "About ",
      id: "about",
      multiline: true,
      rows: 4,
      placeholder: "Enter About You",
      required: true,
    },
  ];

  const validateForm = () => {
    let newErrors: Record<string, string> = {};

    requiredInputFields.forEach((field) => {
      if (field.required && !formData[field.id as keyof typeof formData]) {
        newErrors[field.id] = `${field.label} is required.`;
      }
    });

    if (!gender) newErrors.gender = "Gender is required";

    if (selectedChoices.length === 0) {
      newErrors.selectedSubjects = "At least one subject is required.";
    }

    if (!selectedAnswer) newErrors.selectedAnswer = "Answer is required";

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleGenderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setGender(event.target.value);
  };

  const handleCheckBoxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setSelectedChoices((prevState) =>
      prevState.includes(value)
        ? prevState.filter((item) => item !== value)
        : [...prevState, value]
    );
  };

  const handleReset = () => {
    setFormData(initialState);
    setGender("");
    setSelectedChoices([]);
    setFileName(null);
    setSelectedAnswer("");
    setErrors({});
  };

  const handleSubmit = () => {
    if (validateForm()) {
      console.log(formData);
      alert("Form submitted successfully!");
      handleReset();
    }
  };

  return (
    <Paper
      elevation={3}
      sx={{ p: 4, maxWidth: 500, mx: "auto", borderRadius: 2, mt: 4 }}
    >
      {/* Form Heading */}
      <MyFormHeading heading="Form In React" />

      {/* Input Fields */}
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        {requiredInputFields.map((field) => (
          <div key={field.id}>
            <MyInputBox
              key={field.id}
              label={field.required ? `${field.label} *` : field.label}
              id={field.id}
              name={field.id}
              placeholder={field.placeholder || `Enter ${field.label}`}
              multiline={field.multiline || false}
              rows={field.rows || 1}
              required={field.required || false}
              value={formData[field.id as keyof typeof formData] || ""}
              onChange={handleChange}
            />
            {errors[field.id] && (
              <Typography color="error" variant="body2">
                {errors[field.id]}
              </Typography>
            )}
          </div>
        ))}

        {/* Radio Options */}
        <MyRadioButton
          formLabel="Gender"
          groupStyle="row"
          required
          values={[
            { label: "Male", value: "male" },
            { label: "Female", value: "female" },
          ]}
          selectedValue={gender}
          onChange={handleGenderChange}
        />
        {errors.gender && (
          <Typography color="error" variant="body2">
            {errors.gender}
          </Typography>
        )}

        {/* Checkbox */}
        <MyCheckBox
          formlabel="Skills"
          groupStyle="row"
          required
          label={[
            { labels: "Java" },
            { labels: "React" },
            { labels: "Angular" },
          ]}
          value={selectedChoices}
          onChange={handleCheckBoxChange}
        />
        {errors.selectedSubjects && (
          <Typography color="error" variant="body2">
            {errors.selectedSubjects}
          </Typography>
        )}

        {/* Upload Button */}
        <MyUploadButton
          formlabel="Upload Your Resume"
          fileName={fileName}
          setFileName={setFileName}
        />

        {/* Select Your Choice */}
        <MyChoiceSelections
          formlabel="Experience"
          required
          values={[
            { value: "< 1year" },
            { value: "1-3years" },
            { value: "3-5years" },
            { value: "> 5years" },
          ]}
          selectedAnswer={selectedAnswer}
          setSelectedAnswer={setSelectedAnswer}
        />
        {errors.selectedAnswer && (
          <Typography color="error" variant="body2">
            {errors.selectedAnswer}
          </Typography>
        )}

        {/* Reset OR Submit */}
        <MyFooterButtons
          buttonValues={[
            {
              label: "Reset",
              variant: "contained",
              color: "error",
              onClick: handleReset,
            },
            {
              label: "Submit",
              variant: "contained",
              color: "primary",
              onClick: handleSubmit,
            },
          ]}
        />
      </Box>
    </Paper>
  );
}

export default SubmissionForm;
