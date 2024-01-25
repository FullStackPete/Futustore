import { useState, useEffect } from 'react';
import axios from 'axios';
import { apiData } from '../models/models';

function useFetch(url:string) {
    const [data,setData] = useState<apiData>(null);
    const [error,setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(()=>
    {
        axios.get(url)
        .then((res)=>{
            if(res.status>=400){
                throw new Error("server error");
            }
            setData(res.data);
        })
        .catch((err)=>{
            setError(err.message);
        })
        .finally(()=>{setLoading(false)})
    },[])
    return {data,error,loading}
}

export default useFetch;