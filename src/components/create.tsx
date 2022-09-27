import React from 'react';
import { trpc } from '../utils/trpc';
import JSONPretty from 'react-json-pretty';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const JSONPrettyMon = require('react-json-pretty/dist/monikai');

const CreatePersonExecute: React.FC<{name: any, title: string, marketing: boolean}> = ({name, title, marketing}) => {
    const { data, isLoading, error } = trpc.useQuery(["surrealdb.create_person", {
        name:name,
        title: title,
        marketing: marketing,
    }], {refetchOnWindowFocus: false, refetchInterval: false});
    
    if(isLoading) return <div className='loading'>procesing...</div>

    if(error) return <div className='bg-red-500 text-white'>Error: 
        <JSONPretty id="json-pretty" theme={JSONPrettyMon} data={error}></JSONPretty>
    </div>

    return (
        <JSONPretty id="json-pretty" theme={JSONPrettyMon} data={data?.msg}></JSONPretty>
    );
}

export default CreatePersonExecute;