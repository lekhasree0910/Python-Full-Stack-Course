import "./App.css";

import Task31LaptopCard from "./Components/Task31LaptopCard";
import Task32MobileCard from "./Components/Task32MobileCard";
import Task33CarCard from "./Components/Task33CarCard";
import Task34FlightCard from "./Components/Task34FlightCard";
import Task35HotelCard from "./Components/Task35HotelCard";
import Task36DoctorCard from "./Components/Task36DoctorCard";
import Task37MedicineCard from "./Components/Task37MedicineCard";
import Task38FoodCard from "./Components/Task38FoodCard";
import Task39MovieRatingCard from "./Components/Task39MovieRatingCard";
import Task40CoursePopularityCard from "./Components/Task40CoursePopularityCard";
import Task41BookStockCard from "./Components/Task41BookStockCard";
import Task42CustomerCard from "./Components/Task42CustomerCard";
import Task43PlayerCard from "./Components/Task43PlayerCard";
import Task44TeacherCard from "./Components/Task44TeacherCard";
import Task45BankAccountCard from "./Components/Task45BankAccountCard";
import Task46BusTicketCard from "./Components/Task46BusTicketCard";
import Task47OrderCard from "./Components/Task47OrderCard";
import Task48EmployeePromotionCard from "./Components/Task48EmployeePromotionCard";
import Task49JobHiringCard from "./Components/Task49JobHiringCard";
import Task50QuizCard from "./Components/Task50QuizCard";
import Task51TaskCard from "./Components/Task51TaskCard";
import Task52NotificationCard from "./Components/Task52NotificationCard";
import Task53WeatherTempCard from "./Components/Task53WeatherTempCard";
import Task54PaymentCard from "./Components/Task54PaymentCard";
import Task55StudentScholarshipCard from "./Components/Task55StudentScholarshipCard";
import Task56ProductDeliveryCard from "./Components/Task56ProductDeliveryCard";
import Task57RestaurantDeliveryCard from "./Components/Task57RestaurantDeliveryCard";
import Task58GymMemberCard from "./Components/Task58GymMemberCard";
import Task59SubscriptionCard from "./Components/Task59SubscriptionCard";
import Task60Dashboard from "./Components/Task60Dashboard";
import Task61ProductList from "./Components/Task61ProductList";
import Task62StatusBadge from "./Components/Task62StatusBadge";
import Task63AlertBox from "./Components/Task63AlertBox";
import Task64ReusableButton from "./Components/Task64ReusableButton";
import Task65EmployeeDirectory from "./Components/Task65EmployeeDirectory";
import Task66MovieGallery from "./Components/Task66MovieGallery";
import Task67ShoppingCartSummary from "./Components/Task67ShoppingCartSummary";
import Task68Leaderboard from "./Components/Task68Leaderboard";
import Task69CourseCatalog from "./Components/Task69CourseCatalog";
import Task70MultiRoleDashboard from "./Components/Task70MultiRoleDashboard";

