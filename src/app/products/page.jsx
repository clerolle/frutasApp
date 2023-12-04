"use client";
import React from 'react';
import Image from "next/image";
import Login from "@/components/login/Login";
import ResponsiveAppBar from "@/components/appbar/AppBar";
import ReviewCard from "@/components/card/Card";
import { Grid } from "@mui/material";
import { useState } from "react";
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

const Item = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.mode ===  '#1A2027',
  border: '1px solid',
  borderColor: theme.palette.mode === 'dark' ? '#444d58' : '#ced7e0',
  padding: theme.spacing(1),
  borderRadius: '4px',
  textAlign: 'center',
}));

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
      },{
        img: "/guanabana.jpeg",
        name: "Guanabana",
        family: "La guanábana (nombre de origen taíno), guanábano o graviola (Annona muricata) es un árbol de la familia Annonaceae. Originario de México, Centro y Sudamérica, se cultiva por sus frutos comestibles en muchos países de clima tropical.",
        description: "Árbol pequeño, de 3-8 m de altura y ramificado desde la base, despide mal olor cuando se le tritura. Las ramas son de color rojizo y sin vello, cilíndricas, arrugadas, ásperas y con numerosas lenticelas. La copa crece extendida, con follaje compacto. Las hojas son simples, oblongo-elípticas a oblongo-obovadas enteras, duras, lisas, de color verde oscuro y 5-15 cm de longitud."
      } ,{
        img: "/mango.jpeg",
        name: "Mango",
        family: "El mango (llamado mangó en Puerto Rico, y mangüeña en Guinea Ecuatorial) es el nombre de las frutas de varias especies de árboles del género Mangifera, especialmente de Mangifera indica, y sus numerosos cultivares.",
        description: "El mango de la especie Mangifera indica es una fruta jugosa (más específicamente una drupa) y tiene numerosas variedades con formas, colores, texturas y sabores muy variables. Es redondo a oblongo y puede tener pesos de menos de 50 g a más de 2 kg. Consta de una cáscara, una pulpa comestible (el mesocarpio) y un endocarpio duro que contiene una semilla.2​ Durante el desarrollo del fruto, la cáscara es de un color verde oscuro, que cambia a tonos verdes claros, amarillos, de color naranja, rojos o de color borra de vino al madurar el fruto. Según la variedad, la pulpa del mango maduro es dulce, de textura suave o fibrosa y de color naranja o amarillo.3​ La variedad llamada mango de hilacha es la que mayor cantidad de fibra contiene. Esta fruta contiene ácido glutámico, cuya función es estimular la memoria y mantener las células activas, de igual manera tonifica el corazón, elimina las toxinas, fortalece el tejido y previene el envejecimiento prematuro. Además, es una fruta beneficiosa para el hígado y mejora la digestión."
      } ])
    
    return (
        <div style={{background: "black"}}>
            <ResponsiveAppBar />
            <br />
            <Grid container  direction={"columns"} justifyContent={"center"} >
                <Grid item /* display={"flex"} */>
                {fruits.map(fruit => 
                    <Item key={fruit.name}>
                      <ReviewCard fruit={fruit} key={fruit.name}/>
                    </Item>
                )} 
                </Grid>
            </Grid>   
        </div>
    );
}

export default PageProdcuts;