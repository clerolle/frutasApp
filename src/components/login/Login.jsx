import { Button, Grid, TextField } from "@mui/material";
import React from "react";
import styles from "./Login.module.css";

const Login = () => {
  return (
    <div>
      <Grid container display="flex" justify="center" alignItems="center" className={styles.login}>
        <Grid item className={styles.title}>
          <h4>Inicio de sesión</h4>
        </Grid>
        <Grid item className={styles.inputs}>
          <TextField
            alignItems="center"
            variant="standard"
            margin="normal"
            required
            fullWidth
            id="username"
            name="username"
            autoComplete="off"
            autoFocus
            label="Ingrese usuario"
            color="warning"
          />
        </Grid>
        <Grid item className={styles.inputs}>
          <TextField
            alignItems="center"
            variant="standard"
            margin="normal"
            required
            fullWidth
            id="username"
            name="username"
            autoComplete="off"
            autoFocus
            label="Ingrese contraseña"
            color="warning"
          />
        </Grid>
        <Button className={styles.button}>Login</Button>
      </Grid>
    </div>
  );
};

export default Login;
