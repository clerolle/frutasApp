"use client";
import Image from "next/image";
import styles from "./page.module.css";
import Login from "@/components/login/Login";
import ResponsiveAppBar from "@/components/appbar/AppBar";
import ReviewCard from "@/components/card/Card";
import { Grid } from "@mui/material";
import { useState } from "react";

export default function Home() {

  const [ fruits, setFruits] = useState([{
    img: "/melon.jpeg",
    name: "Melon",
    description: "Cucumis melo, llamado comúnmente melón, es una especie de la familia de las cucurbitáceas. Domesticada hace más de cuatro mil años en la región mediterránea oriental y Asia occidental, el origen exacto de la especie silvestre es aún desconocido. Su dilatado cultivo en domesticación ha dado origen a numerosas variedades cuya producción se extiende por todas las regiones cálidas de la mayor parte del mundo con veranos secos y calurosos"
  },{
    img: "/sandia.jpeg",
    name: "Sandia",
    description: "Citrullus lanatus, comúnmente llamada melón de agua, sandía, acendría, sindria, patilla, es una especie de la familia Cucurbitaceae. Es originaria de África con una gran presencia y difusión en todo el mundo. Se cultiva de manera extendida por todo el mundo debido a su fruto, el cual es un pepónide de enorme tamaño (el récord entre las frutas fue una de 120 kg)."
  }/* ,{
    img: "/sandia.jpeg",
    name: "sandia",
    description: "Citrullus lanatus, comúnmente llamada melón de agua, sandía, acendría, sindria, patilla, es una especie de la familia Cucurbitaceae. Es originaria de África con una gran presencia y difusión en todo el mundo. Se cultiva de manera extendida por todo el mundo debido a su fruto, el cual es un pepónide de enorme tamaño (el récord entre las frutas fue una de 120 kg)."
  } */])

  return (
    <main /* className={styles.main} */>
      <ResponsiveAppBar />
      <br />
      <Grid container justifyContent={"center"} alignContent={"center"}>
        <Grid display={"flex"}>
         {fruits.map(fruit => 
            <ReviewCard fruit={fruit} key={fruit.name}/>
          )} 
        </Grid>
      </Grid>
    </main>
  );
}
