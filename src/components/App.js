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
  const [searchName, setSearchName] = useState('');
  const [searchCounselor, setSearchCounselor] = useState('');


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

  const handleSearchName = (ev) => {
    setSearchName(ev.target.value)
  }

  const handleSearchCounselor = (ev) => {
    setSearchCounselor(ev.target.value)
  }

  // FUNCIONES Y VARIABLES QUE AYUDEN A RENDERIZAR
  const renderAdalabers = () => {
      const adalabersResult = adalabers
      .filter(
        (eachAdalaber) => 
        eachAdalaber.name.toLowerCase().includes(searchName.toLowerCase()) &&
        eachAdalaber.counselor.includes(searchCounselor)
        )
      .map((eachAdalaber) => {
        return (
          <tr key={eachAdalaber.id}>
            <td>{eachAdalaber.name}</td>
            <td>{eachAdalaber.counselor}</td>
            <td>{eachAdalaber.speciality}</td>
            <td>{eachAdalaber.social_networks.map((eachSocial, i) => {
              return <li key={i}>
                <a href={eachSocial.url}>{eachSocial.name}</a>
                </li>;
            })}</td>
          </tr>
        );
      });
      return adalabersResult;
    };

  //RETURN

  return (
    <div className="App">
      <header className="header">
        <h1 className="header__title">Adalabers</h1>
      </header>
      <section className="section">
        <form className="section__form">
        <label className="section__form--label" htmlFor='searchName'>Nombre:</label>
        <input
              className="section__form--input"
              name='search'
              id='search'
              type='search'
              placeholder="Ej:Maricarmen"
              onInput={handleSearchName}
            />
        <label className="section__form--label" htmlFor='searchCounselor'>Escoge una tutora:</label>
        <select className="section__form--select" name='counselor' id='searchCounselor' onChange={handleSearchCounselor}>
          <option selected disabled default>Escoge una opción</option>
          <option value='Yanelis'>Yanelis</option>
          <option value='Dayana'>Dayana</option>
          <option value='Iván'>Iván</option>
        </select>
        </form>
      </section>
      <section className="section">
        <table className="section__table">
          <thead className="section__table--head"><tr>
            <th>Nombre</th>
            <th>Tutora</th>
            <th>Especialidad</th>
            <th>Redes</th>
          </tr></thead>
          <tbody className="section__table--body">{renderAdalabers()}</tbody>
        </table>
        <form className="section__form" action='' onSubmit={handleSubmit}>
            <label className="section__form--label" htmlFor='name'>Nombre:</label>
            <input
              className="section__form--input"
              name='name'
              id='name'
              type='text'
              value={newAdalaber.name}
              onChange={handleInput}
            />
            <label className="section__form--label" htmlFor='counselor'>Tutora:</label>
            <input
              className="section__form--input"
              name='counselor'
              id='counselor'
              type='text'
              value={newAdalaber.counselor}
              onChange={handleInput}
            />
            <label className="section__form--label" htmlFor='speciality'>Especialidad:</label>
            <input
              className="section__form--input"
              name='speciality'
              id='speciality'
              type='text'
              value={newAdalaber.speciality}
              onChange={handleInput}
            />
            <button className="section__form--button" type='button' onClick={handleClick}>
              Añadir una nueva Adalaber
            </button>
          </form>
      </section>
    </div>
  );
}

export default App;