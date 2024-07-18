import React, { useState } from 'react';
import Hero from './components/Hero/Hero';
import './opportunities.css';
import Companies from './components/Companies/companies';
import Opp from './components/Opp/Opp';
import Value from './components/Values/values';

export default function Opportunities() {
  const [search, setSearch] = useState('');
  const [data, setData] = useState([]);

  const updateData = (newData) => {
    setData(newData);
  };

  return (
    <div>
      <section className="opportunity_page"></section>
      <div className='White-gradient' />
      <Hero setSearch={setSearch}/>
      <section className='companies'>
        <Companies updateData={updateData} />
      </section>
      <Opp id='opportunity' search={search} data={data}/>
      <Value />
    </div>
  );
}
