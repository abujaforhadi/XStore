import React from "react";
import { Link } from "react-router-dom";
import daisyui from "daisyui";

const Footer = () => {
  return (
    <>
      <div>
        <footer className="footer bg-base-200 text-base-content p-10">
          <nav className="w-full text-center mb-4">
            <img
              className="mx-auto"
              src="/assets/logo.svg"
              alt="Company Logo"
            />
          </nav>
          <nav>
            <h6 className="footer-title">Company</h6>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Jobs</a>
          </nav>
          <nav>
            <h6 className="footer-title">Legal</h6>
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
          </nav>
          <form>
            <h6 className="footer-title">Newsletter</h6>
            <fieldset className="form-control w-80">
              <label className="label">
                <span className="label-text">Enter your email address</span>
              </label>
              <div className="join">
                <input
                  type="text"
                  placeholder="Enter your email address"
                  className="input input-bordered join-item"
                />
                <button className="btn btn-primary join-item">Subscribe</button>
              </div>
            </fieldset>
          </form>
        </footer>
      </div>
    </>
  );
};

export default Footer;
