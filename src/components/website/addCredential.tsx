import { ReactHTMLElement, useEffect, useState } from "react";

export const AddCredentialModal = ({ label, isActive, onSubmit, onClick, onClose }: any) => {
    // let isActive: boolean = props.isActive
    // let onSubmit: (e: any) => any = props.onSubmit
    // let onClick: (e: any) => any = props.onClick
    // let onClose: (e: any) => any = props.onClose

    // let formDetails: any = {
    //     credential: "",
    //     credential_type: "",
    //     leaked: false,
    //     leaked_date: "",
    // }

    const [credential, setCredential] = useState<string>("");
    const [credential_type, setCredential_type] = useState<string>("");
    const [leaked, setLeaked] = useState<boolean>(false);
    const [leaked_date, setLeaked_date] = useState<string>("");


    const sendRequest: (formDetails: any) => any = async (formDetails: any) => {
        console.log("Details to send = ")
        console.log(formDetails)
        let res = await fetch(
            "http://localhost:8000/api/v1/credentials/add",
            {
                method: "POST",
                // mode: "cors",
                body: JSON.stringify(formDetails),
                headers: { "Accept": "application/json", "Content-Type": "application/json" }
            }
        );

        let res_json = await res.json();

        console.log(res_json);
    } 

    useEffect(() => {
        console.log(credential)
        console.log(credential_type)
        console.log(leaked)
        console.log(leaked_date)
    }, [leaked, credential, credential_type, leaked_date])

    return (isActive) ? (<>
        <div className="z-99 absolute h-full w-full top-0 bottom-0 left-0 right-0 opacity-60 bg-gray-600"></div>
        <div className="z-100 absolute top-0 bottom-0 right-0 left-0 w-100 h-100 p-5 m-5">
            <div className="rounded-lg opacity-100 z-10 border-2 hover:cursor-pointer shadow-lg h-xl m-5 p-5 bg-gray-50">
                <div className="flex flex-row text-justify space-around">
                    <h2 className="w-full font-bold text-4xl text-center text-gray-600 px-5 mx-5 py-3">{label}</h2>
                    <div className="w-xs rounded-full text-2xl px-5 py-3 my-3 font-bold hover:bg-red-600 hover:text-white" onClick={onClose}>X</div>
                </div>
                <div className="w-100 h-full my-5 py-5">
                    <div className="grid grid-cols-2 p-5 my-5">
                        <input type="text" className="px-5 py-3 mx-5 my-3 border-b-2 border-b-gray-400" placeholder="Credential" required onChange={(e: React.ChangeEvent<HTMLInputElement>) => {setCredential(e.target.value)}}/>
                        <select className="px-5 py-3 mx-5 my-3 rounded-lg border-b-2 border-b-gray-400" required onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {setCredential_type(e.target.value)}}>
                            <option key="option1" className="px-5 py-3 mx-5 hover:bg-grey-600 hover:text-white text-gray-600" value="email">E-mail</option>
                            <option key="option2" className="px-5 py-3 mx-5 hover:bg-grey-600 hover:text-white text-gray-600" value="phone">Phone</option>
                            <option key="option3" className="px-5 py-3 mx-5 hover:bg-grey-600 hover:text-white text-gray-600" value="username">Username</option>
                            <option key="option4" className="px-5 py-3 mx-5 hover:bg-grey-600 hover:text-white text-gray-600" value="domain">Phone</option>
                        </select>
                        <div>
                            <label htmlFor="credLeaked">Leaked?</label>
                            <input type="checkbox" id="credLeaked" key="credLeaked" className="p-5 m-5 rounded-lg border-b-2 border-b-gray-400" onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setLeaked(!e.target.value) }} />
                        </div>    
                    </div>
                    <div className="py-5 my-5"></div>
                    <button className="bottom-0 font-bold text-4xl text-gray-600 round-lg shadow-lg px-5 py-3 rounded-lg hover:bg-green-600 hover:text-white" onClick={(_: any) => { sendRequest({ credential, credential_type, leaked, leaked_date }); onSubmit(_); }}>Add +</button>
                </div>
            </div>
        </div></>
    ) : (<></>)
}