import CourseCard from './components/CourseCard';
import courseimage from './assets/images/html-css-course.png';
import Photo from './assets/images/default-author.png';

function App() {
    return (
        <div className="course-grid">
            {/* Using my images */}
            <CourseCard />
            
            {/*show another card component with custom images */}
            <CourseCard 
                courseName="React Fundamentals"
                courseDescription="Learn React hooks, components, and state management"
                courseImage={courseimage}
                author="Andiswa Maluleka"
                authorImage={Photo}
            />
        </div>
    );
}

export default App
