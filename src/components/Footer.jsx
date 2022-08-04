import React from "react";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-screen bg-[#141414] p-2">
      <div className="w-2/6 text-white mx-auto my-2">
        <p className="text-gray-500 text-center">Stay in Touch</p>
        <div className="flex p-2 justify-center gap-4 my-2">
          <a
            href="https://twitter.com/yunusbahtiar22"
            target="_blank"
            rel="noreferrer"
            className="text-2xl">
            <FaTwitter />
          </a>
          <a
            href="https://www.linkedin.com/in/yunus-bahtiar-1628271a0/"
            className="text-2xl"
            target="_blank"
            rel="noreferrer">
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/yunusbahtiar22"
            target="_blank"
            rel="noreferrer"
            className="text-2xl">
            <FaGithub />
          </a>
        </div>
      </div>
      <p className="text-gray-500 text-center text-sm">
        Made with 🔥 by Yunus Bahtiar
      </p>
      <p className="text-gray-500 text-center text-sm">DTS Final Project</p>
    </footer>
  );
};

export default Footer;
