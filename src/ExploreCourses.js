import React from "react";
import MyImage from "./image/img1.jpeg";

export const ExploreCourses = () => {
  return (
    <div className="section ">
      <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <img src="./image/logo.png" alt="logo" />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavbar"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="collapsibleNavbar">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  About
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="top-heading  text-center">
        <h2>Explore Our Courses</h2>
      </div>
      <div className="container">
        <div className="courses col-md-12 ">
          <div className="row ">
            <div className="col-md-3">
              <div className="springboot card shadow p-3 mb-5 bg-white rounded p-2">
                <div className="springboot-img">
                  <img src={MyImage} alt="img1" />
                </div>
                <div className="springboot-heading">
                  <h1>Spring Boot</h1>
                </div>

                <div className="mid">
                  <div className="springboot-price row">
                    <div className="actual-price col-md-8">
                      <p>Duration :</p>
                      <p>Price :</p>
                      <p>Discount price :</p>
                    </div>
                    <div className="discounted-price col-md-4">
                      <p>3 Months</p>
                      <p>
                        <i class="fa fa-inr" aria-hidden="true"></i>
                        <s>9000</s>
                      </p>
                      <p>
                        <i class="fa fa-inr" aria-hidden="true"></i>8000
                      </p>
                    </div>
                  </div>
                  <div className="springboot-rating">
                    <ul>
                      <li>
                        <i class="fa fa-star" aria-hidden="true"></i>
                      </li>
                      <li>
                        <i class="fa fa-star" aria-hidden="true"></i>
                      </li>
                      <li>
                        <i class="fa fa-star" aria-hidden="true"></i>
                      </li>
                      <li>
                        <i class="fa fa-star" aria-hidden="true"></i>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="bttn row">
                  <div className="springboot-preview-btn col-md-6">
                    <button className="btn  action-btn btn-danger">
                      <i
                        class="fa fa-chevron-circle-left"
                        aria-hidden="true"
                      ></i>
                      Preview
                    </button>
                  </div>
                  <div className="springboot-viewdetails-btn col-md-6">
                    <button className="btn  action-btn btn-primary">
                      <i class="fa fa-eye" aria-hidden="true"></i> View Details
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="springboot card shadow p-3 mb-5 bg-white rounded p-2">
                <div className="springboot-img">
                  <img src={MyImage} alt="img1" />
                </div>
                <div className="springboot-heading">
                  <h1>Spring Boot</h1>
                </div>

                <div className="mid">
                  <div className="springboot-price row">
                    <div className="actual-price col-md-8">
                      <p>Duration :</p>
                      <p>Price :</p>
                      <p>Discount price :</p>
                    </div>
                    <div className="discounted-price col-md-4">
                      <p>3 Months</p>
                      <p>
                        <i class="fa fa-inr" aria-hidden="true"></i>
                        <s>9000</s>
                      </p>
                      <p>
                        <i class="fa fa-inr" aria-hidden="true"></i>8000
                      </p>
                    </div>
                  </div>
                  <div className="springboot-rating">
                    <ul>
                      <li>
                        <i class="fa fa-star" aria-hidden="true"></i>
                      </li>
                      <li>
                        <i class="fa fa-star" aria-hidden="true"></i>
                      </li>
                      <li>
                        <i class="fa fa-star" aria-hidden="true"></i>
                      </li>
                      <li>
                        <i class="fa fa-star" aria-hidden="true"></i>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="bttn row">
                  <div className="springboot-preview-btn col-md-6">
                    <button className="btn  action-btn btn-danger">
                      <i
                        class="fa fa-chevron-circle-left"
                        aria-hidden="true"
                      ></i>
                      Preview
                    </button>
                  </div>
                  <div className="springboot-viewdetails-btn col-md-6">
                    <button className="btn  action-btn btn-primary">
                      <i class="fa fa-eye" aria-hidden="true"></i> View Details
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="springboot card shadow p-3 mb-5 bg-white rounded p-2">
                <div className="springboot-img">
                  <img src={MyImage} alt="img1" />
                </div>
                <div className="springboot-heading">
                  <h1>Spring Boot</h1>
                </div>

                <div className="mid">
                  <div className="springboot-price row">
                    <div className="actual-price col-md-8">
                      <p>Duration :</p>
                      <p>Price :</p>
                      <p>Discount price :</p>
                    </div>
                    <div className="discounted-price col-md-4">
                      <p>3 Months</p>
                      <p>
                        <i class="fa fa-inr" aria-hidden="true"></i>
                        <s>9000</s>
                      </p>
                      <p>
                        <i class="fa fa-inr" aria-hidden="true"></i>8000
                      </p>
                    </div>
                  </div>
                  <div className="springboot-rating">
                    <ul>
                      <li>
                        <i class="fa fa-star" aria-hidden="true"></i>
                      </li>
                      <li>
                        <i class="fa fa-star" aria-hidden="true"></i>
                      </li>
                      <li>
                        <i class="fa fa-star" aria-hidden="true"></i>
                      </li>
                      <li>
                        <i class="fa fa-star" aria-hidden="true"></i>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="bttn row">
                  <div className="springboot-preview-btn col-md-6">
                    <button className="btn  action-btn btn-danger">
                      <i
                        class="fa fa-chevron-circle-left"
                        aria-hidden="true"
                      ></i>
                      Preview
                    </button>
                  </div>
                  <div className="springboot-viewdetails-btn col-md-6">
                    <button className="btn  action-btn btn-primary">
                      <i class="fa fa-eye" aria-hidden="true"></i> View Details
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="springboot card shadow p-3 mb-5 bg-white rounded p-2">
                <div className="springboot-img">
                  <img src={MyImage} alt="img1" />
                </div>
                <div className="springboot-heading">
                  <h1>Spring Boot</h1>
                </div>

                <div className="mid">
                  <div className="springboot-price row">
                    <div className="actual-price col-md-8">
                      <p>Duration :</p>
                      <p>Price :</p>
                      <p>Discount price :</p>
                    </div>
                    <div className="discounted-price col-md-4">
                      <p>3 Months</p>
                      <p>
                        <i class="fa fa-inr" aria-hidden="true"></i>
                        <s>9000</s>
                      </p>
                      <p>
                        <i class="fa fa-inr" aria-hidden="true"></i>8000
                      </p>
                    </div>
                  </div>
                  <div className="springboot-rating">
                    <ul>
                      <li>
                        <i class="fa fa-star" aria-hidden="true"></i>
                      </li>
                      <li>
                        <i class="fa fa-star" aria-hidden="true"></i>
                      </li>
                      <li>
                        <i class="fa fa-star" aria-hidden="true"></i>
                      </li>
                      <li>
                        <i class="fa fa-star" aria-hidden="true"></i>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="bttn row">
                  <div className="springboot-preview-btn col-md-6">
                    <button className="btn  action-btn btn-danger">
                      <i
                        class="fa fa-chevron-circle-left"
                        aria-hidden="true"
                      ></i>
                      Preview
                    </button>
                  </div>
                  <div className="springboot-viewdetails-btn col-md-6">
                    <button className="btn  action-btn btn-primary">
                      <i class="fa fa-eye" aria-hidden="true"></i> View Details
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExploreCourses;
