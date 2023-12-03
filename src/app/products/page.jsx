"use client";
import React from 'react';
import Image from "next/image";
import Login from "@/components/login/Login";
import ResponsiveAppBar from "@/components/appbar/AppBar";
import ReviewCard from "@/components/card/Card";
import { Grid } from "@mui/material";
import { useState } from "react";


function PageProdcuts(props) {

    const [ fruits, setFruits] = useState([{
        img: "/melon.jpeg",
        name: "Melon",
        family: "Cucumis melo, llamado comúnmente melón, es una especie de la familia de las cucurbitáceas.",
        description: "Planta anual monoica de tallos rastreros. Se cultiva por de temporada veraniega con un gran contenido de agua y de sabor dulce. La planta posee tallos blandos y pilosos que crecen a ras del suelo. Sus hojas tienen peciolo acanalado y son palmadas, es decir, su aspecto es semejante al de una mano.  Su fruto es una baya pepónide con forma desde esférica hasta elipsoidal. En los llamados melones plátano existen ondulaciones que los hacen parecer una calabaza.  Su tamaño depende de la variedad y de las condiciones de cultivo. Pero suele ser de un mayor tamaño que otras frutas. De este modo, hay melones pequeños que pesan alrededor de 400 g y otros muy grandes que pueden pesar 20 kg o más. El tallo es cilíndrico, de 1 a 3 m de altura, con una inflorescencia terminal en forma de espiga compuesta por flores bisexuales. El grano es una cariópside de alrededor de 4 mm de diámetro. Tiene inflorescencias en panojas y semillas de 3 mm, esféricas y oblongas, de color negro, rojizo y amarillento. Tiene un sistema radicular que puede llegar en terrenos permeables a 2 m de profundidad. Las flores tienen estambres y pistilos. En las variedades más usadas habitualmente, los pesos de los frutos fluctúan entre más de medio kilo y menos de cinco."
      },{
        img: "/sandias.jpeg",
        name: "Sandia",
        family: "Citrullus lanatus, comúnmente llamada melón de agua, sandía, acendría, sindria, patilla, es una especie de la familia Cucurbitaceae.",
        description: "Es una planta herbácea de ciclo anual, trepadora o rastrera, de textura áspera, con tallos pilosos provistos de zarcillos y hojas de cinco lóbulos profundos. Las flores son amarillas, grandes y unisexuales, las femeninas tienen el gineceo con tres carpelos, y las masculinas con cinco estambres.   El fruto de la planta es grande (normalmente más de 4 kg), pepónide, carnoso y jugoso (más del 90% es agua), casi esférico, de textura lisa y sin porosidades, de color verde en dos o más tonos. La pulpa es de color rojo —por el antioxidante licopeno— y de carne de sabor generalmente dulce (más raramente amarilla y amarga)."
      } ,{
        img: "/fresas.jpeg",
        name: "Fresa",
        family: "La fresa o frutilla (Fragaria) es un género de plantas rastreras estoloníferas de la familia Rosaceae.",
        description: "Son plantas herbáceas, perennifolias, con rizomas y estolones epigeos más o menos desarrollados, que enraízan en los nudos donde nacen hojas arrosetadas tri-partidas. Los tallos son generalmente simples, más o menos erectos y anuales. Las hojas se agrupan en falsas rosetas, con los segmentos ovalo-rómbicos, distalmente dentados. Las inflorescencias se organizan en cimas con brácteas. Las flores, hermafroditas o funcionalmente unisexuales, tienen un receptáculo con la zona axial algo cónica, acrescente y carnosa en la fructificación. Los 5 sépalos son lanceolados y en general enteros, más o menos acrescentes, erectos, patentes o reflejos en la fructificación. El calículo tiene 5 piezas más estrechas que los sépalos y son usualmente enteros. Los pétalos, en general en número de 5, son habitualmente mayores que los sépalos; son obovados, no escotados, con la uña corta, blancos, blanco-verdosos o de color crema. Hay unos 10-20 estambres y numerosos carpelos libres implantados en la zona axial del receptáculo. El fruto es un poliaquenio de aquenios ovoides incrustados en dicho receptáculo (eterio) que se vuelve carnoso al madurar."
      }/*,{
        img: "/guanabana.jpeg",
        name: "Guanabana",
        family: "Citrullus lanatus, comúnmente llamada melón de agua, sandía, acendría, sindria, patilla, es una especie de la familia Cucurbitaceae. Es originaria de África con una gran presencia y difusión en todo el mundo. Se cultiva de manera extendida por todo el mundo debido a su fruto, el cual es un pepónide de enorme tamaño (el récord entre las frutas fue una de 120 kg).",
        description: "Citrullus lanatus, comúnmente llamada melón de agua, sandía, acendría, sindria, patilla, es una especie de la familia Cucurbitaceae. Es originaria de África con una gran presencia y difusión en todo el mundo. Se cultiva de manera extendida por todo el mundo debido a su fruto, el cual es un pepónide de enorme tamaño (el récord entre las frutas fue una de 120 kg)."
      },{
        img: "/mango.jpeg",
        name: "Mango",
        family: "Citrullus lanatus, comúnmente llamada melón de agua, sandía, acendría, sindria, patilla, es una especie de la familia Cucurbitaceae. Es originaria de África con una gran presencia y difusión en todo el mundo. Se cultiva de manera extendida por todo el mundo debido a su fruto, el cual es un pepónide de enorme tamaño (el récord entre las frutas fue una de 120 kg).",
        description: "Citrullus lanatus, comúnmente llamada melón de agua, sandía, acendría, sindria, patilla, es una especie de la familia Cucurbitaceae. Es originaria de África con una gran presencia y difusión en todo el mundo. Se cultiva de manera extendida por todo el mundo debido a su fruto, el cual es un pepónide de enorme tamaño (el récord entre las frutas fue una de 120 kg)."
      },{
        img: "/sandia.jpeg",
        name: "Sandia",
        family: "Citrullus lanatus, comúnmente llamada melón de agua, sandía, acendría, sindria, patilla, es una especie de la familia Cucurbitaceae. Es originaria de África con una gran presencia y difusión en todo el mundo. Se cultiva de manera extendida por todo el mundo debido a su fruto, el cual es un pepónide de enorme tamaño (el récord entre las frutas fue una de 120 kg).",
        description: "Citrullus lanatus, comúnmente llamada melón de agua, sandía, acendría, sindria, patilla, es una especie de la familia Cucurbitaceae. Es originaria de África con una gran presencia y difusión en todo el mundo. Se cultiva de manera extendida por todo el mundo debido a su fruto, el cual es un pepónide de enorme tamaño (el récord entre las frutas fue una de 120 kg)."
      } */])
    
    return (
        <div>
            <ResponsiveAppBar />
            <br />
            <Grid container justifyContent={"center"} columnSpacing={2} rowSpacing={2} >
                <Grid item display={"flex"}>
                {fruits.map(fruit => 
                    <ReviewCard fruit={fruit} key={fruit.name}/>
                )} 
                </Grid>
            </Grid>   
        </div>
    );
}

export default PageProdcuts;