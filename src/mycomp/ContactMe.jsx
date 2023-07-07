import React from 'react'
import {
    FaTwitter,
    FaLinkedin,
    FaGithub,
    FaTelegram,
    FaEnvelope,

} from "react-icons/fa";
import {GoRead} from "react-icons/go";

export default function ContactMe() {
    return (
        <div className="contactBox container topper">
            <div className="contact container">
                <div className="linkedIn  m-3">
                    <a href="https://www.linkedin.com/in/paras-verma-116bb0212/" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin size={"8rem"} />
                    </a>
                </div>
                <div className="Github  m-3">
                    <a href="https://github.com/Parasv17" target="_blank" rel="noopener noreferrer">
                        <FaGithub size={"8rem"} color='black' />
                    </a>
                </div>
                <div className="telegram m-3 ">
                    <a href="http://" target="_blank" rel="noopener noreferrer">
                        <FaTelegram size={"8rem"} color='#1e95d1' />
                    </a>
                </div>
                <div className="Gmail  m-3">
                    <a href="mailto:paras22350@iiitd.ac.in" target="_blank" rel="noopener noreferrer">
                        <GoRead size={"8rem"}
                        color='#DB4437' />
                    </a>
                </div>
            </div>
        </div>
    )
}
