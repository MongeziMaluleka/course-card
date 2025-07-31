import React from "react";
import './CourseCard.css';
import defaultCourseImage from '../assets/images/html-css-course.png';
import defaultAuthorImage from '../assets/images/default-author.png';

/**
 * CourseCard Component
 * 
 * @param {Object} props 
 * @param {string} [props.courseName="HTML & CSS Foundations"] 
 * @param {string} [props.courseDescription="Learn the basics..."] 
 * @param {string} [props.courseImage] 
 * @param {string} [props.author="Mongezi Maluleka"] 
 * @param {string} [props.authorImage]
 */
const CourseCard = ({ 
    courseName = "HTML & CSS Foundations",
    courseDescription = "Learn the basics of web development with HTML and CSS.",
    courseImage = null,
    author = "Mongezi Maluleka",
    authorImage = null,
}) => {
    return (
        <div className ="course-card-container">


            <article className="course-card" aria-label={`Course: ${courseName}`}>
                {/* Course Image - uses local default if no image provided */}
                <div className="course-image-container">
                    <img 
                        src={courseImage || defaultCourseImage} 
                        alt={`Cover image for ${courseName}`} 
                        className="course-image"
                        loading="lazy"
                    />
                </div>
                
                <div className="course-details">
                    <h2 className="course-title">{courseName}</h2>
                    <p className="course-description">{courseDescription}</p>
                    
                    <div className="author-info">
                        <img 
                            src={authorImage || defaultAuthorImage} 
                            alt={`Author ${author}`} 
                            className="author-image" 
                            width="40"
                            height="40"
                        />
                        <span className="author-name">{author}</span>
                    </div>
                </div>
            </article>
        </div>    
    );
}

export default CourseCard;