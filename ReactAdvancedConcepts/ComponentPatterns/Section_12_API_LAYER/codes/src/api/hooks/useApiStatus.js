import { useState } from "react";
import { ERROR, IDLE, defaultApiStatuses } from "../../constants/api-status";
import { useMemo } from "react";

const capitalize = (s) => s.charAt(0).toUpperCase() + s.slice(1);



const prepareStatuses = (currentStatus) => {
    const statuses = {};
    for(const status of defaultApiStatuses){
        const normalizedStatus = capitalize(status.toLowerCase());
        const normalizedStatusKey = `is${normalizedStatus}`;
        statuses[normalizedStatusKey] = status === currentStatus
    }
    return statuses;
}

export const useApiStatus = (currentStatus = IDLE) => {
    const [status, setStatus] = useState(currentStatus);
    const statuses = useMemo(() => prepareStatuses(status),[status]);

    return {
        status,
        setStatus,
        ...statuses,
    };
}