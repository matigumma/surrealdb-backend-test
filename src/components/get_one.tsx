import React from 'react';
import { trpc } from '../utils/trpc';
import JSONPretty from 'react-json-pretty';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const JSONPrettyMon = require('react-json-pretty/dist/monikai');

const GetOne: React.FC = () => {
    const { data, isLoading, error } = trpc.useQuery(["surrealdb.get_one"], {refetchOnWindowFocus: false, refetchInterval: false});
    
    if(isLoading) return <div className='loading'>...</div>

    if(error) return <div className='bg-red-500 text-white'>Error al cargar surrealdb get</div>

    return (
        <JSONPretty id="json-pretty" theme={JSONPrettyMon} data={data?.msg}></JSONPretty>
    );
}

export default GetOne;