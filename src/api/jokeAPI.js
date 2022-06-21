import axios from "axios"


export const postJoke =(params)=> {
    console.log(params)
        return fetch(`https://v2.jokeapi.dev/submit`, {
        method: 'POST',
        body: JSON.stringify(
            params
        )
        })
    }

export const fetchJoke = async () => {
        const res = await fetch("https://v2.jokeapi.dev/joke/Any?safe-mode");
        return res.json();
    }

