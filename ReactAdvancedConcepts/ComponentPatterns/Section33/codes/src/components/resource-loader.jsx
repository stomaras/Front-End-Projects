import { useState, useEffect } from "react"
import axios from "axios"
import React from "react";

export const ResourceLoader = ({resourceUrl, resourceName, children}) => {
    const [resource, setResource] = useState(null);

    useEffect(() => {
        (async () => {
            const response = await axios.get(resourceUrl);
            setResource(response.data);
        })();
    },[resourceUrl]);

    return (
        <>
            {React.Children.map(children, child => {
                if(React.isValidElement(child)){
                    return React.cloneElement(child, {[resourceName]:resource});
                }
                return child;
            })}
        </>
    );
};

export default ResourceLoader;