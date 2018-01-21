import React, { Component } from 'react';

import CoursePanel from './CoursePanel';

class CourseList extends Component {
  render() {
    return (
      <div className='course-list information'>
        <h2>Available Courses</h2>
        {this.props.courses.length ? (
          this.props.courses.map(function(course, idx) {
            return (
              <CoursePanel course={course} key={idx} />
            )
          })) : (
          <img
            src="https://s3-us-west-2.amazonaws.com/wwcode-webdev/loader-gif.gif"
            className="loading-spinner"
            alt="loading spinner"
          />
        )}
      </div>
    )
  }
}

CourseList.defaultProps = {
  courses: []
};

export default CourseList;