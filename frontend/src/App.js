
import './App.css';
import { useContext } from 'react';
import { PhoneNumbersContext } from './contexts/phoneContext';
import PhoneList from './components/PhoneList';
import NameFilter from './components/NameFilter';


const PhoneBook = () => {

  const { entries, search, setSearch } = useContext(PhoneNumbersContext);


  const handleChange = (event) => {
    const searchTermValue = event.target.value;
    setSearch(searchTermValue);
  }

  const filterResults = () => {

    let entriesFilterd = entries;
    if (search) {
      entriesFilterd = entriesFilterd.filter((entrie) => {
        return entrie.name.toLowerCase().includes(search.toLowerCase());
      })
    }

    const jsxEntries = entriesFilterd.map(entry => {
      return <li>{entry.name}: {entry.phone}</li>
    })
    return jsxEntries;
  }

  return (
    <div>
      <header className="AppHeader">
        <h1>search phone numbers</h1>
      </header>

      <div className="wrap">

        <NameFilter />


        <PhoneList />

      </div>

      <footer>
        <p>Wilhelmine Erber - september 2021</p>
      </footer>
    </div>
  );
}

export default PhoneBook;
