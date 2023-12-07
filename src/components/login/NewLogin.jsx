"use client";
import React, { useState } from 'react';
import styles from "./NewLogin.module.css";
import { useRouter } from 'next/navigation';
import { SnackbarProvider, enqueueSnackbar } from 'notistack';
import {ApiLogin} from '../api/ApiLogin';


const NewLogin = () => {

    // Router Instance
    const router = useRouter();

    // Local State
    const [user, setUser] = useState({
        name: "",
        password: ""
    })

    // Snackbar Instance
    // const { enqueueSnackbar } = useSnackbar()

    const handleChange= (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    const submit = (e) => {
        e.preventDefault();
        if(user.name !== "" && user.password !== ""){
                let isValidate = ApiLogin(user.name, user.password);
                console.log(isValidate);
                if(isValidate ){
                    enqueueSnackbar('Inicio de sesión exitosa', { variant: 'success' });
                    router.push("/products");
                }else{
                    enqueueSnackbar('usuario o contraseña erroneos', { variant: 'warning' });
                }
        }else if(user.name !== "" && user.password === ""){
            enqueueSnackbar('Todos los campos son obligatorios, contraseña erronea', { variant: 'warning' })
        }else if(user.name === "" && user.password !== ""){
            enqueueSnackbar('Todos los campos son obligatorios,  usuario erroneo', { variant: 'warning' })
        }else{
            enqueueSnackbar('Todos los campos son obligatorios, usuario y contraseña erroneos', { variant: 'warning' })
        }
    }
    return ( 
            <form onSubmit={submit}>
                <SnackbarProvider />
                <div className={styles.container}>
                <div className={styles.header}>
                    <div className={styles.text}>
                        Mercadolandia 
                    </div>
                </div>
                <div className={styles.inputs}>
                <div className={styles.input}>
                    <img src="/person.png" alt="person" />
                    <input 
                        type="text" 
                        placeholder="Ingrese usuario" 
                        name='name' 
                        id='name' 
                        value={user.name} 
                        onChange={(e)=> handleChange(e)} 
                        fullwidth
                    />
                </div>
                <div className={styles.input}>
                    <img src="/password.png" alt="password" />
                    <input 
                        type="password" 
                        placeholder="Ingrese contraseña" 
                        name='password' 
                        id='password' 
                        fullwidth
                        value={user.password} 
                        onChange={(e)=> handleChange(e)} 
                    />
                </div >
                </div>
                <button className={styles.submit} type="submit">
                     Iniciar sesión
                </button>
                </div>
            </form>
     );
}
 
export default NewLogin;