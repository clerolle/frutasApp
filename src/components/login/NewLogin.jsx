"use client";
import React, { useState } from 'react';
import styles from "./NewLogin.module.css";
import { useRouter } from 'next/navigation';


const NewLogin = () => {

    const router = useRouter();

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
        if(user.name !== "" && user.password !== ""){
                router.push("/products");
        }else if(user.name !== "" && user.password === ""){
            console.log("ingresar password")
        }else if(user.name === "" && user.password !== ""){
            console.log("ingresar usuario")
        }else{
            console.log("usuario y contraseña erronea")
        }
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