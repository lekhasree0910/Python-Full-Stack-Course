import { useState } from "react";
import "./App.css";

import MarksCalculator from "./Components/UseState/Task1MarksCalculator";
import EmployeeForm from "./Components/UseState/Task2EmployeeForm";
import MultipleCounters from "./Components/UseState/Task3MultipleCounters";
import FavoriteMovies from "./Components/UseState/Task4FavoriteMovies";
import ExpenseTracker from "./Components/UseState/Task5ExpenseTracker";

import ApiRefreshCounter from "./Components/UseEffect/Task1ApiRefreshCounter";
import OnlineOfflineDetector from "./Components/UseEffect/Task2OnlineOfflineDetector";
import ScreenWidthTracker from "./Components/UseEffect/Task3ScreenWidthTracker";
import RandomQuoteGenerator from "./Components/UseEffect/Task4RandomQuoteGenerator";
import BackgroundColorChanger from "./Components/UseEffect/Task5BackgroundColorChanger";

import EventCalculator from "./Components/Events/Task1Calculator";
import ColorPicker from "./Components/Events/Task2ColorPicker";
import CharacterCounter from "./Components/Events/Task3CharacterCounter";
import AgeChecker from "./Components/Events/Task4AgeChecker";
import ImageSwitcher from "./Components/Events/Task5ImageSwitcher";

import CollegeWebsite from "./Components/Router/Task1CollegeWebsite";
import NestedRoutes from "./Components/Router/Task2NestedRoutes";
import BlogApplication from "./Components/Router/Task3BlogApplication";
import ECommerceRouting from "./Components/Router/Task4ECommerceRouting";
import ProtectedRoutes from "./Components/Router/Task5ProtectedRoutes";

import QuizApplication from "./Components/Navigation/Task1QuizApplication";
import BankingApplication from "./Components/Navigation/Task2BankingApplication";
import HospitalManagement from "./Components/Navigation/Task3HospitalManagement";
import LMS from "./Components/Navigation/Task4LMS";
import FoodOrderingApp from "./Components/Navigation/Task5FoodOrderingApp";

import FetchComments from "./Components/Fetch/Task1FetchComments";
import FetchAlbums from "./Components/Fetch/Task2FetchAlbums";
import FetchPhotos from "./Components/Fetch/Task3FetchPhotos";
import RandomUserApi from "./Components/Fetch/Task4RandomUserApi";
import CountryApi from "./Components/Fetch/Task5CountryApi";

import SaveUsername from "./Components/LocalStorage/Task1SaveUsername";
import ThemePersistence from "./Components/LocalStorage/Task2ThemePersistence";
import TodoLocalStorage from "./Components/LocalStorage/Task3TodoLocalStorage";
import NotesApplication from "./Components/LocalStorage/Task4NotesApplication";
import ShoppingCartLocalStorage from "./Components/LocalStorage/Task5ShoppingCartLocalStorage";

const sections = [
  "1. Advanced useState Tasks",
  "2. Advanced useEffect Tasks",
  "3. Event Handling Tasks",
  "4. React Router Tasks",
  "5. Navigation Tasks",
  "6. Fetch API Tasks",
  "7. Local Storage Tasks",
];

function App() {
  const [activeSection, setActiveSection] = useState(0);

  return (
    <div className="app">
      <nav className="sidebar">
        <h2 className="sidebar-title">W7S4T2</h2>
        {sections.map((s, i) => (
          <button
            key={i}
            className={`sidebar-btn ${activeSection === i ? "active" : ""}`}
            onClick={() => setActiveSection(i)}
          >
            {s}
          </button>
        ))}
      </nav>

      <main className="main-content">
        {activeSection === 0 && (
          <section>
            <h1 className="section-title">1. Advanced useState Tasks</h1>
            <MarksCalculator />
            <EmployeeForm />
            <MultipleCounters />
            <FavoriteMovies />
            <ExpenseTracker />
          </section>
        )}

        {activeSection === 1 && (
          <section>
            <h1 className="section-title">2. Advanced useEffect Tasks</h1>
            <ApiRefreshCounter />
            <OnlineOfflineDetector />
            <ScreenWidthTracker />
            <RandomQuoteGenerator />
            <BackgroundColorChanger />
          </section>
        )}

        {activeSection === 2 && (
          <section>
            <h1 className="section-title">3. Event Handling Tasks</h1>
            <EventCalculator />
            <ColorPicker />
            <CharacterCounter />
            <AgeChecker />
            <ImageSwitcher />
          </section>
        )}

        {activeSection === 3 && (
          <section>
            <h1 className="section-title">4. React Router Tasks</h1>
            <div className="router-container">
              <CollegeWebsite />
            </div>
            <div className="router-container">
              <NestedRoutes />
            </div>
            <div className="router-container">
              <BlogApplication />
            </div>
            <div className="router-container">
              <ECommerceRouting />
            </div>
            <div className="router-container">
              <ProtectedRoutes />
            </div>
          </section>
        )}

        {activeSection === 4 && (
          <section>
            <h1 className="section-title">5. Navigation Tasks</h1>
            <QuizApplication />
            <BankingApplication />
            <HospitalManagement />
            <LMS />
            <FoodOrderingApp />
          </section>
        )}

        {activeSection === 5 && (
          <section>
            <h1 className="section-title">6. Fetch API Tasks</h1>
            <div className="card-container">
              <FetchComments />
              <FetchAlbums />
            </div>
            <div className="card-container">
              <FetchPhotos />
              <RandomUserApi />
            </div>
            <CountryApi />
          </section>
        )}

        {activeSection === 6 && (
          <section>
            <h1 className="section-title">7. Local Storage Tasks</h1>
            <SaveUsername />
            <ThemePersistence />
            <TodoLocalStorage />
            <NotesApplication />
            <ShoppingCartLocalStorage />
          </section>
        )}
      </main>
    </div>
  );
}

export default App;
