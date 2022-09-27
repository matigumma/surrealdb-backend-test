import React from 'react';
import { trpc } from '../utils/trpc';
import JSONPretty from 'react-json-pretty';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const JSONPrettyMon = require('react-json-pretty/dist/monikai');

const Init: React.FC = () => {
    const { data, isLoading, error } = trpc.useQuery(["surrealdb.init"], {refetchOnWindowFocus: false, refetchInterval: false});
    
    if(isLoading) return <div className='loading'>...</div>

    if(error) return <div className='bg-red-500 text-white'>Error al cargar surrealdb init</div>

    return (
        <JSONPretty id="json-pretty" theme={JSONPrettyMon} data={data?.msg}></JSONPretty>
    );
}

export default Init;