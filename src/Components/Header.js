import React, { useState } from 'react';
import '../Styles/Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faCalendarDays, faClock } from '@fortawesome/free-solid-svg-icons';

const data = [
  { name: 'Italian', id: '1' },
  { name: 'Indian', id: '2' },
  { name: 'French', id: '3' },
  { name: 'Chinese', id: '4' },
  { name: 'Japanese', id: '5' },
  { name: 'Spanish', id: '6' }
];

const Header = () => {
  const [value, setValue] = useState('1');

  function onActive(id) {
    setValue(id);
  }

  return (
    <>
      <div className="header">
        <div>
          <FontAwesomeIcon icon={faAngleLeft} size="sm" style={{ fontWeight: 100 }} />
          <span className="header-text" style={{ fontWeight: 500 }}> Select Dishes</span>
        </div>
        <div className="container">
          <div className="backGround"></div>
          <div className="data-time">
            <div className="content">
              <div className='date'>
                <FontAwesomeIcon icon={faCalendarDays} style={{ marginRight: '5px' }} />
                7 July 2023
              </div>
              <div className="time">
                <FontAwesomeIcon icon={faClock} size="sm" style={{ color: "#3c3939", marginRight: '5px' }} />
                <span>10:00 AM - 10:30 PM</span>
              </div>
            </div>
          </div>
        </div>
        <div className='items-table'>
          <nav>
            <ul className='nav-list'>
              {data.map((cusin) => (
                <li key={cusin.id} className={value === cusin.id ? 'active' : ''}>
                  <button onClick={() => onActive(cusin.id)}
                    style={{
                      backgroundColor: 'transparent',
                    
                      outline: 'none',
                      border: 'none',
                      padding: '0',
                      margin: '0',
                      color: value === cusin.id ? '#d97f5f' : '#2e2d2d',
                      fontWeight: value === cusin.id? '900':'200'                     
                      }}

                  >{cusin.name}</button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;
