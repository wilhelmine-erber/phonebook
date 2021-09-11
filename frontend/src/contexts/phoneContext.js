import { createContext, useEffect, useState } from "react";

export const PhoneNumbersContext = createContext();

const PhoneNumberProvider = (props) => {

    // phoneNumbers CENTRAL STATE
    const [entries, setEntries] = useState([]);

    useEffect( () => {
        fetch( 'http://localhost:5000/users' )
        .then(response => response.json())
        .then(data => {
            setEntries(data)
        })
    }, [])

    // central searchTerm
    const [search, setSearch] = useState("");

    const sharedData = { entries, setEntries, search, setSearch }

    return <PhoneNumbersContext.Provider value={ sharedData }>
        { props.children }
    </PhoneNumbersContext.Provider>
}

export default PhoneNumberProvider;