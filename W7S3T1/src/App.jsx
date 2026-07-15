import "./App.css";

// Props Tasks (1-10)
import Student from "./components/Student";
import EmployeeCard from "./components/EmployeeCard";
import ProductCard from "./components/ProductCard";
import MovieCard from "./components/MovieCard";
import BookCard from "./components/BookCard";
import CourseCard from "./components/CourseCard";
import ProfileCard from "./components/ProfileCard";
import StudentList from "./components/StudentList";
import CompanyInfo from "./components/CompanyInfo";
import Button from "./components/Button";

// Conditional Rendering Tasks (11-20)
import LoginStatus from "./components/LoginStatus";
import StockStatus from "./components/StockStatus";
import PassFail from "./components/PassFail";
import AgeCategory from "./components/AgeCategory";
import PremiumBadge from "./components/PremiumBadge";
import DiscountLabel from "./components/DiscountLabel";
import UserStatus from "./components/UserStatus";
import UserDashboard from "./components/UserDashboard";
import Greeting from "./components/Greeting";
import ProfileImage from "./components/ProfileImage";

// Combined Tasks (21-30)
import StudentCard from "./components/StudentCard";
import EmployeeCardAdvanced from "./components/EmployeeCardAdvanced";
import MovieCardAdvanced from "./components/MovieCardAdvanced";
import ProductCardAdvanced from "./components/ProductCardAdvanced";
import CourseCardAdvanced from "./components/CourseCardAdvanced";
import RestaurantCard from "./components/RestaurantCardAdvanced";
import WeatherCard from "./components/WeatherCard";
import ProfileCardAdvanced from "./components/ProfileCardAdvanced";
import JobCard from "./components/JobCard";
import StudentDashboard from "./components/StudentDashboard";

