import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import useAxiosPublic from "./useAxiosPublic";

const useBiodata = () => {
    const [biodata, setBiodata] = useState();
    const [loading, setLoading] = useState(true);
    useEffect(()=> {
        fetch('https://matrimony-server-chi.vercel.app/biodatas')
        .then(res => res.json())
        .then(data => {
            setBiodata(data);
            setLoading(false);
        });
    }, [])
    return [biodata, loading]
};

export default useBiodata;