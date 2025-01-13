import React, { useState } from 'react';

export const Education = () => {
  const [qualificationDescription, setQualificationDescription] = useState(
    'lorem ipsum dolor sit amet consectetur adipiscing elit'
  );
  const [certificateDescription, setCertificateDescription] = useState(
    'lorem ipsum dolor sit amet consectetur adipiscing elit'
  );

  return (
    <div className="education-section-wrapper">
      <div className="education-frame">
        <div className="education-section">
          <div className="education-title section-title">The Education Timelines</div>
          <div className="education-wrapper">
            {/* Qualifications Section */}
            <div className="qualifications">
              <div className="educational-title">Qualifications</div>
              <div className="qualifications-description">
                {qualificationDescription}
              </div>
              <div className="qualifications-list">
                <div
                  className="qualification"
                  onMouseEnter={() =>
                    setQualificationDescription(
                      'MCA - Master in Computer Application from Chandigarh University (2024-2026)'
                    )
                  }
                >
                  <div className="qualification-title">
                    MCA - Master in Computer Application
                  </div>
                  <div className="qualification-school">
                    Chandigarh University
                  </div>
                  <div className="qualification-date">2024-2026</div>
                </div>

                <div
                  className="qualification"
                  onMouseEnter={() =>
                    setQualificationDescription(
                      'BCA - Bachelor in Computer Application from Kirandevi Saraf Institute of Complete Learning (2021-2024)'
                    )
                  }
                >
                  <div className="qualification-title">
                    BCA - Bachelor in Computer Application
                  </div>
                  <div className="qualification-school">
                    Kirandevi Saraf Institute of Complete Learning
                    ~Tilak Maharashtra Vidyapeeth
                  </div>
                  <div className="qualification-date">2021-2024</div>
                </div>

                <div
                  className="qualification"
                  onMouseEnter={() =>
                    setQualificationDescription(
                      'HSC from BSGD Junior College ~ Maharashtra Board (2020-2021)'
                    )
                  }
                >
                  <div className="qualification-title">HSC</div>
                  <div className="qualification-school">
                    BSGD Junior College ~ Maharashtra Board
                  </div>
                  <div className="qualification-date">2020-2021</div>
                </div>

                <div
                  className="qualification"
                  onMouseEnter={() =>
                    setQualificationDescription(
                      'SSC from Infant Jesus School ~ Maharashtra Board (2018-2019)'
                    )
                  }
                >
                  <div className="qualification-title">SSC</div>
                  <div className="qualification-school">
                    Infant Jesus School ~ Maharashtra Board
                  </div>
                  <div className="qualification-date">2018-2019</div>
                </div>
              </div>
            </div>

            {/* Certifications Section */}
            <div className="certificates">
              <div className="educational-title">Certifications</div>
              <div className="certificates-description">
                {certificateDescription}
              </div>
              <div className="certificates-list">
                <div
                  className="certificate"
                  onMouseEnter={() =>
                    setCertificateDescription(
                      'Full Stack Web Development from Udemy (2022-2023)'
                    )
                  }
                >
                  <div className="certificate-title">
                    Full Stack Web Development
                  </div>
                  <div className="certificate-school">Udemy</div>
                  <div className="certificate-date">2022-2023</div>
                </div>

                <div
                  className="certificate"
                  onMouseEnter={() =>
                    setCertificateDescription(
                      'React.js Advanced Concepts from Udemy (2021-2022)'
                    )
                  }
                >
                  <div className="certificate-title">
                    React.js Advanced Concepts
                  </div>
                  <div className="certificate-school">Udemy</div>
                  <div className="certificate-date">2021-2022</div>
                </div>

                <div
                  className="certificate"
                  onMouseEnter={() =>
                    setCertificateDescription(
                      'Node.js Essentials from Coursera (2020-2021)'
                    )
                  }
                >
                  <div className="certificate-title">Node.js Essentials</div>
                  <div className="certificate-school">Coursera</div>
                  <div className="certificate-date">2020-2021</div>
                </div>

                <div
                  className="certificate"
                  onMouseEnter={() =>
                    setCertificateDescription(
                      'UI/UX Design Basics from LinkedIn Learning (2019-2020)'
                    )
                  }
                >
                  <div className="certificate-title">UI/UX Design Basics</div>
                  <div className="certificate-school">LinkedIn Learning</div>
                  <div className="certificate-date">2019-2020</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
