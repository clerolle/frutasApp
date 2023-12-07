"use client";
import styles from "./page.module.css";
import NewLogin from "@/components/login/NewLogin";
import ResponsiveAppBar from "@/components/appbar/AppBar";
import SwipeableTextMobileStepper from "@/components/stepper/Stepper";
import { Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getInfo } from "@/redux/features/info/infoSlice";

export default function Home() {

  // Redux
  const dispatch = useDispatch();
  
  useEffect(()=>{
    fetch("https://pokeapi.co/api/v2/pokemon/")
          .then((res) => res.json())
          .then((data) => {
            dispatch(getInfo(data.results));
          });
  },[])

  // useEffect(()=>{
  //   fetch("https://www.fruityvice.com/api/fruit/all")
  //         .then((res) => res.json())
  //         .then((data) => {
  //           dispatch(getInfo(data.results));
  //         });
  // },[])
  

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
