/* eslint-disable no-unused-vars */
import React from "react";
import { useState, useEffect } from "react";
import "../styles/canvas.css";
import avatar from "../assets/pexels-stefanstefancik-91227.jpg";
const Canvas = ({ data }) => {
  const {
    name,
    email,
    phone,
    schoolName,
    major,
    schoolDate,
    company,
    position,
    responsibility,
    from,
    to,
  } = data || {};
  return (
    <>
      <div className="canvas__container">
        <div className="canvas__left">
          <div className="canvas__left__avatar">
            <img src={avatar} alt="avatar" />
          </div>
          <div className="canvas__left__info">
            <h2>{name ? name : "John Doe"}</h2>
            <h4>Mobile: {phone ? phone : "John Doe"}</h4>
            <h4>Email: {email ? email : "JohnDoe@gmail.com"}</h4>
          </div>
        </div>
        <div className="canvas__right">
          <div className="canvas__right__education">
            <h4>
              School: {schoolName ? schoolName : "Havard"} - Year:{" "}
              {schoolDate ? schoolDate : "currently"}
            </h4>
            <h4>Major: {major ? major : "Life"}</h4>
          </div>
          <hr className="solid" />
          <div className="canvas__right__work">
            <h4>Company: {company ? company : "Apple"}</h4>
            <h4>
              Position: {position ? position : "CEO"} - Responsibility:{" "}
              {responsibility ? responsibility : "Make major decision"}
            </h4>
            <h4>
              From - To: {from ? from : "today"} - {to ? to : "tomorrow"}
            </h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default Canvas;
