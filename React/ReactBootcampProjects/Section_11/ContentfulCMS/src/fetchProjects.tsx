import { useState, useEffect } from 'react';
import React from 'react'
import { createClient } from 'contentful'

const client = createClient({
    space:'h0qynugt7gsa',
    environment:'master',
    accessToken:'QA3L1jRBktjgqqvTm1fYif_GmhTGGzWpUV_wKMtCWt0',
});


export const useFetchProjects = () => {
    const [loading,setLoading] = useState(true);
    const [projects, setProjects] = useState<any>([]);


    const getData = async() => {
        try{
            const res = await client.getEntries({content_type:'projects'});
            const projects = res.items.map((item) => {
                const {title,url, image} = item.fields
                const id = item.sys.id
                return {title, id, url, image}
            })
            setProjects(projects)
            setLoading(false);

        }catch(error){
            console.log(error);
            setLoading(false);
        }
    }

    useEffect(() => {
        getData()
    },[])

    return {loading, projects};
}



client.getEntries({content_type:'projects'}).then((response) => console.log(response));

