import React, { useEffect, useState } from 'react';
import {v4 as uuid4} from 'uuid';

export const APIFetch = () => {

    const [data, setData] = useState(null);
    const [dataWithId, setDataWithId] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchAPI = async () => {
            try {
                const response = await fetch('https://swapi.dev/api/people/?format=json');
                if (response.ok) {
                    const result = await response.json();
                    setData(result.results.map(ele => {return {name: ele.name}}));
                } else {
                    throw new Error('API request failed');
                }
            } catch (error) {
                setError(error.message);
                console.error('Error:', error.message);
            }
        };

        fetchAPI();
    }, []);

    useEffect(() => {
        const withId = data?.map(ele => { return {id: uuid4(), person: ele.name}})
        setDataWithId(withId)
    },[data]);
    
    return (
        <div>
            <h1>API Fetch</h1>
            {dataWithId && <ol>
                {dataWithId.map(people => (
                    <li key={dataWithId.id}>{people.person}</li>
                ))}
            </ol>}
            {error && <h3>{error}</h3>}
        </div>
    )
}