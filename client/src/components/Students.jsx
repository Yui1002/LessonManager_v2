import Student from "./Student";
import "../styles/Students.css";

const Students = ({ students }) => {
  return (
    <div>
      {students && students.length > 0 ? (
        <div className="students_list">
          {students.map((student) => (
            <Student student={student} key={student.id}/>
          ))}
        </div>
      ) : (
        <div className="no_students_registered">No students registered</div>
      )}
    </div>
  );
};

export default Students;
