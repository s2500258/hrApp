import './App.css'
import Footer from './components/Footer'
import Header from './components/header'
import Person from './components/Person'

function App() {

  const employees = [
  {
    name: "Elias Virtanen",
    title: "Senior Full Stack Developer",
    salary: 72000,
    phone: "+358 40 123 4567",
    email: "elias.virtanen@techcorp.fi",
    animal: "Cat"
  },
  {
    name: "Sofia Laakso",
    title: "Product Manager",
    salary: 85000,
    phone: "+358 50 987 6543",
    email: "sofia.laakso@techcorp.fi",
    animal: "Dog"
  },
  {
    name: "Janne Aalto",
    title: "UX/UI Designer",
    salary: 63000,
    phone: "+358 45 222 3344",
    email: "janne.aalto@techcorp.fi",
    animal: "Fox"
  },
  {
    name: "Kaisa Mäkinen",
    title: "Data Analyst",
    salary: 68000,
    phone: "+358 41 555 6677",
    email: "kaisa.makinen@techcorp.fi",
    animal: "Owl"
  },
  {
    name: "Leo Niemi",
    title: "DevOps Engineer",
    salary: 78000,
    phone: "+358 50 112 2334",
    email: "leo.niemi@techcorp.fi",
    animal: "Dog"
  },
  {
    name: "Aino Salo",
    title: "Marketing Specialist",
    salary: 59000,
    phone: "+358 40 778 8990",
    email: "aino.salo@techcorp.fi",
    animal: "Rabbit"
  },
  {
    name: "Miko Kallio",
    title: "Junior Frontend Developer",
    salary: 52000,
    phone: "+358 45 665 4433",
    email: "miko.kallio@techcorp.fi",
    animal: "Cat"
  },
  {
    name: "Sanni Järvinen",
    title: "HR Coordinator",
    salary: 55000,
    phone: "+358 41 990 0112",
    email: "sanni.jarvinen@techcorp.fi",
    animal: "Dog"
  },
  {
    name: "Tomi Rantala",
    title: "Cybersecurity Expert",
    salary: 95000,
    phone: "+358 50 333 4455",
    email: "tomi.rantala@techcorp.fi",
    animal: "Pig"
  },
  {
    name: "Venla Koskinen",
    title: "Technical Writer",
    salary: 61000,
    phone: "+358 40 887 7665",
    email: "venla.koskinen@techcorp.fi",
    animal: "Hamster"
  }
]

  return (
    <>
      <Header title="HR Application" />
      <main>
        {employees.map((employee,index)=>(
          <Person employee={employee} key={index}/>
        )
        )}
      </main>
      <Footer copyright="Copyright by WP25K" />
    </>
  )
}

export default App
