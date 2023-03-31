import React, { useState, useEffect } from 'react';
import Chart from '../components/Chart';
import Filter from '../components/Filter';
import '../App.css'

function Dashboard() {
const [data, setData] = useState([]);
const [yearFilter, setYearFilter] = useState('');
const [topicFilter, setTopicFilter] = useState('');
const [regionFilter, setRegionFilter] = useState('');
const [sectorFilter, setSectorFilter] = useState('');
const [pestFilter, setPestFilter] = useState('');
const [sourceFilter, setSourceFilter] = useState('');
const [swotFilter, setSwotFilter] = useState('');
const [countryFilter, setCountryFilter] = useState('');
const [cityFilter, setCityFilter] = useState('');
const [error, setError] = useState('');

useEffect(() => {
fetch('http://localhost:5000/api/data')
.then(response => response.json())
.then(data => setData(data))
.catch(error => setError(error.message));
}, []);
console.log(data)
const years = [...new Set(data.map(item => +item.end_year))];
const topics = [...new Set(data.map(item => item.topic))];
const regions = [...new Set(data.map(item => item.region))];
const sectors = [...new Set(data.map(item => item.sector))];
const pests = [...new Set(data.map(item => item.pest))];
const sources = [...new Set(data.map(item => item.source))];
const swots = [...new Set(data.map(item => item.swot))];
const countries = [...new Set(data.map(item => item.country))];
const cities = [...new Set(data.map(item => item.city))];

const filteredData = data.filter(item => {
return (
(!yearFilter || item.end_year === Number(yearFilter)) &&
(!topicFilter || item.topic === topicFilter) &&
(!regionFilter || item.region === regionFilter) &&
(!sectorFilter || item.sector === sectorFilter) &&
(!pestFilter || item.pest === pestFilter) &&
(!sourceFilter || item.source === sourceFilter) &&
(!swotFilter || item.swot === swotFilter) &&
(!countryFilter || item.country === countryFilter) &&
(!cityFilter || item.city === cityFilter)
);
});

return (
<div className="dashboard">
<h2>Dashboard</h2>
{error && <p className="error">{error}</p>}
<div className="filters">
<Filter className="filters" label="Year" options={years} selectedOption={Number(yearFilter)} onChange={e => setYearFilter(e.target.value)} />
<Filter className="filters" label="Topic" options={topics} selectedOption={topicFilter} onChange={e => setTopicFilter(e.target.value)} />
<Filter className="filters" label="Region" options={regions} selectedOption={regionFilter} onChange={e => setRegionFilter(e.target.value)} />
<Filter className="filters" label="Sector" options={sectors} selectedOption={sectorFilter} onChange={e => setSectorFilter(e.target.value)} />
<Filter className="filters" label="PEST" options={pests} selectedOption={pestFilter} onChange={e => setPestFilter(e.target.value)} />
<Filter className="filters" label="Source" options={sources} selectedOption={sourceFilter} onChange={e => setSourceFilter(e.target.value)} />
<Filter className="filters" label="SWOT" options={swots} selectedOption={swotFilter} onChange={e => setSwotFilter(e.target.value)} />
<Filter className="filters" label="Country" options={countries} selectedOption={countryFilter} onChange={e => setCountryFilter(e.target.value)} />
<Filter className="filters" label="City" options={cities} selectedOption={cityFilter} onChange={e => setCityFilter(e.target.value)} />

</div>
<Chart data={filteredData} />
</div>
);
}
export default Dashboard;



