import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AppDispatch } from '../redux/store';
import { setRandomBoolean, setError } from '../redux/slice/randomSlice';
import { selectRandomBoolean, selectError } from '../redux/selectors/randomSelectors';

const CorsTest: React.FC = () => {
  const randomBoolean = useSelector(selectRandomBoolean);
  const error = useSelector(selectError);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    const backendUrl = 'http://localhost:8080/random-boolean';

    fetch(`${backendUrl}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        if (typeof data.value === 'boolean') {
          dispatch(setRandomBoolean(data.value));
        } else {
          dispatch(setError('Unexpected value received from backend'));
        }
      })
      .catch((error) => dispatch(setError(error.message)));
  }, [dispatch]);

  return (
    <div>
      <h1>CORS Test Component</h1>
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}
      <p>Random Boolean from backend: {randomBoolean === null ? 'Loading...' : randomBoolean ? 'hola' : 'chau'}</p>
    </div>
  );
};

export default CorsTest;
