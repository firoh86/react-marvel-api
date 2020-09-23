import Axios from 'axios';
// Apikey
import { URL, URLCHAR, API_KEY, HASH } from '../constants';

// const [search, setSearch] = useState();

const ApiSearch = () => {
  const fill = async (info) => {
    // require timestamp and hash to use marvel_API
    let fetchchurl = '';
    switch (info) {
      case '':
        fetchchurl = `${URL}${info}&ts=1&apikey=${API_KEY}&hash=${HASH}`;
        break;
      default:
        fetchchurl = `${URLCHAR}${info}&ts=1&apikey=${API_KEY}&hash=${HASH}`;
        break;
    }

    try {
      const { data: heroes } = await Axios(fetchchurl);

      return heroes.data;
    } catch (err) {
      console.error(err);
    }
  };

  return [fill];
};

export default ApiSearch;
