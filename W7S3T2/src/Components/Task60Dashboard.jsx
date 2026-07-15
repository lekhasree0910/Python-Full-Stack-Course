import Task55StudentScholarshipCard from "./Task55StudentScholarshipCard";
import Task48EmployeePromotionCard from "./Task48EmployeePromotionCard";
import Task56ProductDeliveryCard from "./Task56ProductDeliveryCard";
import Task40CoursePopularityCard from "./Task40CoursePopularityCard";
import Task39MovieRatingCard from "./Task39MovieRatingCard";

function Dashboard() {
  return (
    <div className="dashboard">
      <h2 className="section-title">Task 60 - Dashboard</h2>
      <div className="dashboard-grid">
        <Task55StudentScholarshipCard
          name="Alice Johnson"
          course="Computer Science"
          marks={97}
          attendance={95}
        />

        <Task48EmployeePromotionCard
          name="Rahul Sharma"
          designation="Senior Developer"
          department="Engineering"
          experience={12}
          salary={1200000}
        />

        <Task56ProductDeliveryCard
          name="Wireless Headphones"
          price={1500}
          quantity={1}
          orderValue={1500}
        />

        <Task40CoursePopularityCard
          courseName="Full Stack Development"
          instructor="John Doe"
          duration="6 Months"
          fee={25000}
          enrollments={2500}
        />

        <Task39MovieRatingCard
          title="Action Hero"
          genre="Action"
          year={2024}
          rating={8.8}
          ratingType="General"
        />
      </div>
    </div>
  );
}

export default Dashboard;
