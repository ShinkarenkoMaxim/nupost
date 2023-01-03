import { useFormik } from 'formik';
import * as yup from 'yup';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import * as model from '../model';

const validationSchema = yup.object({
  email: yup
    .string()
    .email('Enter a valid email')
    .required('Email is required'),
  password: yup.string().required('Password is required'),
});

export const Form = () => {
  const disabled = model.selectors.useSignInRequestLoading();
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      model.formSubmitted(values);
    },
  });

  return (
    <Box
      component="form"
      noValidate
      sx={{ mt: 1 }}
      onSubmit={formik.handleSubmit}
    >
      <TextField
        required
        fullWidth
        autoFocus
        margin="normal"
        id="email"
        name="email"
        label="E-mail"
        autoComplete="email"
        value={formik.values.email}
        onChange={formik.handleChange}
        error={formik.touched.email && Boolean(formik.errors.email)}
        helperText={formik.touched.email && formik.errors.email}
      />
      <TextField
        required
        fullWidth
        margin="normal"
        id="password"
        name="password"
        label="Password"
        type="password"
        autoComplete="current-password"
        value={formik.values.password}
        onChange={formik.handleChange}
        error={formik.touched.password && Boolean(formik.errors.password)}
        helperText={formik.touched.password && formik.errors.password}
      />
      <Button
        type="submit"
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2, fontWeight: 'bold' }}
        disabled={disabled}
      >
        Sign In
      </Button>
    </Box>
  );
};
