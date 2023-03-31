import React, { useState, useEffect } from 'react';
import Chart from '../components/Chart';
import Filter from '../components/Filter';

function Dashboard() {
  const [data, setData] = useState([]);
  const [yearFilter, setYearFilter] = useState('');
  const [topicFilter, setTopicFilter] = useState('');
  const [regionFilter, setRegionFilter] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    fetch('http://localhost:5000/api/data')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => setError(error.message));
  }, []);
  console.log(data)
  console.log(yearFilter,"yearFilter")
  console.log(topicFilter,"topicFiter")
  console.log(regionFilter,"regionFilter")
  
  const years = [...new Set(data.map(item => +item.end_year))];
  const topics = [...new Set(data.map(item => item.topic))];
  const regions = [...new Set(data.map(item => item.region))];


console.log(years,"years")
  const filteredData = data.filter(item => {
    return (
      (!yearFilter || item.end_year === Number(yearFilter)) &&
      (!topicFilter || item.topic === topicFilter) &&
      (!regionFilter || item.region === regionFilter)
    );
  });

  return (
    <div className="dashboard">
      <h2>Dashboard</h2>
      {error && <p className="error">{error}</p>}
      <div className="filters">
        <Filter label="Year" options={years} selectedOption={Number(yearFilter)} onChange={e => setYearFilter(e.target.value)} />
        <Filter label="Topic" options={topics} selectedOption={topicFilter} onChange={e => setTopicFilter(e.target.value)} />
        <Filter label="Region" options={regions} selectedOption={regionFilter} onChange={e => setRegionFilter(e.target.value)} />
      </div>
      <Chart data={filteredData} />
    </div>
  );
}

export default Dashboard;