function App() {
  const products20 = [
    { name: "Laptop", price: 65000, quantity: 5, onSale: false, featured: true },
    { name: "Phone", price: 25000, quantity: 10, onSale: true, featured: false },
    { name: "Tablet", price: 30000, quantity: 0, onSale: false, featured: false },
    { name: "Watch", price: 15000, quantity: 8, onSale: true, featured: true },
    { name: "Headphones", price: 8000, quantity: 15, onSale: false, featured: false },
    { name: "Camera", price: 45000, quantity: 3, onSale: true, featured: true },
    { name: "Speaker", price: 5000, quantity: 20, onSale: false, featured: false },
    { name: "Monitor", price: 20000, quantity: 0, onSale: false, featured: false },
    { name: "Keyboard", price: 3000, quantity: 25, onSale: true, featured: false },
    { name: "Mouse", price: 1500, quantity: 30, onSale: false, featured: false },
    { name: "Printer", price: 12000, quantity: 7, onSale: false, featured: false },
    { name: "Scanner", price: 8000, quantity: 0, onSale: false, featured: false },
    { name: "Webcam", price: 4000, quantity: 12, onSale: true, featured: false },
    { name: "Microphone", price: 6000, quantity: 0, onSale: false, featured: false },
    { name: "Router", price: 3500, quantity: 18, onSale: false, featured: false },
    { name: "Hard Disk", price: 5000, quantity: 10, onSale: true, featured: false },
    { name: "SSD", price: 7000, quantity: 14, onSale: false, featured: true },
    { name: "RAM", price: 4000, quantity: 20, onSale: false, featured: false },
    { name: "Processor", price: 25000, quantity: 6, onSale: false, featured: true },
    { name: "Graphics Card", price: 35000, quantity: 0, onSale: false, featured: false },
  ];

  const employees = [
    { name: "Rahul", designation: "Developer", department: "IT", isActive: true },
    { name: "Priya", designation: "Designer", department: "Creative", isActive: true },
    { name: "Anil", designation: "Manager", department: "HR", isActive: false },
    { name: "Sneha", designation: "Tester", department: "QA", isActive: true },
  ];

  const movies = [
    { title: "KGF 2", rating: 9.2, genre: "Action", isNew: false },
    { title: "RRR", rating: 8.8, genre: "Action", isNew: false },
    { title: "Pathaan", rating: 7.5, genre: "Thriller", isNew: true },
    { title: "Vikram", rating: 8.3, genre: "Action", isNew: false },
    { title: "Kantara", rating: 8.5, genre: "Drama", isNew: true },
    { title: "Local Movie", rating: 6.2, genre: "Comedy", isNew: true },
  ];

  const cartItems = [
    { name: "Laptop", price: 65000, quantity: 1 },
    { name: "Mouse", price: 1500, quantity: 2 },
  ];

  const leaderboardStudents = [
    { name: "Alice", marks: 95 },
    { name: "Bob", marks: 88 },
    { name: "Charlie", marks: 92 },
    { name: "Diana", marks: 78 },
    { name: "Eve", marks: 85 },
  ];

  const courses = [
    { name: "React Basics", instructor: "John", fee: 5000, enrollments: 1500, seatsLeft: 25, isNew: false },
    { name: "Python Advanced", instructor: "Jane", fee: 8000, enrollments: 800, seatsLeft: 5, isNew: false },
    { name: "AI/ML", instructor: "Dr. Smith", fee: 15000, enrollments: 300, seatsLeft: 50, isNew: true },
    { name: "Cloud Computing", instructor: "Mike", fee: 12000, enrollments: 600, seatsLeft: 8, isNew: true },
  ];

  return (
    <div className="container">
      <h1 className="main-title">W7S3T2 - Advanced Props & Conditional Rendering</h1>

      <hr />

      <section>
        <h2 className="section-title">Tasks 31-40</h2>
        <div className="card-container">
          <Task31LaptopCard brand="ASUS" model="ROG Strix" ram={16} processor="i7" price={120000} />
          <Task31LaptopCard brand="HP" model="Pavilion" ram={8} processor="i5" price={55000} />
        </div>
        <div className="card-container">
          <Task32MobileCard brand="Samsung" model="S24 Ultra" ram={12} storage={256} price={130000} supports5G={true} />
          <Task32MobileCard brand="Redmi" model="Note 12" ram={6} storage={128} price={15000} supports5G={false} />
        </div>
        <div className="card-container">
          <Task33CarCard brand="Tesla" model="Model 3" year={2024} fuelType="Electric" price={4500000} />
          <Task33CarCard brand="Maruti" model="Swift" year={2024} fuelType="Petrol" price={900000} />
        </div>
        <div className="card-container">
          <Task34FlightCard airline="IndiGo" flightNumber="6E-201" origin="Delhi" destination="Mumbai" availableSeats={12} />
          <Task34FlightCard airline="Air India" flightNumber="AI-302" origin="Chennai" destination="Bangalore" availableSeats={0} />
        </div>
        <div className="card-container">
          <Task35HotelCard name="Taj Palace" location="Delhi" rating={4.8} pricePerNight={15000} breakfastIncluded={true} />
          <Task35HotelCard name="Budget Stay" location="Mumbai" rating={3.5} pricePerNight={2000} breakfastIncluded={false} />
        </div>
        <div className="card-container">
          <Task36DoctorCard name="Priya Mehta" specialty="Cardiologist" experience={15} consultationFee={1500} availableToday={true} />
          <Task36DoctorCard name="Rahul Verma" specialty="Orthopedic" experience={10} consultationFee={1200} availableToday={false} />
        </div>
        <div className="card-container">
          <Task37MedicineCard name="Paracetamol" manufacturer="Cipla" price={25} requiresPrescription={false} />
          <Task37MedicineCard name="Amoxicillin" manufacturer="Sun Pharma" price={150} requiresPrescription={true} />
        </div>
        <div className="card-container">
          <Task38FoodCard name="Paneer Tikka" restaurant="Punjabi Dhaba" price={250} isVeg={true} />
          <Task38FoodCard name="Chicken Biryani" restaurant="Paradise" price={350} isVeg={false} />
        </div>
        <div className="card-container">
          <Task39MovieRatingCard title="KGF 2" genre="Action" year={2022} rating={9.2} ratingType="General" />
          <Task39MovieRatingCard title="Arjun Reddy" genre="Romance" year={2017} rating={8.1} ratingType="Adult" />
        </div>
        <div className="card-container">
          <Task40CoursePopularityCard courseName="Full Stack" instructor="John" duration="6 Months" fee={25000} enrollments={2500} />
          <Task40CoursePopularityCard courseName="Data Science" instructor="Jane" duration="4 Months" fee={20000} enrollments={800} />
        </div>
      </section>

      <hr />

      <section>
        <h2 className="section-title">Tasks 41-50</h2>
        <div className="card-container">
          <Task41BookStockCard title="React Guide" author="John" price={499} category="Programming" quantity={5} />
          <Task41BookStockCard title="Python Basics" author="Guido" price={399} category="Programming" quantity={0} />
        </div>
        <div className="card-container">
          <Task42CustomerCard name="Rahul" email="rahul@mail.com" totalSpent={15000} points={1200} />
          <Task42CustomerCard name="Priya" email="priya@mail.com" totalSpent={8000} points={600} />
          <Task42CustomerCard name="Anil" email="anil@mail.com" totalSpent={3000} points={200} />
        </div>
        <div className="card-container">
          <Task43PlayerCard name="Virat Kohli" sport="Cricket" team="RCB" runs={12000} isCaptain={true} />
          <Task43PlayerCard name="Rohit Sharma" sport="Cricket" team="MI" runs={10000} isCaptain={false} />
        </div>
        <div className="card-container">
          <Task44TeacherCard name="Dr. Sharma" subject="Physics" experience={20} qualification="PhD" designation="Head of Department" />
          <Task44TeacherCard name="Mrs. Patel" subject="Math" experience={8} qualification="MSc" designation="Professor" />
        </div>
        <div className="card-container">
          <Task45BankAccountCard accountHolder="Rahul" accountNumber="1234567890" bankName="SBI" balance={500} />
          <Task45BankAccountCard accountHolder="Priya" accountNumber="0987654321" bankName="HDFC" balance={25000} />
        </div>
        <div className="card-container">
          <Task46BusTicketCard passengerName="Rahul" busNumber="TS-01-1234" route="Hyderabad - Vijayawada" departureTime="06:00 AM" status="Confirmed" />
          <Task46BusTicketCard passengerName="Priya" busNumber="AP-02-5678" route="Vizag - Tirupati" departureTime="08:30 PM" status="Waiting List" />
          <Task46BusTicketCard passengerName="Anil" busNumber="KA-03-9012" route="Bangalore - Mysore" departureTime="10:00 AM" status="Cancelled" />
        </div>
        <div className="card-container">
          <Task47OrderCard orderId={1001} customerName="Rahul" product="Laptop" amount={65000} status="Delivered" />
          <Task47OrderCard orderId={1002} customerName="Priya" product="Phone" amount={25000} status="Shipped" />
          <Task47OrderCard orderId={1003} customerName="Anil" product="Watch" amount={15000} status="Pending" />
        </div>
        <div className="card-container">
          <Task48EmployeePromotionCard name="Rahul" designation="Lead" department="Engineering" experience={12} salary={1500000} />
          <Task48EmployeePromotionCard name="Priya" designation="Developer" department="IT" experience={5} salary={800000} />
        </div>
        <div className="card-container">
          <Task49JobHiringCard title="React Developer" company="TechCorp" location="Hyderabad" salary={800000} vacancies={5} />
          <Task49JobHiringCard title="Python Developer" company="InnovateTech" location="Bangalore" salary={900000} vacancies={0} />
        </div>
        <div className="card-container">
          <Task50QuizCard quizTitle="React Quiz" subject="Web Dev" totalQuestions={20} score={18} attempted={true} />
          <Task50QuizCard quizTitle="Python Quiz" subject="Programming" totalQuestions={15} score={0} attempted={false} />
        </div>
      </section>

      <hr />

      <section>
        <h2 className="section-title">Tasks 51-60</h2>
        <div className="card-container">
          <Task51TaskCard title="Fix Login Bug" description="Fix authentication issue" assignee="Rahul" deadline="2026-07-20" priority="High" />
          <Task51TaskCard title="Update CSS" description="Revamp styling" assignee="Priya" deadline="2026-07-25" priority="Medium" />
          <Task51TaskCard title="Write Docs" description="Update documentation" assignee="Anil" deadline="2026-08-01" priority="Low" />
        </div>
        <div className="card-container">
          <Task52NotificationCard title="Success" message="File uploaded successfully!" type="Success" />
          <Task52NotificationCard title="Warning" message="Disk space low!" type="Warning" />
          <Task52NotificationCard title="Error" message="Upload failed!" type="Error" />
          <Task52NotificationCard title="Info" message="New update available." type="Info" />
        </div>
        <div className="card-container">
          <Task53WeatherTempCard city="Delhi" temperature={42} condition="Sunny" />
          <Task53WeatherTempCard city="Mumbai" temperature={28} condition="Rainy" />
          <Task53WeatherTempCard city="Shimla" temperature={8} condition="Snowy" />
        </div>
        <div className="card-container">
          <Task54PaymentCard orderId={2001} customerName="Rahul" amount={65000} paymentDate="2026-07-10" status="Paid" />
          <Task54PaymentCard orderId={2002} customerName="Priya" amount={25000} paymentDate="2026-07-12" status="Pending" />
        </div>
        <div className="card-container">
          <Task55StudentScholarshipCard name="Topper Girl" course="CS" marks={98} attendance={95} />
          <Task55StudentScholarshipCard name="Average Student" course="IT" marks={82} attendance={88} />
        </div>
        <div className="card-container">
          <Task56ProductDeliveryCard name="Phone" price={25000} quantity={1} orderValue={25000} />
          <Task56ProductDeliveryCard name="USB Cable" price={200} quantity={2} orderValue={400} />
        </div>
        <div className="card-container">
          <Task57RestaurantDeliveryCard name="Paradise" cuisine="Biryani" rating={4.8} priceRange="$$$" homeDelivery={true} />
          <Task57RestaurantDeliveryCard name="Fine Dine" cuisine="Italian" rating={4.5} priceRange="$$$$" homeDelivery={false} />
        </div>
        <div className="card-container">
          <Task58GymMemberCard name="Rahul" membershipType="Premium" startDate="2025-01-01" expiryDate="2026-12-31" />
          <Task58GymMemberCard name="Priya" membershipType="Basic" startDate="2024-06-01" expiryDate="2025-06-01" />
        </div>
        <div className="card-container">
          <Task59SubscriptionCard userName="Rahul" planName="Pro" startDate="2026-01-01" expiryDate="2026-12-31" />
          <Task59SubscriptionCard userName="Priya" planName="Basic" startDate="2025-07-01" expiryDate="2026-07-20" />
          <Task59SubscriptionCard userName="Anil" planName="Premium" startDate="2024-01-01" expiryDate="2025-01-01" />
        </div>
        <Task60Dashboard />
      </section>

      <hr />

      <section>
        <h2 className="section-title">Bonus Tasks 61-70</h2>
        <Task61ProductList products={products20} />

        <div className="card">
          <h3>Task 62 - Status Badge Component</h3>
          <div className="badge-container">
            <Task62StatusBadge status="Success" />
            <Task62StatusBadge status="Error" />
            <Task62StatusBadge status="Warning" />
            <Task62StatusBadge status="Info" />
            <Task62StatusBadge status="Pending" />
            <Task62StatusBadge status="Active" />
            <Task62StatusBadge status="Inactive" />
          </div>
        </div>

        <div className="card">
          <h3>Task 63 - Alert Box Component</h3>
          <Task63AlertBox type="Success" title="Success!" message="Your operation was successful." />
          <Task63AlertBox type="Error" title="Error!" message="Something went wrong." />
          <Task63AlertBox type="Warning" title="Warning!" message="Please be careful." />
          <Task63AlertBox type="Info" title="Info" message="Here is some information." />
        </div>

        <div className="card">
          <h3>Task 64 - Reusable Button Component</h3>
          <div className="button-container">
            <Task64ReusableButton label="Small" color="#34a853" size="small" onClick={() => alert("Small clicked")} />
            <Task64ReusableButton label="Medium" color="#1a73e8" size="medium" onClick={() => alert("Medium clicked")} />
            <Task64ReusableButton label="Large" color="#e8453c" size="large" onClick={() => alert("Large clicked")} />
          </div>
        </div>

        <Task65EmployeeDirectory employees={employees} />
        <Task66MovieGallery movies={movies} />
        <Task67ShoppingCartSummary items={cartItems} cartTotal={68000} />
        <Task68Leaderboard students={leaderboardStudents} />
        <Task69CourseCatalog courses={courses} />

        <div className="card-container">
          <Task70MultiRoleDashboard user={{ name: "Alice", role: "Student" }} />
          <Task70MultiRoleDashboard user={{ name: "Dr. Sharma", role: "Faculty" }} />
          <Task70MultiRoleDashboard user={{ name: "Admin User", role: "Admin" }} />
          <Task70MultiRoleDashboard user={{ name: "Trainer Mike", role: "Trainer" }} />
        </div>
      </section>
    </div>
  );
}

export default App;
