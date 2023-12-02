"use client";
import React, { useState } from 'react';
import styles from "./NewLogin.module.css";


const NewLogin = () => {

    const [user, setUser] = useState({
        name: "",
        password: ""
    })

    const handleChange= (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }


    const submit = (e) => {
        e.preventDefault();
        console.log("ingresa acá");
    }
    return ( 
            <form onSubmit={submit}>
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
                    />
                </div>
                <div className={styles.input}>
                    <img src="/password.png" alt="password" />
                    <input 
                        type="password" 
                        placeholder="Ingrese contraseña" 
                        name='password' 
                        id='password' 
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