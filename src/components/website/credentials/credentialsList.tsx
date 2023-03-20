import React, { useState, useEffect } from 'react';
import { AddCredentialModal } from '../addCredential';
export default function CredentialsList(props: any) {
    const [credentials, setCredentials] = useState <any>({});
    const [credentialsReceived, setCredentialsReceived] = useState<boolean>(false);
    const [credentialsModal, setCredentialsModel] = useState<boolean>(false);

    const getCredentials: () => any = async () => {
        let res = await fetch(
            "http://localhost:8000/api/v1/credentials/?credType=all",
            {
                method: "GET",
                mode: "cors",
                headers: { "Content-Type": "application/json" }
            });

        let res_json: any = await res.json();

        console.log("Received JSON =")
        console.log(res_json);

        setCredentialsReceived(true);
        setCredentials(res_json);
        console.log(res_json.credentials[0]);
        // return res_json;
    };

    const deleteCredentialEntry: (id: string) => any = async (id: string) => {
        const resp = await fetch(`http://localhost:8000/api/v1/credentials/delete/${id}`, {
            method: "DELETE"
        });

        const resp_json = await resp.json();

        console.log(resp_json);

        const filtered_credentials: any = credentials.filter((ele: any) => ele.id !== id);
        setCredentials(filtered_credentials);
    }

    useEffect(() => getCredentials, [credentialsReceived === true]);
    return (<div className="px-5 mx-5 align-center text-center">
        {!credentialsReceived? (<div className='w-screen'>
            Getting your credentials...
        </div>) : (<>
                <button className="px-5 py-3 mx-5 my-5 rounded-lg font-bold text-ash-600 text-xl hover:bg-gray-700 hover:text-white shadow-lg" onClick={(_: any) => setCredentialsModel(true)}>Add New Credential</button>
                <AddCredentialModal label="Add new credential" onClick={(e: any) => setCredentialsModel(true)} isActive={credentialsModal} onSubmit={(e: any) => setCredentialsModel(false)} onClose={(_: any) => setCredentialsModel(false)}></AddCredentialModal>
                <table className='table-auto w-full h-full'>
                <thead>
                    <tr className="row space-x-3 border-2 border-gray-400">
                        <td className='font-bold text-gray-600 text-xl border-2 border-gray-400 my-3 py-3'>Index</td>
                        <td className='font-bold text-gray-600 text-xl border-2 border-gray-400 my-3 py-3'>Credential</td>
                        <td className='font-bold text-gray-600 text-xl border-2 border-gray-400 my-3 py-3'>Credential Type</td>
                        <td className='font-bold text-gray-600 text-xl my-3 py-3'>Leaked?</td>
                        <td className='font-bold text-gray-600 text-xl my-3 py-3'>Actions</td>
                    </tr>
                </thead>
                <tbody className='object-center'>
                {credentials.credentials.map((ele: any, idx: number) => {
                    return <tr className='row space-x-5 my-3 py-3 border-b-2 border-gray-300' id={ele['id']}>
                        <td className='py-5 text-lg'>{idx+1}.</td>
                        <td className='py-5 text-lg'>{ele['credential']}</td>
                        <td className='py-5 text-lg'>{ele['credential_type']}</td>
                        <td className='py-5 text-lg'>
                            {
                                (!ele['leaked']) ? <div className='text-green-600 font-bold'>No</div> : <div  className='text-red-600 font-bold'>Yes</div>
                            }
                        </td>
                        <td className="py-5 text-lg font-bold">
                            <button className="rounded-full px-3 py-1 my-3 text-red-500 hover:bg-red-500 hover:text-white" onClick={(_: any) => deleteCredentialEntry(ele['id'])}>X</button>
                        </td>
                    </tr>
                })}
        </tbody></table></>)}
    </div>
    )
}