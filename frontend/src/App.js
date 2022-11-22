import './App.css';
import PhoneList from './components/PhoneList';
import NameFilter from './components/NameFilter';

const PhoneBook = () => {

  return (
    <div>
      <header className="AppHeader">
        <h1>search phone numbers</h1>
        <p>Enter a name here to search for the person's phone number.</p>
      </header>
      <div className="wrap">
        <NameFilter />
        <PhoneList />
      </div>
      <footer>
        <p>Wilhelmine Erber - september 2022</p>
      </footer>
    </div>
  );
}

export default PhoneBook;