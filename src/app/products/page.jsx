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

import { fruitsAvailable } from '../../../data';

const Item = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.mode ===  '#1A2027',
  border: '1px solid',
  borderColor: theme.palette.mode === 'dark' ? '#444d58' : '#444d58',
  boxShadow: "10px 10px 30px black", 
  padding: theme.spacing(1),
  borderRadius: '4px',
  textAlign: 'center',
}));

function PageProdcuts(props) {

    const [ fruits, setFruits] = useState(fruitsAvailable);
    
    return (
        <div /* style={{background: "black"}} */>
            <ResponsiveAppBar />
            <br />
            <Grid container >
                <Grid item display={"flex"} flexWrap={'wrap'} justifyContent={"center"} gap={5}>
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