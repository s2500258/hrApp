import './App.css';
import Footer from './components/Footer';
import Header from './components/header';
import PersonList from './components/PersonList';
import data from "./data";
import { useState } from "react";

function App() {

const title="HR Application";
const copyright="Copyrights by WP25K";
const [employees, setEmployees] = useState (data);

  return (
    <>
      <Header title={title} />
      <main>
        <PersonList employees={employees} />
      </main>
      <Footer copyright={copyright} />
    </>
  )
}

export default App;
