import { Route, Routes} from "react-router-dom";
import Favorites from "./pages/Favorites";
import AllMeetups from "./pages/AllMeetup";
import NewMeetups from "./pages/NewMeetups";
import Layout from "./components/layouts/Layout";

function App() {
  return (

      <Layout>
      <Routes>
      <Route path="/" element={<AllMeetups />} />
      <Route path="/newmeetups" element={<NewMeetups />} />
      <Route path="/favorites" element={<Favorites />} />
      </Routes>
      </Layout>

  );
}

export default App;
