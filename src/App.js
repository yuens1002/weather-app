import React, { useState } from 'react';
import Box from './comps/styled/Box/Box';
import Container from './comps/styled/Container/Container';
import Input from './comps/Input/Input';
import { GroupV } from './comps/styled/GroupV/GroupV';
import { getWeather } from './api/weather';
import Results from './comps/Results/Results';
import Button from './comps/styled/Button/Button';

function App() {
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [hasError, setError] = useState(false);
  const [data, setData] = useState({});
  const [showResults, setShowResults] = useState(false);
  const errorMsg = {
    network: 'network error',
    fetch: 'hmm... never heard of that city/state 🤷‍♂️',
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

  const HandleSubmitButton = (e) => [
    e.preventDefault(),
    resetFields(),
    setShowResults(false),
  ];

  return (
    <Container display="flex" flexWrap="wrap" height="100vh">
      <Container
        display="flex"
        textAlign="center"
        alignItems="center"
        width={['100%', '50%']}
        height={['50vh', '100vh']}>
        <Container mx={[12, 40]}>
          <h1>Weather Station No.179</h1>
        </Container>
      </Container>
      <Container
        display="flex"
        justifyContent="center"
        alignItems="center"
        bg="gray100"
        width={['100%', '50%']}
        height={['50vh', '100vh']}>
        <Box as="form" onSubmit={submitHandler}>
          {showResults ? (
            <p>Current Weather Conditions in {data.formatted_address}</p>
          ) : (
            <p>
              Enter a US <u>city</u> and <u>state</u> to get current weather
            </p>
          )}
          {hasError && <Container color="red">{errMsg}</Container>}
          <Container as="section" mt={6}>
            {showResults ? (
              <GroupV style={{ textAlign: 'center' }}>
                <Results results={data.weather} />
                <Container pt={3} textAlign="right">
                  <Button as="button" btnHandler={HandleSubmitButton}>
                    Try Another city
                  </Button>
                </Container>
              </GroupV>
            ) : (
              <GroupV>
                <Input type={`City`} value={city} changeHandler={setCity} />
                <Input type={`State`} value={state} changeHandler={setState} />
                <Container textAlign="right" pt={3}>
                  <Button type="submit">Get Weather</Button>
                </Container>
              </GroupV>
            )}
          </Container>
        </Box>
      </Container>
    </Container>
  );
}

export default App;
