import React, { useEffect, useState } from 'react'

const ApiLogin = (user, password) => {
    console.log(user);
    console.log(password);
    let validate = false;
    let users = [{
        user: "Andres",
        password: "12345"
    }];

    users.map(item=>{
        if(item.user === user && item.password === password){
            validate= true;
        }
    })
    return validate;

}

export { ApiLogin} 
