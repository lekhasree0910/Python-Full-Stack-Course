function CourseCard(props) {
  return (
    <div className="card">

      <h3>{props.course}</h3>

      <p>Duration : {props.duration}</p>

      <p>Trainer : {props.trainer}</p>

      <p>Fee : ₹{props.fee}</p>

    </div>
  );
}

export default CourseCard;