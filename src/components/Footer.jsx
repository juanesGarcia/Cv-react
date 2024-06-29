import React from "react";
import {} from "@fortawesome/free-solid-svg-icons";
import { AiOutlineMail, AiFillGithub } from "react-icons/ai";
import { BsPhoneFill } from "react-icons/bs";
import '../Style/ContactStyle.css'
export const Footer = () => {
  return (
  
      <div className="container pt-3 pb-4">
        <div className="row ">
          <div className="col-6  ">
          <div className="mb-2 ps-2 d-line d-flex ">
                <h3>Contact</h3>
            </div>
            <div className=" d-flex">
              <AiOutlineMail className="me-2 mt-1"></AiOutlineMail>
                
                <h5 className="inp">juanesgym2018@gmail.com</h5>
           
            </div>
            <div className="mb-2 d-flex align-items-start">
              <AiFillGithub className="me-2 mt-1"></AiFillGithub>
              <a href="https://github.com/juanesGarcia" className="inp2 text-black">
                juanesGarcia
              </a>
            </div>
            <div className=" pb-3 d-flex align-items-start">
              <BsPhoneFill className="me-2 mt-1"></BsPhoneFill>
              <h5  className="inp">+573186699925</h5>
            </div>
          </div>
          <div className="col"></div>
          <div className="col"></div>
        </div>
      </div>

  );
};

export default Footer;
