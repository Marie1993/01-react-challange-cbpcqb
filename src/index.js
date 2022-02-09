import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

const contacts = [
  { name: 'Guillaume', email: ' mail@hotmail.fr', phone: '0600000000' },
  { name: 'Jean', email: ' mail@hotmail.fr', phone: '0600000000' },
  { name: 'Camille', email: ' mail@hotmail.fr', phone: '0600000000' },
  { name: 'Léa', email: ' mail@hotmail.fr', phone: '0600000000' },
  { name: 'David', email: ' mail@hotmail.fr', phone: '0600000000' },
];

export const App = (
  <div>
    <h1 className="text-center">My contacts list 📱</h1>
    {contacts.map((contact) => (
      <div className='contact-info'>
        <h3> {contact.name} </h3>
        <h4>📧{contact.email}</h4>
        <h4>📞{contact.phone}</h4>
        <button className="delete-btn"> delete </button>
      </div>
    ))}
  </div>
);

ReactDOM.render(App, document.getElementById('root'));
