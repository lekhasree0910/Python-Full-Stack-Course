import "./App.css";

import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Profile from "./components/Profile";
import Card from "./components/Card";
import EmployeeCard from "./components/EmployeeCard";
import CourseCard from "./components/CourseCard";
import MovieCard from "./components/MoviCard";
import BookCard from "./components/BookCard";
import RestaurantCard from "./components/RestaurantCard";
import TravelCard from "./components/TravelCard";
import TeamCard from "./components/TeamCard";
import ServiceCard from "./components/ServiceCard";
import FeatureCard from "./components/FeatureCard";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import FooterPortfolio from "./components/FooterPortfolio";

function App() {
  return (
    <div className="container">

      {/* Task 2 */}

      <section>

        <h2>Task 2</h2>

        <h1>Welcome to React</h1>

        <p>
          This is my first React application created using Vite.
        </p>

        <button>Click Me</button>

      </section>

      <hr />

      {/* Task 3 */}

      <section>

        <h2>Task 3</h2>

        <Header />

      </section>

      <hr />

      {/* Task 4 */}

      <section>

        <h2>Task 4</h2>

        <Header />

        <Main />

        <Footer />

      </section>

      <hr />

      {/* Task 5 */}

      <section>

        <h2>Task 5</h2>

        <Profile />

      </section>
      <hr />

{/* Task 6 */}

<section>
  <h2>Task 6 - Reusable Card</h2>

  <div className="card-container">
    <Card
      image="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=300"
      title="React Card"
      description="Reusable Card Component"
      button="Read More"
    />
  </div>
</section>

<hr />

{/* Task 7 */}

<section>
  <h2>Task 7 - Student Cards</h2>

  <div className="card-container">
    <Card
      image="https://randomuser.me/api/portraits/men/1.jpg"
      title="Rahul"
      description="Computer Science Student"
      button="View Profile"
    />

    <Card
      image="https://randomuser.me/api/portraits/women/2.jpg"
      title="Priya"
      description="Electronics Student"
      button="View Profile"
    />

    <Card
      image="https://randomuser.me/api/portraits/men/3.jpg"
      title="Anil"
      description="Mechanical Student"
      button="View Profile"
    />
  </div>
</section>

<hr />

{/* Task 8 */}

<section>
  <h2>Task 8 - Product Cards</h2>

  <div className="card-container">
    <Card
      image="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=300"
      title="Laptop"
      description="Dell Inspiron"
      button="Buy Now"
    />

    <Card
      image="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=300"
      title="Mobile"
      description="Samsung Galaxy"
      button="Buy Now"
    />

    <Card
      image="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300"
      title="Watch"
      description="Smart Watch"
      button="Buy Now"
    />

    <Card
      image="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300"
      title="Headphones"
      description="Sony Wireless"
      button="Buy Now"
    />

    <Card
      image="https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=300"
      title="Keyboard"
      description="Mechanical Keyboard"
      button="Buy Now"
    />
  </div>
</section>

<hr />

{/* Task 9 */}

<section>
  <h2>Task 9 - Employee Cards</h2>

  <div className="card-container">
    <EmployeeCard
      name="Rahul"
      designation="Software Engineer"
      salary="60000"
      department="IT"
    />

    <EmployeeCard
      name="Priya"
      designation="HR Manager"
      salary="50000"
      department="HR"
    />

    <EmployeeCard
      name="Anil"
      designation="Tester"
      salary="45000"
      department="QA"
    />
  </div>
</section>

<hr />

{/* Task 10 */}

<section>
  <h2>Task 10 - Course Card</h2>

  <div className="card-container">
    <CourseCard
      course="Python Full Stack"
      duration="6 Months"
      trainer="John"
      fee="25000"
    />
  </div>
</section>
<hr />

{/* Task 11 */}

<section>
  <h2>Task 11 - Movie Card</h2>

  <div className="card-container">
    <MovieCard
      image="https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=300"
      title="KGF"
      genre="Action"
      rating="9.2"
      year="2022"
    />
  </div>
</section>

<hr />

{/* Task 12 */}

<section>
  <h2>Task 12 - Book Card</h2>

  <div className="card-container">
    <BookCard
      image="https://images.unsplash.com/photo-1512820790803-83ca734da794?w=300"
      title="Python Programming"
      author="Guido"
      price="499"
      category="Programming"
    />
  </div>
</section>

<hr />

{/* Task 13 */}

<section>
  <h2>Task 13 - Restaurant Card</h2>

  <div className="card-container">
    <RestaurantCard
      image="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=300"
      name="Paradise"
      cuisine="Biryani"
      rating="4.8"
      location="Hyderabad"
    />
  </div>
</section>

<hr />

{/* Task 14 */}

<section>
  <h2>Task 14 - Travel Destination Card</h2>

  <div className="card-container">
    <TravelCard
      image="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=300"
      place="Paris"
      country="France"
      description="The City of Love and Lights."
    />
  </div>
</section>

<hr />

{/* Task 15 */}

<section>
  <h2>Task 15 - Team Member Card</h2>

  <div className="card-container">
    <TeamCard
      image="https://randomuser.me/api/portraits/women/44.jpg"
      name="Bhavya Sree"
      role="Frontend Developer"
    />

    <TeamCard
      image="https://randomuser.me/api/portraits/men/45.jpg"
      name="Rahul"
      role="Backend Developer"
    />

    <TeamCard
      image="https://randomuser.me/api/portraits/women/46.jpg"
      name="Priya"
      role="UI/UX Designer"
    />
  </div>
</section>
<hr />

{/* Task 16 */}

<section>
  <h2>Task 16 - Service Card</h2>

  <div className="card-container">
    <ServiceCard
      icon="💻"
      title="Web Development"
      description="Professional website development services."
    />
  </div>
</section>

<hr />

{/* Task 17 */}

<section>
  <h2>Task 17 - Feature Cards</h2>

  <div className="card-container">
    <FeatureCard
      title="Fast"
      description="High Performance"
    />

    <FeatureCard
      title="Secure"
      description="Data Protection"
    />

    <FeatureCard
      title="Responsive"
      description="Works Everywhere"
    />

    <FeatureCard
      title="Cloud"
      description="Cloud Storage"
    />

    <FeatureCard
      title="Analytics"
      description="User Insights"
    />

    <FeatureCard
      title="Support"
      description="24/7 Help"
    />

    <FeatureCard
      title="Reliable"
      description="Stable Services"
    />

    <FeatureCard
      title="Easy"
      description="User Friendly"
    />
  </div>
</section>

<hr />

{/* Task 18 */}

<section>
  <h2>Task 18 - Responsive Grid</h2>

  <div className="grid-container">
    <div className="grid-card">Card 1</div>
    <div className="grid-card">Card 2</div>
    <div className="grid-card">Card 3</div>
    <div className="grid-card">Card 4</div>
    <div className="grid-card">Card 5</div>
    <div className="grid-card">Card 6</div>
    <div className="grid-card">Card 7</div>
    <div className="grid-card">Card 8</div>
    <div className="grid-card">Card 9</div>
    <div className="grid-card">Card 10</div>
    <div className="grid-card">Card 11</div>
    <div className="grid-card">Card 12</div>
  </div>
</section>

<hr />

{/* Task 19 */}

<section>
  <h2>Task 19</h2>

  <p>
    All reusable components are organized inside the{" "}
    <strong>components</strong> folder.
  </p>
</section>

<hr />

{/* Task 20 */}

<section>
  <h2>Task 20 - Portfolio Home Page</h2>

  <Navbar />
  <Hero />
  <About />
  <Skills />
  <FooterPortfolio />
</section>
    </div>
  );
}

export default App;