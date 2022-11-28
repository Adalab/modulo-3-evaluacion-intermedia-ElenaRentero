import '../styles/App.scss';
import fetchData from '../services/api';
import { useState, useEffect } from 'react';


function App() {
  // VARIABLES ESTADO
  const [adalabers, setAdalabers] = useState([]);
  const [newAdalaber, setNewAdalaber] = useState({
    id: '', //crypto.randomUUID(),
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
          (eachAdalaber.name.toLowerCase().includes(searchName.toLowerCase())) &&
          (searchCounselor === '' || eachAdalaber.counselor === searchCounselor)
      )
      .map((eachAdalaber, index) => {
        return <tr key={index}>
          <td className="data__table--details">{eachAdalaber.name}</td>
          <td className="data__table--details">{eachAdalaber.counselor}</td>
          <td className="data__table--details">{eachAdalaber.speciality}</td>
          {eachAdalaber.social_networks === undefined ? null : <td className="data__table--details links">{eachAdalaber.social_networks.map((eachSocial, i) => {
            return <li className="data__table--links" key={i}>
              <a className="data__table--links" href={eachSocial.url}>{eachSocial.name}</a>
            </li>;
          })}</td>}
        </tr>
      });
    return adalabersResult;
  };

  //RETURN

  return (
    <div className="App">

      <header className="header">
        <h1 className="header__title">Adalabers</h1>
      </header>

        <section className="searcher">
          <form className="searcher__form">
            <label className="searcher__form--label" htmlFor='searchName'>Nombre:</label>
            <input
              className="searcher__form--input"
              name='search'
              id='search'
              type='search'
              placeholder="Ej:Maricarmen"
              onInput={handleSearchName}
            />
            <label className="searcher__form--label" htmlFor='searchCounselor'>Escoge una tutora:</label>
            <select className="searcher__form--select" name='counselor' id='searchCounselor' onChange={handleSearchCounselor} value={searchCounselor}>
              <option value=''>Todos</option>
              <option value='Yanelis'>Yanelis</option>
              <option value='Dayana'>Dayana</option>
              <option value='Iván'>Iván</option>
            </select>
          </form>
        </section>

      <main className='main'>
        <section className="data">
          <table className="data__table">
            <thead className="data__table--head"><tr>
              <th>Nombre</th>
              <th>Tutora</th>
              <th>Especialidad</th>
              <th>Redes</th>
            </tr></thead>
            <tbody className="data__table--body">{renderAdalabers()}</tbody>
          </table>
        </section>
      </main>

        <section className='add'>
          <h2 className='add__title'>Añadir una Adalaber</h2>
          <form className="add__form" action='' onSubmit={handleSubmit}>
            <label className="add__form--label" htmlFor='name'>Nombre:</label>
            <input
              className="add__form--input"
              name='name'
              id='name'
              type='text'
              value={newAdalaber.name}
              onChange={handleInput}
            />
            <label className="add__form--label" htmlFor='counselor'>Tutora:</label>
            <input
              className="add__form--input"
              name='counselor'
              id='counselor'
              type='text'
              value={newAdalaber.counselor}
              onChange={handleInput}
            />
            <label className="add__form--label" htmlFor='speciality'>Especialidad:</label>
            <input
              className="add__form--input"
              name='speciality'
              id='speciality'
              type='text'
              value={newAdalaber.speciality}
              onChange={handleInput}
            />
            <button className="add__form--button" type='button' onClick={handleClick}>
              Añadir una nueva Adalaber
            </button>
          </form>
        </section>

    </div>
  );
}

export default App;