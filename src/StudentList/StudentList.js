import React, { Component } from 'react';
import './StudentList.css';
import { Element } from 'react-scroll';

class StudentList extends Component {
  onMouseEnterItem = (e) => {
    var container = e.currentTarget.parentNode.parentNode;
    var shapes = container.getElementsByClassName("StudentList_content_wrapper_shapes")[0];
    shapes.classList.add("StudentList_content_wrapper_shapes--hover");
  }

  onMouseLeaveItem = (e) => {
    var container = e.currentTarget.parentNode.parentNode;
    var shapes = container.getElementsByClassName(" StudentList_content_wrapper_shapes")[0];
    shapes.classList.remove("StudentList_content_wrapper_shapes--hover");
  }

  render() {
    return (
      <Element name="Team">
        <div className="StudentList">
          <h3 className="StudentList_top_title">Network with</h3>
          <h2 className="StudentList_bottom_title">Innovators</h2>
          <section className="StudentList_content">
            {this.props.randomizedStudentData.map(function(student, index) {
              if (index % 6 === 0) {
                return (
                  <div key={student.url} className="StudentList_content_first_wrapper the_student">
                    <div className="StudentList_content_first_wrapper_shapes StudentList_content_wrapper_shapes">
                      <img
                        className="StudentList_content_first_triangle1"
                        src="Assets/triangle7.svg"
                        alt=""
                      ></img>
                      <img
                        className="StudentList_content_first_triangle2"
                        src="Assets/triangle1.svg"
                        alt=""
                      ></img>
                      <img
                        className="StudentList_content_first_circle1"
                        src="Assets/circle2.svg"
                        alt=""
                      ></img>
                      <img
                        className="StudentList_content_first_circle2"
                        src="Assets/circle.svg"
                        alt=""
                      ></img>
                    </div>
                    <div className="StudentList_content_first_wrapper_content">
                      <div
                        className="StudentList_content_mugshot_cropper"
                        onClick={() => {
                          this.props.setSelectedStudent(student);
                        }}
                        onMouseEnter={this.onMouseEnterItem}
                        onMouseLeave={this.onMouseLeaveItem}
                      >
                        <img
                          alt={student.name}
                          src={`Assets/mugshots/${student.url}.png`}
                          className="StudentList_content_mugshot"
                        ></img>
                      </div>
                      <h3 className="StudentList_content_name">{student.name}</h3>
                      <h3 className="StudentList_content_title">{student.title}</h3>
                    </div>
                  </div>
                );
              } else if (index % 6 === 1) {
                return (
                  <div key={student.url} className="StudentList_content_second_wrapper the_student">
                    <div className="StudentList_content_second_wrapper_shapes StudentList_content_wrapper_shapes">
                      <img
                        className="StudentList_content_second_circle1"
                        src="Assets/circle2.svg"
                        alt=""
                      ></img>
                      <img
                        className="StudentList_content_second_circle2"
                        src="Assets/circle.svg"
                        alt=""
                      ></img>
                      <img
                        className="StudentList_content_second_triangle1"
                        src="Assets/triangle7.svg"
                        alt=""
                      ></img>
                      <img
                        className="StudentList_content_second_triangle2"
                        src="Assets/triangle1.svg"
                        alt=""
                      ></img>
                    </div>
                    <div className="StudentList_content_second_wrapper_content">
                      <div 
                        className="StudentList_content_mugshot_cropper"
                        onClick={() => {
                          this.props.setSelectedStudent(student);
                        }}
                        onMouseEnter={this.onMouseEnterItem}
                        onMouseLeave={this.onMouseLeaveItem}
                      >
                        <img
                          alt={student.name}
                          src={`Assets/mugshots/${student.url}.png`}
                          className="StudentList_content_mugshot"
                        ></img>
                      </div>
                      <h3 className="StudentList_content_name">{student.name}</h3>
                      <h3 className="StudentList_content_title">{student.title}</h3>
                    </div>
                  </div>
                );
              } else if (index % 6 === 2) {
                return (
                  <div
                    key={student.url}
                    className="StudentList_content_third_wrapper the_student"
                  >
                    <div className="StudentList_content_third_wrapper_shapes StudentList_content_wrapper_shapes">
                      <img
                        className="StudentList_content_third_circle1"
                        src="Assets/circle2.svg"
                        alt=""
                      ></img>
                      <img
                        className="StudentList_content_third_circle2"
                        src="Assets/circle.svg"
                        alt=""
                      ></img>
                      <img
                        className="StudentList_content_third_triangle1"
                        src="Assets/triangle7.svg"
                        alt=""
                      ></img>
                      <img
                        className="StudentList_content_third_triangle2"
                        src="Assets/triangle1.svg"
                        alt=""
                      ></img>
                    </div>
                    <div className="StudentList_content_third_wrapper_content">
                      <div
                        className="StudentList_content_mugshot_cropper"
                        onClick={() => {
                          this.props.setSelectedStudent(student);
                        }}
                        onMouseEnter={this.onMouseEnterItem}
                        onMouseLeave={this.onMouseLeaveItem}
                      >
                        <img
                          alt={student.name}
                          src={`Assets/mugshots/${student.url}.png`}
                          className="StudentList_content_mugshot"
                        ></img>
                      </div>
                      <h3 className="StudentList_content_name">{student.name}</h3>
                      <h3 className="StudentList_content_title">{student.title}</h3>
                    </div>
                  </div>
                );
              } else if (index % 6 === 3) {
                return (
                  <div key={student.url} className="StudentList_content_fourth_wrapper the_student">
                    <div className="StudentList_content_fourth_wrapper_shapes StudentList_content_wrapper_shapes">
                      <img
                        className="StudentList_content_fourth_circle1"
                        src="Assets/circle2.svg"
                        alt=""
                      ></img>
                      <img
                        className="StudentList_content_fourth_circle2"
                        src="Assets/circle.svg"
                        alt=""
                      ></img>
                      <img
                        className="StudentList_content_fourth_triangle1"
                        src="Assets/triangle7.svg"
                        alt=""
                      ></img>
                      <img
                        className="StudentList_content_fourth_triangle2"
                        src="Assets/triangle1.svg"
                        alt=""
                      ></img>
                    </div>
                    <div className="StudentList_content_fourth_wrapper_content">
                      <div
                        className="StudentList_content_mugshot_cropper"
                        onClick={() => {
                          this.props.setSelectedStudent(student);
                        }}
                        onMouseEnter={this.onMouseEnterItem}
                        onMouseLeave={this.onMouseLeaveItem}
                      >
                        <img
                          alt={student.name}
                          src={`Assets/mugshots/${student.url}.png`}
                          className="StudentList_content_mugshot"
                        ></img>
                      </div>
                      <h3 className="StudentList_content_name">{student.name}</h3>
                      <h3 className="StudentList_content_title">{student.title}</h3>
                    </div>
                  </div>
                );
              } else if (index % 6 === 4) {
                return (
                  <div key={student.url} className="StudentList_content_fifth_wrapper the_student">
                    <div className="StudentList_content_fifth_wrapper_shapes StudentList_content_wrapper_shapes">
                      <img
                        className="StudentList_content_fifth_circle1"
                        src="Assets/circle2.svg"
                        alt=""
                      ></img>
                      <img
                        className="StudentList_content_fifth_circle2"
                        src="Assets/circle.svg"
                        alt=""
                      ></img>
                      <img
                        className="StudentList_content_fifth_triangle1"
                        src="Assets/triangle7.svg"
                        alt=""
                      ></img>
                      <img
                        className="StudentList_content_fifth_triangle2"
                        src="Assets/triangle1.svg"
                        alt=""
                      ></img>
                    </div>
                    <div className="StudentList_content_fifth_wrapper_content">
                      <div
                        className="StudentList_content_mugshot_cropper"
                        onClick={() => {
                          this.props.setSelectedStudent(student);
                        }}
                        onMouseEnter={this.onMouseEnterItem}
                        onMouseLeave={this.onMouseLeaveItem}
                      >
                        <img
                          alt={student.name}
                          src={`Assets/mugshots/${student.url}.png`}
                          className="StudentList_content_mugshot"
                        ></img>
                      </div>
                      <h3 className="StudentList_content_name">{student.name}</h3>
                      <h3 className="StudentList_content_title">{student.title}</h3>
                    </div>
                  </div>
                );
              } else if (index % 6 === 5) {
                return (
                  <div key={student.url} className="StudentList_content_sixth_wrapper the_student">
                    <div className="StudentList_content_sixth_wrapper_shapes StudentList_content_wrapper_shapes">
                      <img
                        className="StudentList_content_sixth_circle1"
                        src="Assets/circle2.svg"
                        alt=""
                      ></img>
                      <img
                        className="StudentList_content_sixth_circle2"
                        src="Assets/circle.svg"
                        alt=""
                      ></img>
                      <img
                        className="StudentList_content_sixth_triangle1"
                        src="Assets/triangle7.svg"
                        alt=""
                      ></img>
                      <img
                        className="StudentList_content_sixth_triangle2"
                        src="Assets/triangle1.svg"
                        alt=""
                      ></img>
                    </div>
                    <div className="StudentList_content_sixth_wrapper_content">
                      <div
                        className="StudentList_content_mugshot_cropper"
                        onClick={() => {
                          this.props.setSelectedStudent(student);
                        }}
                        onMouseEnter={this.onMouseEnterItem}
                        onMouseLeave={this.onMouseLeaveItem}
                      >
                        <img
                          alt={student.name}
                          src={`Assets/mugshots/${student.url}.png`}
                          className="StudentList_content_mugshot"
                        ></img>
                      </div>
                      <h3 className="StudentList_content_name">{student.name}</h3>
                      <h3 className="StudentList_content_title">{student.title}</h3>
                    </div>
                  </div>
                );
              } else {
                return null;
              }
            }, this)}
          </section>
        </div>
      </Element>
    );
  }
}
export default StudentList;