import React from "react";
import { Formik, Form, FieldAttributes, useField } from "formik";
import { TextField, Button } from "@material-ui/core";
import * as yup from "yup";

const MyTextField: React.FC<FieldAttributes<{}>> = ({
  placeholder,
  ...props
}) => {
  const [field, meta] = useField<{}>(props);
  const errorText = meta.error && meta.touched ? meta.error : "";

  return (
    <TextField
      placeholder={placeholder}
      {...field}
      helperText={errorText}
      error={!!errorText}
    />
  );
};

const validationSchema = yup.object({
  email: yup
    .string()
    .email()
    .required(),
  password: yup
    .string()
    .required()
    .matches(
      /^(?=.*[A-Za-z])(?=.*d)(?=.*[@$!%*#?&])[A-Za-zd@$!%*#?&]{8,}$/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
    )
});

const Login3: React.FC = () => {
  return (
    <div>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(data, { setSubmitting }) => {
          setSubmitting(true);
          console.log("submit", data);
          setSubmitting(false);
        }}
        validationSchema={validationSchema}
      >
        {({ values, errors, isSubmitting }) => (
          <Form>
            <div>
              <MyTextField name="email" type="input" placeholder="Email" />
            </div>
            <div>
              <MyTextField
                name="password"
                type="password"
                placeholder="Constraseña"
              />
            </div>
            <div>
              <Button disabled={isSubmitting} type="submit">
                Login
              </Button>
            </div>
            <pre>{JSON.stringify(values, null, 2)}</pre>
            <pre>{JSON.stringify(errors, null, 2)}</pre>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Login3;
