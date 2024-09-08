import { Container } from "react-bootstrap";
import { useEffect, useState } from "react";
import NavProject from "../components/product/NavProject";
import Project from "../components/product/Project";
import { domain } from "../utils/stn";
import axios from "axios";
import LoadingProject from "../components/loading/LoadingProject";

const Projects = () => {
  const [categories, setCategories] = useState([]); // قائمة الفئات
  const [selectedCategory, setSelectedCategory] = useState(""); // الفئة المختارة
  const [projects, setProjects] = useState([]); // جميع المشاريع
  const [filteredProjects, setFilteredProjects] = useState([]); // المشاريع المصفاة بناءً على الفئة
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // جلب الفئات من API وتعيين الفئة الأولى افتراضيًا
  useEffect(() => {
    async function fetchCategories() {
      try {
        const { data } = await axios.get(`${domain}/api/project/categories`);
        const allCategories = ["All", ...data];
        setCategories(allCategories);
        setSelectedCategory("All"); // تعيين "All" كفئة افتراضية
      } catch (err) {
        setError(err.message);
      }
    }
    fetchCategories();
  }, []);

  // جلب جميع المشاريع من API
  useEffect(() => {
    async function fetchProjects() {
      try {
        const { data } = await axios.get(`${domain}/api/project`);
        setProjects(data);
        setFilteredProjects(data); // عرض جميع المشاريع بشكل افتراضي
        setLoading(false);
      } catch (err) {
        setLoading(false);
        setError(err.message);
      }
    }
    fetchProjects();
  }, []);

  // تحديث المشاريع بناءً على الفئة المختارة
  const handleCategorySelection = (category) => {
    setSelectedCategory(category);
    if (category === "All") {
      setFilteredProjects(projects); // عرض جميع المشاريع إذا كانت الفئة "All"
    } else {
      const filtered = projects.filter((project) => project.category === category);
      setFilteredProjects(filtered);
    }
  };

  return (
    <div className="projectSection" id="Project">
      <Container className="project">
        <div className="main_info">
          <h1 className="main_info_h1">- Project</h1>
          <h5 className="main_info_h5">Take a look at some of our past work</h5>
          <p className="main_info_p">
            Take a look at the work our team has been working on recently
          </p>

          <div className="main_btn">
            <a href="#Contact" className="mainBtn1">
              Learn More
            </a>
         
          </div>
        </div>

        <div className="project_Container">
          <div className="projectNavbar">
            <NavProject
              showCategory={handleCategorySelection}
              allCat={categories}
            />
          </div>

          <div className="projectHolder">
            {loading ? (
              <LoadingProject />
            ) : (
              <Project project={filteredProjects} />
            )}

            {filteredProjects.length === 0 && !loading && (
              <p>No projects available for the selected category.</p>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Projects;
