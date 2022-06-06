import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CharactersList from './charactersList';
import { CharacterProfile } from './characterProfile';
import  Welcome  from './welcome';
import PageNotFound from './pageNotFound';
const Body = () => {
    return (
      <div className="body">
          <Router>
                <Routes>
                <Route path="/" element={<Welcome />} />
                    <Route path="/characterslist" element={<CharactersList />} />
                    <Route path={'/profile/:id'} element={<CharacterProfile />} />
                    <Route path="*" element={<PageNotFound />} />
                </Routes>
            </Router>
      </div>
    );
  }
  
  export default Body;