function App() {
  const students = [
    { name: "Rahul", age: 20, course: "React", marks: 95 },
    { name: "Priya", age: 21, course: "Python", marks: 88 },
    { name: "Anil", age: 19, course: "Java", marks: 45 },
    { name: "Sneha", age: 22, course: "Angular", marks: 32 },
    { name: "Vikram", age: 20, course: "Node.js", marks: 78 }
  ];

  const company = {
    name: "Tech Solutions Inc.",
    industry: "Information Technology",
    location: "Bangalore, India",
    employees: 500,
    founded: 2010,
    ceo: "Rajesh Kumar"
  };

  const dashboardStudents = [
    { name: "Rahul", course: "React", marks: 95, attendance: 92 },
    { name: "Priya", course: "Python", marks: 88, attendance: 85 },
    { name: "Anil", course: "Java", marks: 45, attendance: 70 },
    { name: "Sneha", course: "Angular", marks: 32, attendance: 60 },
    { name: "Vikram", course: "Node.js", marks: 78, attendance: 78 }
  ];

  return (
    <div className="container">
      <h1>W7S3T1 - React Props & Conditional Rendering Tasks</h1>

      {/* Task 1 */}
      <section>
        <h2>Task 1 - Student Component (Props)</h2>
        <div className="card-container">
          <Student name="Rahul" age={20} course="React Development" />
          <Student name="Priya" age={21} course="Python Full Stack" />
          <Student name="Anil" age={19} course="Java Programming" />
        </div>
      </section>

      <hr />

      {/* Task 2 */}
      <section>
        <h2>Task 2 - Employee Card (Reusable Component)</h2>
        <div className="card-container">
          <EmployeeCard name="Rahul" designation="Software Engineer" salary="60000" department="IT" />
          <EmployeeCard name="Priya" designation="HR Manager" salary="50000" department="HR" />
          <EmployeeCard name="Anil" designation="Tester" salary="45000" department="QA" />
        </div>
      </section>

      <hr />

      {/* Task 3 */}
      <section>
        <h2>Task 3 - Product Card (5 Products)</h2>
        <div className="card-container">
          <ProductCard 
            name="Laptop" 
            price="45000" 
            description="Dell Inspiron 15" 
            image="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=300"
            category="Electronics" 
          />
          <ProductCard 
            name="Mobile" 
            price="25000" 
            description="Samsung Galaxy S21" 
            image="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=300"
            category="Electronics" 
          />
          <ProductCard 
            name="Watch" 
            price="8000" 
            description="Smart Watch Pro" 
            image="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300"
            category="Accessories" 
          />
          <ProductCard 
            name="Headphones" 
            price="3500" 
            description="Sony Wireless" 
            image="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300"
            category="Audio" 
          />
          <ProductCard 
            name="Keyboard" 
            price="2500" 
            description="Mechanical RGB" 
            image="https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=300"
            category="Accessories" 
          />
        </div>
      </section>

      <hr />

      {/* Task 4 */}
      <section>
        <h2>Task 4 - Movie Card</h2>
        <div className="card-container">
          <MovieCard 
            title="KGF Chapter 2" 
            poster="https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=300"
            rating="9.2" 
            genre="Action" 
          />
          <MovieCard 
            title="RRR" 
            poster="https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=300"
            rating="8.8" 
            genre="Drama" 
          />
          <MovieCard 
            title="Pushpa" 
            poster="https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=300"
            rating="7.5" 
            genre="Action" 
          />
        </div>
      </section>

      <hr />

      {/* Task 5 */}
      <section>
        <h2>Task 5 - Book Card</h2>
        <div className="card-container">
          <BookCard title="React Programming" author="John Doe" price="499" category="Programming" />
          <BookCard title="Python Basics" author="Jane Smith" price="399" category="Programming" />
          <BookCard title="JavaScript Guide" author="Mike Wilson" price="599" category="Web Development" />
        </div>
      </section>

      <hr />

      {/* Task 6 */}
      <section>
        <h2>Task 6 - Course Card</h2>
        <div className="card-container">
          <CourseCard courseName="Python Full Stack" trainer="John" duration="6 Months" fee="25000" />
          <CourseCard courseName="React Development" trainer="Sarah" duration="3 Months" fee="15000" />
          <CourseCard courseName="Node.js Backend" trainer="Mike" duration="4 Months" fee="18000" />
        </div>
      </section>

      <hr />

      {/* Task 7 */}
      <section>
        <h2>Task 7 - Profile Card</h2>
        <div className="card-container">
          <ProfileCard 
            profileImage="https://randomuser.me/api/portraits/men/1.jpg"
            name="Rahul Kumar"
            role="Software Engineer"
            location="Bangalore"
          />
          <ProfileCard 
            profileImage="https://randomuser.me/api/portraits/women/2.jpg"
            name="Priya Singh"
            role="UI/UX Designer"
            location="Hyderabad"
          />
          <ProfileCard 
            profileImage="https://randomuser.me/api/portraits/men/3.jpg"
            name="Anil Reddy"
            role="Data Scientist"
            location="Chennai"
          />
        </div>
      </section>

      <hr />

      {/* Task 8 */}
      <section>
        <h2>Task 8 - Student List (Array of Objects)</h2>
        <StudentList students={students} />
      </section>

      <hr />

      {/* Task 9 */}
      <section>
        <h2>Task 9 - Company Info (Object as Prop)</h2>
        <CompanyInfo company={company} />
      </section>

      <hr />

      {/* Task 10 */}
      <section>
        <h2>Task 10 - Button Component</h2>
        <div>
          <Button text="Click Me" color="#007bff" onClick={() => alert("Button Clicked!")} />
          <Button text="Submit" color="#28a745" onClick={() => alert("Form Submitted!")} />
          <Button text="Cancel" color="#dc3545" onClick={() => alert("Cancelled!")} />
          <Button text="Learn More" color="#6c757d" />
        </div>
      </section>

      <hr />

      {/* Task 11 */}
      <section>
        <h2>Task 11 - Login Status (Conditional Rendering)</h2>
        <div className="card-container">
          <LoginStatus isLoggedIn={true} />
          <LoginStatus isLoggedIn={false} />
        </div>
      </section>

      <hr />

      {/* Task 12 */}
      <section>
        <h2>Task 12 - Stock Status</h2>
        <div className="card-container">
          <StockStatus inStock={true} />
          <StockStatus inStock={false} />
        </div>
      </section>

      <hr />

      {/* Task 13 */}
      <section>
        <h2>Task 13 - Pass/Fail Status</h2>
        <div className="card-container">
          <PassFail marks={85} />
          <PassFail marks={30} />
          <PassFail marks={35} />
        </div>
      </section>

      <hr />

      {/* Task 14 */}
      <section>
        <h2>Task 14 - Age Category</h2>
        <div className="card-container">
          <AgeCategory age={25} />
          <AgeCategory age={15} />
          <AgeCategory age={18} />
        </div>
      </section>

      <hr />

      {/* Task 15 */}
      <section>
        <h2>Task 15 - Premium Badge</h2>
        <div className="card-container">
          <PremiumBadge isPremium={true} />
          <PremiumBadge isPremium={false} />
        </div>
      </section>

      <hr />

      {/* Task 16 */}
      <section>
        <h2>Task 16 - Discount Label</h2>
        <div className="card-container">
          <DiscountLabel discountPercentage={20} />
          <DiscountLabel discountPercentage={0} />
          <DiscountLabel discountPercentage={50} />
        </div>
      </section>

      <hr />

      {/* Task 17 */}
      <section>
        <h2>Task 17 - User Status (Online/Offline)</h2>
        <div className="card-container">
          <UserStatus isActive={true} />
          <UserStatus isActive={false} />
        </div>
      </section>

      <hr />

      {/* Task 18 */}
      <section>
        <h2>Task 18 - User Dashboard (Admin/User)</h2>
        <div className="card-container">
          <UserDashboard role="Admin" />
          <UserDashboard role="User" />
        </div>
      </section>

      <hr />

      {/* Task 19 */}
      <section>
        <h2>Task 19 - Time-based Greeting</h2>
        <Greeting />
      </section>

      <hr />

      {/* Task 20 */}
      <section>
        <h2>Task 20 - Profile Image (Custom/Default)</h2>
        <div className="card-container">
          <ProfileImage 
            hasCustomImage={true} 
            imageUrl="https://randomuser.me/api/portraits/men/10.jpg"
            name="Rahul"
          />
          <ProfileImage 
            hasCustomImage={false} 
            imageUrl=""
            name="Priya"
          />
        </div>
      </section>

      <hr />

      {/* Task 21 */}
      <section>
        <h2>Task 21 - Student Card (Topper Badge)</h2>
        <div className="card-container">
          <StudentCard name="Rahul" age={20} course="React" marks={95} />
          <StudentCard name="Priya" age={21} course="Python" marks={88} />
          <StudentCard name="Anil" age={19} course="Java" marks={45} />
        </div>
      </section>

      <hr />

      {/* Task 22 */}
      <section>
        <h2>Task 22 - Employee Card (Senior Badge)</h2>
        <div className="card-container">
          <EmployeeCardAdvanced 
            name="Rahul" 
            designation="Tech Lead" 
            salary="80000" 
            department="IT"
            experience={8}
          />
          <EmployeeCardAdvanced 
            name="Priya" 
            designation="Software Engineer" 
            salary="50000" 
            department="IT"
            experience={3}
          />
        </div>
      </section>

      <hr />

      {/* Task 23 */}
      <section>
        <h2>Task 23 - Movie Card (Blockbuster Badge)</h2>
        <div className="card-container">
          <MovieCardAdvanced 
            title="KGF Chapter 2"
            poster="https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=300"
            rating="9.2"
            genre="Action"
          />
          <MovieCardAdvanced 
            title="Average Movie"
            poster="https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=300"
            rating="6.5"
            genre="Drama"
          />
        </div>
      </section>

      <hr />

      {/* Task 24 */}
      <section>
        <h2>Task 24 - Product Card (Sale Badge)</h2>
        <div className="card-container">
          <ProductCardAdvanced 
            name="Laptop"
            price="45000"
            image="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=300"
            onSale={true}
            discount={15}
          />
          <ProductCardAdvanced 
            name="Mobile"
            price="25000"
            image="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=300"
            onSale={false}
            discount={0}
          />
        </div>
      </section>

      <hr />

      {/* Task 25 */}
      <section>
        <h2>Task 25 - Course Card (Enrollment Status)</h2>
        <div className="card-container">
          <CourseCardAdvanced 
            courseName="React Development"
            trainer="Sarah"
            duration="3 Months"
            fee="15000"
            seatsAvailable={5}
          />
          <CourseCardAdvanced 
            courseName="Python Full Stack"
            trainer="John"
            duration="6 Months"
            fee="25000"
            seatsAvailable={0}
          />
        </div>
      </section>

      <hr />

      {/* Task 26 */}
      <section>
        <h2>Task 26 - Restaurant Card (Open/Closed)</h2>
        <div className="card-container">
          <RestaurantCard 
            name="Paradise"
            cuisine="Biryani"
            rating="4.8"
            location="Hyderabad"
            openTime={9}
            closeTime={22}
          />
          <RestaurantCard 
            name="Night Cafe"
            cuisine="Coffee & Snacks"
            rating="4.5"
            location="Bangalore"
            openTime={20}
            closeTime={4}
          />
        </div>
      </section>

      <hr />

      {/* Task 27 */}
      <section>
        <h2>Task 27 - Weather Card</h2>
        <div className="card-container">
          <WeatherCard condition="Sunny" temperature={32} city="Hyderabad" />
          <WeatherCard condition="Rainy" temperature={24} city="Mumbai" />
          <WeatherCard condition="Cloudy" temperature={28} city="Delhi" />
          <WeatherCard condition="Snowy" temperature={-2} city="Manali" />
        </div>
      </section>

      <hr />

      {/* Task 28 */}
      <section>
        <h2>Task 28 - Profile Card (Verified Badge)</h2>
        <div className="card-container">
          <ProfileCardAdvanced 
            profileImage="https://randomuser.me/api/portraits/men/10.jpg"
            name="Rahul Kumar"
            role="Software Engineer"
            location="Bangalore"
            isVerified={true}
          />
          <ProfileCardAdvanced 
            profileImage="https://randomuser.me/api/portraits/women/11.jpg"
            name="Priya Singh"
            role="Designer"
            location="Hyderabad"
            isVerified={false}
          />
        </div>
      </section>

      <hr />

      {/* Task 29 */}
      <section>
        <h2>Task 29 - Job Card (Remote/On-site)</h2>
        <div className="card-container">
          <JobCard 
            title="React Developer"
            company="Tech Corp"
            location="Bangalore"
            jobType="Remote"
            salary="60000"
          />
          <JobCard 
            title="UI Designer"
            company="Design Studio"
            location="Mumbai"
            jobType="On-site"
            salary="45000"
          />
        </div>
      </section>

      <hr />

      {/* Task 30 */}
      <section>
        <h2>Task 30 - Student Management Dashboard</h2>
        <StudentDashboard students={dashboardStudents} />
      </section>

    </div>
  );
}

export default App;