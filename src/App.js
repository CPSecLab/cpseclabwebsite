import React from "react";
import {
  HashRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import ResearchAreasPage from "./pages/ResearchAreasPage/ResearchAreasPage";
import TeamPage from "./pages/TeamPage/TeamPage";
import NewsAwardsPage from "./pages/NewsAwardsPage/NewsAwardsPage";
import JoinLabPage from "./pages/JoinTheLabPage/JoinTheLabPage";
import ApplicationFormPage from "./pages/ApplicationFormPage/ApplicationFormPage";
import PublicationsPage from "./pages/Publications/PublicationsPage";
import TeamMemberInfo from "./pages/TeamMemberInfoPage/TeamMemberInfoPage";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
              path="/research-areas/:area"
              element={<ResearchAreasPage />}
            />
            <Route path="/team" element={<TeamPage />} />
            <Route path="/publications" element={<PublicationsPage />} />
            <Route path="/news-awards" element={<NewsAwardsPage />} />
            <Route path="/join-lab" element={<JoinLabPage />} />
            <Route path="/application-form" element={<ApplicationFormPage />} />
            <Route path="/profile/:id" element={<TeamMemberInfo />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
