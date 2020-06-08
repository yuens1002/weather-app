import React, { useState } from 'react';
import Box from './comps/styled/Box/Box';
import Input from './comps/Input/Input';
import { GroupV } from './comps/styled/GroupV/GroupV';
import { getWeather } from './api/weather';
import Results from './comps/Results/Results';

function App() {
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [hasError, setError] = useState(false);
  const [data, setData] = useState({});
  const [showResults, setShowResults] = useState(false);
  const errorMsg = {
    network: 'network error',
    fetch: 'no data found',
  };
  const [errMsg, setErrMsg] = useState(errorMsg.network);
  const submitHandler = (e) => {
    e.preventDefault();
    getWeather({ city, state })
      .then((res) => [setError(false), setData(res), setShowResults(true)])
      .catch((err) => {
        if (err !== 'network error') {
          setErrMsg(errorMsg.fetch);
        }
        setShowResults(false);
        setError(true);
      });
  };
  const resetFields = () => {
    setCity('');
    setState('');
  };

  return (
    <Box as="form" onSubmit={submitHandler}>
      <div style={{ textAlign: 'center', width: '100%' }}>
        <h1>Weather Station No.179</h1>
        {showResults ? (
          <p>Current Weather Conditions in {data.formatted_address}</p>
        ) : (
          <p>
            Enter the <u>city</u> and <u>state</u> to get current weather
          </p>
        )}
        {hasError && <div style={{ color: 'red' }}>{errMsg}</div>}
      </div>
      {showResults ? (
        <GroupV style={{ textAlign: 'center' }}>
          <Results results={data.weather} />
          <div style={{ paddingTop: '0.4rem' }}>
            <button
              onClick={(e) => [
                e.preventDefault(),
                resetFields(),
                setShowResults(false),
              ]}>
              Try Another city
            </button>
          </div>
        </GroupV>
      ) : (
        <GroupV>
          <Input type={`City`} value={city} changeHandler={setCity} />
          <Input type={`State`} value={state} changeHandler={setState} />
          <div style={{ textAlign: 'right', paddingTop: '.2rem' }}>
            <button type="submit">Get Weather</button>
          </div>
        </GroupV>
      )}
    </Box>
  );
}

export default App;
