
import './App.css';
import "./assets/css/estilo.css"
import BookShelves from './components/views/Bookshelves';
import RouterController from './components/controllers/RouterController';
import {Link} from 'react-router-dom';
import HomeIcon from "@material-ui/icons/Home";

function App() {
  return (
    <div className="m-1 bg-gray-200 p-10">
        <RouterController />
    </div>
  );
}

export default App;
