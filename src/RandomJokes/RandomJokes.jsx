import React, { useState } from 'react'
import { useMutation, useQuery } from 'react-query'

export default function RandomJokes() {
    const { data, status } = useQuery('joke', fetchJokes);
    const [jokeData, setJokeData] = useState({
        "formatVersion": 3,
        "category": "Misc",
        "type": "single",
        "joke": "A horse walks into a bar...",
        "flags": {
            "nsfw": true,
            "religious": false,
            "political": true,
            "racist": false,
            "sexist": false,
            "explicit": false
        },
        "lang": "en"
    })

    const {data: postJokesData, status: postJokesStatus, mutate: postJokesCaller} = useMutation((params)=> {
        return fetch(`https://v2.jokeapi.dev/submit`, {
        method: 'POST',
        body: JSON.stringify(
            params
        )
        })
    })

    console.log('psj', postJokesStatus, postJokesData);


    return (
        <div>
            <div>
            {status === "error" && <p>Error fetching joke</p>}
            {status === "loading" && <p>Fetching joke...</p>}
            {status === "success" && (
                <div>
                   <p>{data.setup}</p>
                   <p>{data.delivery}</p>
                </div>
            )}
            </div>
            <button onClick={() => {  
                postJokesCaller(jokeData);
            }}>Post Joke</button>
        </div>
    )
}

const fetchJokes = async () => {
    const res = await fetch("https://v2.jokeapi.dev/joke/Any?safe-mode");
    return res.json();
}
