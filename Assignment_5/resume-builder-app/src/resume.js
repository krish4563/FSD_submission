import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [resumeData, setResumeData] = useState({
    professionalSummary: '',
    education: [{ degree: '', institution: '', year: '', cgpa: '' }], // Added cgpa field
    academicSkills: '',
    nonAcademicSkills: '',
    careerObjective: '',
    experience: [{ position: '', company: '', duration: '', description: '' }],
    internships: [{ title: '', company: '', duration: '', description: '' }],
    skills: '',
    achievements: ''
  });

  const [showResume, setShowResume] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setResumeData({ ...resumeData, [name]: value });
  };

  const handleAddExperience = () => {
    setResumeData({
      ...resumeData,
      experience: [...resumeData.experience, { position: '', company: '', duration: '', description: '' }]
    });
  };

  const handleAddEducation = () => {
    setResumeData({
      ...resumeData,
      education: [...resumeData.education, { degree: '', institution: '', year: '', cgpa: '' }]
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Resume Data:', resumeData);
    setShowResume(true);
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Resume Builder</h2>
      <form onSubmit={handleSubmit} className="p-4 border rounded">
        {/* Professional Summary */}
        <div className="form-group mb-3">
          <label>Professional Summary</label>
          <textarea
            className="form-control"
            name="professionalSummary"
            value={resumeData.professionalSummary}
            onChange={handleChange}
            placeholder="Write a brief professional summary"
            rows="3"
          />
        </div>

        {/* Education Section */}
        <h4>Education</h4>
        {resumeData.education.map((edu, index) => (
          <div key={index} className="mb-3">
            <h5>Education {index + 1}</h5>
            <div className="form-row">
              <div className="form-group col-md-3">
                <label>Degree</label>
                <input
                  type="text"
                  className="form-control"
                  value={edu.degree}
                  onChange={(e) => {
                    const updatedEducation = [...resumeData.education];
                    updatedEducation[index].degree = e.target.value;
                    setResumeData({ ...resumeData, education: updatedEducation });
                  }}
                  placeholder="Degree"
                />
              </div>
              <div className="form-group col-md-3">
                <label>Institution</label>
                <input
                  type="text"
                  className="form-control"
                  value={edu.institution}
                  onChange={(e) => {
                    const updatedEducation = [...resumeData.education];
                    updatedEducation[index].institution = e.target.value;
                    setResumeData({ ...resumeData, education: updatedEducation });
                  }}
                  placeholder="Institution"
                />
              </div>
              <div className="form-group col-md-2">
                <label>Year</label>
                <input
                  type="text"
                  className="form-control"
                  value={edu.year}
                  onChange={(e) => {
                    const updatedEducation = [...resumeData.education];
                    updatedEducation[index].year = e.target.value;
                    setResumeData({ ...resumeData, education: updatedEducation });
                  }}
                  placeholder="Year"
                />
              </div>
              <div className="form-group col-md-2">
                <label>CGPA/Percentage</label>
                <input
                  type="text"
                  className="form-control"
                  value={edu.cgpa}
                  onChange={(e) => {
                    const updatedEducation = [...resumeData.education];
                    updatedEducation[index].cgpa = e.target.value;
                    setResumeData({ ...resumeData, education: updatedEducation });
                  }}
                  placeholder="CGPA/Percentage"
                />
              </div>
            </div>
          </div>
        ))}
        <button type="button" className="btn btn-secondary mb-3" onClick={handleAddEducation}>
          Add Education
        </button>

        {/* Career Objective */}
        <div className="form-group mb-3">
          <label>Career Objective</label>
          <textarea
            className="form-control"
            name="careerObjective"
            value={resumeData.careerObjective}
            onChange={handleChange}
            placeholder="Write your career objective"
            rows="3"
          />
        </div>

        {/* Experience Section */}
        <h4>Experience</h4>
        {resumeData.experience.map((exp, index) => (
          <div key={index} className="mb-3">
            <h5>Experience {index + 1}</h5>
            <div className="form-row">
              <div className="form-group col-md-3">
                <label>Position</label>
                <input
                  type="text"
                  className="form-control"
                  value={exp.position}
                  onChange={(e) => {
                    const updatedExperience = [...resumeData.experience];
                    updatedExperience[index].position = e.target.value;
                    setResumeData({ ...resumeData, experience: updatedExperience });
                  }}
                  placeholder="Position"
                />
              </div>
              <div className="form-group col-md-3">
                <label>Company</label>
                <input
                  type="text"
                  className="form-control"
                  value={exp.company}
                  onChange={(e) => {
                    const updatedExperience = [...resumeData.experience];
                    updatedExperience[index].company = e.target.value;
                    setResumeData({ ...resumeData, experience: updatedExperience });
                  }}
                  placeholder="Company"
                />
              </div>
              <div className="form-group col-md-3">
                <label>Duration</label>
                <input
                  type="text"
                  className="form-control"
                  value={exp.duration}
                  onChange={(e) => {
                    const updatedExperience = [...resumeData.experience];
                    updatedExperience[index].duration = e.target.value;
                    setResumeData({ ...resumeData, experience: updatedExperience });
                  }}
                  placeholder="Duration"
                />
              </div>
              <div className="form-group col-md-3">
                <label>Description</label>
                <textarea
                  className="form-control"
                  value={exp.description}
                  onChange={(e) => {
                    const updatedExperience = [...resumeData.experience];
                    updatedExperience[index].description = e.target.value;
                    setResumeData({ ...resumeData, experience: updatedExperience });
                  }}
                  placeholder="Description"
                  rows="2"
                />
              </div>
            </div>
          </div>
        ))}
        <button type="button" className="btn btn-secondary mb-3" onClick={handleAddExperience}>
          Add Experience
        </button>

        {/* Other Sections: Skills and Achievements */}
        <div className="form-group mb-3">
          <label>Academic Skills</label>
          <textarea
            className="form-control"
            name="academicSkills"
            value={resumeData.academicSkills}
            onChange={handleChange}
            placeholder="List your academic skills"
            rows="3"
          />
        </div>

        <div className="form-group mb-3">
          <label>Non-Academic Skills</label>
          <textarea
            className="form-control"
            name="nonAcademicSkills"
            value={resumeData.nonAcademicSkills}
            onChange={handleChange}
            placeholder="List your non-academic skills"
            rows="3"
          />
        </div>

        <div className="form-group mb-3">
          <label>Skills</label>
          <textarea
            className="form-control"
            name="skills"
            value={resumeData.skills}
            onChange={handleChange}
            placeholder="List your skills"
            rows="3"
          />
        </div>

        <div className="form-group mb-3">
          <label>Achievements</label>
          <textarea
            className="form-control"
            name="achievements"
            value={resumeData.achievements}
            onChange={handleChange}
            placeholder="List your achievements"
            rows="3"
          />
        </div>

        <button type="submit" className="btn btn-primary w-100">Submit Resume</button>
      </form>

      {/* Display Resume Data after Submission */}
      {showResume && (
        <div className="mt-5 p-4 border rounded">
          <h3>Submitted Resume Data</h3>
          <p><strong>Professional Summary:</strong> {resumeData.professionalSummary}</p>
          <p><strong>Career Objective:</strong> {resumeData.careerObjective}</p>

          <h4>Education</h4>
          {resumeData.education.map((edu, index) => (
            <div key={index}>
              <p><strong>Education {index + 1}</strong></p>
              <p>Degree: {edu.degree}</p>
              <p>Institution: {edu.institution}</p>
              <p>Year: {edu.year}</p>
              <p>CGPA/Percentage: {edu.cgpa}</p> {/* Display CGPA/Percentage */}
            </div>
          ))}

          <h4>Experience</h4>
          {resumeData.experience.map((exp, index) => (
            <div key={index}>
              <p><strong>Experience {index + 1}</strong></p>
              <p>Position: {exp.position}</p>
              <p>Company: {exp.company}</p>
              <p>Duration: {exp.duration}</p>
              <p>Description: {exp.description}</p>
            </div>
          ))}

          <h4>Skills</h4>
          <p><strong>Academic Skills:</strong> {resumeData.academicSkills}</p>
          <p><strong>Non-Academic Skills:</strong> {resumeData.nonAcademicSkills}</p>
          <p><strong>Skills:</strong> {resumeData.skills}</p>

          <h4>Achievements</h4>
          <p>{resumeData.achievements}</p>
        </div>
      )}
    </div>
  );
}

export default App;
