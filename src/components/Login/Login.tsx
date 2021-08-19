import React from "react";
import react from "react";

import { Formik, useFormik } from "formik";
import { Button, Paper, TextField } from "@material-ui/core";
import { acquireToken } from "./LoginAPI";
interface LoginPropTypes {
    setToken: React.Dispatch<react.SetStateAction<string | undefined>>
}
const Login = (props: LoginPropTypes) => {
    const formik = useFormik({
        initialValues: {
            username: "",
            password: "",
        },
        onSubmit: async values => {
            props.setToken(await acquireToken(values.username, values.password));
        }
    })
    return (
    <Paper>
        <h1>Login first</h1>
    <form onSubmit={formik.handleSubmit}>
        <TextField id="username" name="username" label="Username" value={formik.values.username} onChange={formik.handleChange} helperText={formik.touched.username && formik.errors.username} />
        <TextField id="password" name="password" type="password" label="Password" autoComplete="current-password" value={formik.values.password} onChange={formik.handleChange} />
        <Button color="primary" type="submit">
            Login
        </Button>

    </form>
    </Paper>
    )
}

export default Login;