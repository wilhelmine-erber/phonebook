/* import { createContext, useEffect, useState } from "react";

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

export default PhoneNumberProvider; */

//Using class component
import { createContext, Component } from "react";
export const PhoneNumbersContext = createContext();

class PhoneNumberProvider extends Component {
    constructor(props) {
        super(props);
        // CENTRAL STATE
        this.state = {
            entries: [],
            search: ""
        };
    }
    loadResource() {
        fetch('http://localhost:5000/users')
            .then(response => response.json())
            .then(data => {
                this.setState({
                    entries: data
                })
            })
    }
    componentDidMount() {
        this.loadResource();
    }
    handleChange = (event) => {
        const searchTermValue = event.target.value;
        this.setState({
            search: searchTermValue
        });
    }
    render() {
        return (
            <PhoneNumbersContext.Provider value={{
                ...this.state,
                handleChange: this.handleChange
            }}>
                {this.props.children}
            </PhoneNumbersContext.Provider>
        )
    }
}
export default PhoneNumberProvider;