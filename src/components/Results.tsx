import React from 'react';

export function Results() {
  //Show Data fro Student, MaleStudent, FemaleStudent
  const student = JSON.parse(localStorage.getItem('student') || '{}');
  localStorage.removeItem('student');
  const maleStudent = JSON.parse(localStorage.getItem('maleStudent') || '{}');
  localStorage.removeItem('maleStudent');
  const femaleStudent = JSON.parse(localStorage.getItem('femaleStudent') || '{}');
  localStorage.removeItem('femaleStudent');
  return (
    <p>
      JSON Data: {JSON.stringify(student)}
      <br />
      JSON Male Student : {JSON.stringify(maleStudent)}
      <br />
      JSON Female Student : {JSON.stringify(femaleStudent)}

    </p>
  );

}