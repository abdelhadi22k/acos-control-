import React from "react";
import { Col, Row } from "react-bootstrap";

const NavProject = ({ showCategory, allCat }) => {
  // عند الضغط على الزر، يتم تعيين الفئة المختارة
  const navTitle = (category) => {
    showCategory(category);
  };

  return (
    <div className="NavProject">
      <Row>
        <Col sm="12" className="d-flex justify-content-center">
          {allCat.length !== 0 ? (
            allCat.map((category) => (
              <div key={category} className="showCategory">
                <button
                  onClick={() => navTitle(category)}
                  className="btnX"
                >
                  {category}
                </button>
              </div>
            ))
          ) : (
            <h2>Loading categories...</h2>
          )}
        </Col>
      </Row>
    </div>
  );
};

export default NavProject;
