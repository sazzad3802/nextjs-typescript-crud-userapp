// components/UserForm.tsx
"use client";
import { useFormik } from "formik";
import * as Yup from "yup";
import { TextField, Button, Box } from "@mui/material";
import { UserFormValues } from "@/types/user";

interface UserFormProps {
  initialValues?: UserFormValues;
  onSubmit: (values: UserFormValues) => void;
  isEdit?: boolean;
}

export default function UserForm({ initialValues, onSubmit, isEdit = false }: UserFormProps) {
  const formik = useFormik({
    initialValues: initialValues || { name: "", email: "", age: undefined },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      email: Yup.string().email("Invalid email").required("Email is required"),
      age: Yup.number().min(0, "Age must be positive").optional(),
    }),
    onSubmit,
  });

  return (
    <Box component="form" onSubmit={formik.handleSubmit} sx={{ mt: 3 }}>
      <TextField
        fullWidth
        name="name"
        label="Name"
        value={formik.values.name}
        onChange={formik.handleChange}
        error={formik.touched.name && !!formik.errors.name}
        helperText={formik.touched.name && formik.errors.name}
        sx={{ mb: 2 }}
      />
      <TextField
        fullWidth
        name="email"
        label="Email"
        value={formik.values.email}
        onChange={formik.handleChange}
        error={formik.touched.email && !!formik.errors.email}
        helperText={formik.touched.email && formik.errors.email}
        sx={{ mb: 2 }}
      />
      <TextField
        fullWidth
        name="age"
        label="Age"
        type="number"
        value={formik.values.age || ""}
        onChange={formik.handleChange}
        error={formik.touched.age && !!formik.errors.age}
        helperText={formik.touched.age && formik.errors.age}
        sx={{ mb: 2 }}
      />
      <Button type="submit" variant="contained" fullWidth>
        {isEdit ? "Update User" : "Create User"}
      </Button>
    </Box>
  );
}