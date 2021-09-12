/* 
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
 */

//Using class component
import { Component } from "react";
import { PhoneNumbersContext } from "../contexts/phoneContext";

class PhoneList extends Component {

  static contextType = PhoneNumbersContext;

  filterResults = () => {
    const context = this.context;
    let entriesFilterd = context.entries;
    if (context.search) {
      entriesFilterd = entriesFilterd.filter((entrie) => {
        return entrie.name.toLowerCase().includes(context.search.toLowerCase());
      })
    }
    const jsxEntries = entriesFilterd.map(entry => {
      return <li key={entry.phone}>{entry.name}: {entry.phone}</li>
    })
    return jsxEntries;
  }

  render() {
    return (
      <div className="showPhoneBook">
        <ul>
          {this.filterResults()}
        </ul>
      </div>
    )
  }
}

export default PhoneList;