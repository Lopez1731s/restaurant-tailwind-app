import { useState, useEffect } from "react";
import axios from 'axios'

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);


    useEffect(() => {
        const getNotes = async () => {
            setLoading(true);

            await axios
                .get(url)
                .then((response) => {
                    setData(response.data);
                })
                .catch((error) => {
                    setError(error);
                })
                .finally(() => {
                    setLoading(false);
                });
        };
        getNotes();
    }, [url]);

    return { data, loading, error };
}

export default useFetch