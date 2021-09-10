
import { useContext } from "react";
import { PhoneNumbersContext } from "../contexts/phoneContext";

const PhoneList = () => {

    const { entries, setEntries, search } = useContext( PhoneNumbersContext );

  
    const filterResults = () => {
  
      let entriesFilterd = entries;
      if (search) {
        entriesFilterd = entriesFilterd.filter((entrie) => {
         return entrie.name.toLowerCase().includes(search.toLowerCase());
        })
      }
  
      const jsxEntries = entriesFilterd.map(entry => {
        return <li key={entry.phone}>{entry.name}: {entry.phone}</li>
      })
      return jsxEntries;
    }

    return (
        <div className="showPhoneBook">
        <ul>
          {filterResults()}
        </ul>
      </div>
    )
}

export default PhoneList;
