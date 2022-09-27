import React, { useState } from 'react';
import ChangePersonExecute from '../../components/change';

// import { Container } from './styles';

const ChangePerson: React.FC = () => {
    const [id, setId] = useState<string>('15xxi3zhssxi7168pf6c');

    const [sent, setSent] = useState(false);

    return (
        !sent ? (
            <div className='w-full flex'>
                <div className="flex items-center w-full max-w-3xl p-8 mx-auto lg:px-12 lg:w-3/5">
                <div className="w-full">
                    <h1 className="text-2xl font-semibold tracking-wider text-gray-800 capitalize dark:text-white">
                        Change marketing off to a Person by ID
                    </h1>

                    <form className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2">
                        <div>
                            <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Person ID</label>
                            <input type="text" value="15xxi3zhssxi7168pf6c" onChange={(e) => setId(e.target.value)} className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                        </div>

                        <button
                            onClick={() => setSent(true)}
                            className="flex items-center disabled:opacity-60 justify-between w-full px-6 py-3 text-sm tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                            <span>Change </span>

                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 rtl:-scale-x-100" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd"
                                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                    clipRule="evenodd" />
                            </svg>
                        </button>
                    </form>
                </div>
            </div>
            </div>
        ) : (
            <ChangePersonExecute id={id} />
        )
    );
}

export default ChangePerson;