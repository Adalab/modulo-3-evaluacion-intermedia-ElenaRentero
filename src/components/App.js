import '../styles/App.scss';
import fetchData from '../services/api';
import { useState, useEffect } from 'react';


function App() {
  // VARIABLES ESTADO
  const [adalabers, setAdalabers] = useState([]);
  const [newAdalaber, setNewAdalaber] = useState({
    id: crypto.randomUUID(),
    name: '',
    counselor: '',
    speciality: '',
  });
  const [search, setSearch] = useState('');


  // USEEFFECT
  useEffect(() => {
    fetchData().then((adalaber) => {
      setAdalabers(adalaber)
    })
  }, []);

  // FUNCIONES HANDLER
  const handleSubmit = (ev) => {
    ev.preventDefault();
  };

  const handleInput = (ev) => {
    setNewAdalaber({ ...newAdalaber, [ev.target.name]: ev.target.value });
  };

  const handleClick = () => {
    setAdalabers([...adalabers, newAdalaber]);
    setNewAdalaber({
      name: '',
      counselor: '',
      speciality: '',
    })
  };

  const handleSearch = (ev) => {
    setSearch(ev.target.value)
  }


  // FUNCIONES Y VARIABLES QUE AYUDEN A RENDERIZAR
  const renderAdalabers = () => {
      const adalabersResult = adalabers
      .filter((eachAdalaber) => eachAdalaber.name.toLowerCase().includes(search.toLowerCase()))
      .map((eachAdalaber) => {
        return (
          <tr key={eachAdalaber.id}>
            <td>{eachAdalaber.name}</td>
            <td>{eachAdalaber.counselor}</td>
            <td>{eachAdalaber.speciality}</td>
          </tr>
        );
      });
      return adalabersResult;
    };

  //RETURN

  return (
    <div className="App">
      <header>
        <h1>Adalabers</h1>
      </header>
      <section>
        <form>
        <label htmlFor='searchName'>Nombre:</label>
        <input
              name='search'
              id='search'
              type='search'
              placeholder="Ej:Maricarmen"
              onInput={handleSearch}
            />
        </form>
      </section>
      <section>
        <table className="table">
          <thead><tr>
            <th>Nombre</th>
            <th>Tutora</th>
            <th>Especialidad</th>
          </tr></thead>
          <tbody>{renderAdalabers()}</tbody>
        </table>
        <form action='' onSubmit={handleSubmit}>
            <label htmlFor='name'>Nombre:</label>
            <input
              name='name'
              id='name'
              type='text'
              value={newAdalaber.name}
              onChange={handleInput}
            />
            <label htmlFor='counselor'>Tutora:</label>
            <input
              name='counselor'
              id='counselor'
              type='text'
              value={newAdalaber.counselor}
              onChange={handleInput}
            />
            <label htmlFor='speciality'>Especialidad:</label>
            <input
              name='speciality'
              id='speciality'
              type='text'
              value={newAdalaber.speciality}
              onChange={handleInput}
            />
            <button type='button' onClick={handleClick}>
              Añadir una nueva Adalaber
            </button>
          </form>
      </section>
    </div>
  );
}

export default App;