import React, { useState } from 'react'
import { useMutation, useQuery } from 'react-query'
import { postJoke, fetchJoke } from '../api/jokeAPI';


const fetchJokes = fetchJoke

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

    const {data: postJokesData, status: postJokesStatus, mutate: postJokesCaller, isError: error} = useMutation(postJoke)
    

    console.log('psj', postJokesStatus, error);


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


