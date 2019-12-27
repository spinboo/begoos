import React from "react";
import { Formik, Field, Form, FieldAttributes, useField } from "formik";
import { TextField, Button } from "@material-ui/core";
import yup from "yup";

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
    .required()
    .min(6)
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
        // validate={(values) => {
        //   const errors: Record<string, string> = {};

        //   if (values.email.length <= 2 ) {
        //     console.log(values.email);
        //     errors.email = 'must be at least 3 characters long'
        //   }

        //   return errors;
        // }}
      >
        {({ values, errors, isSubmitting }) => (
          <Form>
            <div>
              <MyTextField name="email" type="input" placeholder="Email" />
            </div>
            <div>
              <Field
                name="password"
                type="password"
                placeholder="Password"
                as={TextField}
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
