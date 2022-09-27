import type { NextPage } from "next";
import { useState } from "react";

import Init from "../components/init";
import GetAll from "../components/get";
import NewPerson from "./create/new-person";
import GetGroup from "../components/getgroup";
import ChangePerson from "./change/change-person";
import GetOne from "../components/get_one";

const Home: NextPage = () => {
  const [component, setComponent] = useState<'init' | 'other' | 'get' | 'get_one' | 'create' | 'change'>('get');
  
  return (
    <>
      <main className="container mx-auto flex flex-col items-center justify-center min-h-screen p-4">
        <h1 className="text-5xl md:text-[5rem] leading-normal font-extralight text-gray-600">
          demo surrealdb
        </h1>
        <p className="text-2xl text-gray-600">lets do some test...</p>
        <div className="pt-6 text-2xl text-blue-500 flex justify-center items-center w-full flex-col">
          <div className="flex gap-2">
            <button className={`btn btn-sm ${component === 'init' && 'btn-primary'}`} onClick={()=> setComponent('init')}>Init</button>
            <button className={`btn btn-sm ${component === 'other' && 'btn-primary'}`} onClick={()=> setComponent('other')}>Get group by mkt</button>
            <button className={`btn btn-sm ${component === 'get' && 'btn-primary'}`} onClick={()=> setComponent('get')}>Get all</button>
            <button className={`btn btn-sm ${component === 'get_one' && 'btn-primary'}`} onClick={()=> setComponent('get_one')}>Get One</button>
            <button className={`btn btn-sm ${component === 'create' && 'btn-primary'}`} onClick={()=> setComponent('create')}>Create</button>
            <button className={`btn btn-sm ${component === 'change' && 'btn-primary'}`} onClick={()=> setComponent('change')}>Change mkt</button>
          </div>
          <div className="w-full m-2 overflow-auto rounded-xl">
            {component === 'init' && <Init />}
            {component === 'other' && <GetGroup />}
            {component === 'get' && <GetAll />}
            {component === 'get_one' && <GetOne />}
            {component === 'create' && <NewPerson />}
            {component === 'change' && <ChangePerson />}
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
