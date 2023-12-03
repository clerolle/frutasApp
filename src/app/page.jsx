import styles from "./page.module.css";
import NewLogin from "@/components/login/NewLogin";
import ResponsiveAppBar from "@/components/appbar/AppBar";
import SwipeableTextMobileStepper from "@/components/stepper/Stepper";
import { Grid } from "@mui/material";

export default function Home() {

  

  return (
    <main>
      <ResponsiveAppBar/>
      <br />
      <div className={styles.title}>
        <h3 >BIENVENIDO A DISTRIBUIDORA DE FRUTAS EL EDEN </h3>
        <p>Para hacer su pedido por favor iniciar sesión</p>
      </div>
      <br />
      <Grid container justifyContent={"center"}>
        <SwipeableTextMobileStepper/>
      </Grid>
    </main>
  );
}
