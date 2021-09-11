import { useContext } from "react";
import { PhoneNumbersContext } from "../contexts/phoneContext";

const NameFilter = () => {

    const { search, setSearch } = useContext(PhoneNumbersContext);


    const handleChange = (event) => {
        const searchTermValue = event.target.value;
        setSearch(searchTermValue);
    }


    return (
        <div className="searchNumbersField">
            <label>enter a name:</label>
            <input
                type="text"
                name="inputName"
                placeholder="name"
                onChange={handleChange}
                value={search}
            ></input>
        </div>
        )
}

export default NameFilter;