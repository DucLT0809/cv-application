/* eslint-disable no-unused-vars */
import React from "react";
import "../styles/main.css";
import { useState } from "react";
import Canvas from "./Canva";
const Main = () => {
  const [fullName, setFullName] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [schoolName, setSchoolName] = useState();
  const [major, setMajor] = useState();
  const [schoolDate, setSchoolDate] = useState();
  const [company, setCompany] = useState();
  const [position, setPosition] = useState();
  const [responsibility, setResponsibility] = useState();
  const [from, setFrom] = useState();
  const [to, setTo] = useState();
  const [data, setData] = useState();
  const [currDate, setCurrentDate] = useState(new Date());
  // function
  const submitData = () => {
    const data = {
      name: fullName,
      email: email,
      phone: phone,
      schoolName: schoolName,
      major: major,
      schoolDate: schoolDate,
      company: company,
      position: position,
      responsibility: responsibility,
      from: from,
      to: to,
    };
    setData(data);
  };
  return (
    <div className="main">
      <div className="sidebar">
        <div className="sidebar__general">
          <h2>General Information</h2>
          <label htmlFor="fullName">Full Name:</label>
          <input
            type="text"
            name="fullName"
            id="fullName"
            value={fullName}
            onChange={(event) => setFullName(event.target.value)}
          />
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <label htmlFor="phone">Phone Number:</label>
          <input
            type="number"
            name="phone"
            id="phone"
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
          />
        </div>
        <div className="sidebar__education">
          <h2>Educational Experience </h2>
          <label htmlFor="schoolName">School Name:</label>
          <input
            type="text"
            name="schoolName"
            id="schoolName"
            value={schoolName}
            onChange={(event) => setSchoolName(event.target.value)}
          />
          <label htmlFor="major">Major:</label>
          <input
            type="text"
            name="major"
            id="major"
            value={major}
            onChange={(event) => setMajor(event.target.value)}
          />
          <label htmlFor="schoolDate">School Date:</label>
          <input
            type="date"
            name="schoolDate"
            id="schoolDate"
            value={schoolDate}
            onKeyDown={(e) => e.preventDefault()}
            onChange={(event) => setSchoolDate(event.target.value)}
          />
        </div>

        <div className="sidebar__practical">
          <h2>Work Experience </h2>
          <label htmlFor="company">Company Name:</label>
          <input
            type="text"
            name="company"
            id="company"
            value={company}
            onChange={(event) => setCompany(event.target.value)}
          />
          <label htmlFor="position">Position:</label>
          <input
            type="text"
            name="position"
            id="position"
            value={position}
            onChange={(event) => setPosition(event.target.value)}
          />
          <label htmlFor="responsibility">Responsibility :</label>
          <input
            type="text"
            name="responsibility"
            id="responsibility"
            value={responsibility}
            onChange={(event) => setResponsibility(event.target.value)}
          />
          <div className="sidebar__practical__dateGroup">
            <div className="sidebar__practical__dateGroup__item">
              <label htmlFor="from">From :</label>
              <input
                type="date"
                name="from"
                id="from"
                onKeyDown={(e) => e.preventDefault()}
                value={from}
                onChange={(event) => setFrom(event.target.value)}
              />
            </div>
            <div className="sidebar__practical__dateGroup__item">
              <label htmlFor="to">To :</label>
              <input
                type="date"
                name="to"
                id="to"
                onKeyDown={(e) => e.preventDefault()}
                value={to}
                onChange={(event) => setTo(event.target.value)}
              />
            </div>
          </div>
          <button onClick={submitData}>Submit</button>
        </div>
      </div>
      <div className="canvas">
        <Canvas data={data} />
      </div>
    </div>
  );
};

export default Main;
