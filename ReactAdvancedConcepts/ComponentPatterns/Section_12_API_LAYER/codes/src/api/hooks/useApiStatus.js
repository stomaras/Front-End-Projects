import { ERROR, defaultApiStatuses } from "../../constants/api-status";

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