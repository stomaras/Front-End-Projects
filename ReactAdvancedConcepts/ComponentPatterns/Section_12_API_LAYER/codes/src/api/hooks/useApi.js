import { useState } from "react";
import { useApiStatus } from "./useApiStatus";
import { PENDING, SUCCESS, ERROR } from "../../constants/api-status";

export function useApi(fn, config = {}){
    const {initialData} = config;
    const [data, setData] = useState();
    const [error, setError] = useState();
    const {status, setStatus, ...normalizedStatuses} = useApiStatus();

    const exec = async (...args) => {
        try{
            setStatus(PENDING);
            const data = await fn(...args);
            setData(data);
            setStatus(SUCCESS);
            return {
                data,
                error:null
            }
        } catch(err){
            setError(err);
            setStatus(ERROR);
            return {
                error,
                data:null
            }
        }
    };

    return {
        data,
        setData,
        status,
        setStatus,
        exec,
        ...normalizedStatuses
    };
}