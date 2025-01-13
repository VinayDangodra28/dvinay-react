import React, { useState } from 'react';
// import './Work.css'; // Make sure to import your CSS file

export const Work = () => {
  const [circlePosition, setCirclePosition] = useState({ x: 0, y: 0 });
  const [activeCard, setActiveCard] = useState(null);

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();

    // Calculate position relative to the card
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setCirclePosition({ x, y });
    setActiveCard(card.id);
  };

  const handleMouseLeave = () => {
    setActiveCard(null); // Remove the active card
  };

  return (
    <div className="work-section-wrapper">
      <div className="work-frame">
        <div className="work-section">
          <div className="work-title section-title">
            <span style={{ fontSize: '3rem' }}>The Divergent Work</span>
          </div>
          <div className="work-wrapper">
            <div className="work-row">
              <div
                className="work-card"
                id="web-work"
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
              >

                <div
                  className="circle"
                  style={{
                    top: `${circlePosition.y}px`,
                    left: `${circlePosition.x}px`,
                  }}
                />
                {/* <div className="inner-box"></div> */}
                <div className="work-text" style={{ zIndex: 2 }}>Web</div>
              </div>
              <div
                className="work-card"
                id="graphic-work"
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
              >
                <div
                  className="circle"
                  style={{
                    top: `${circlePosition.y}px`,
                    left: `${circlePosition.x}px`,
                  }}
                />
                <div className="work-text" style={{ zIndex: 2 }}>Graphic</div>
              </div>
            </div>
            <div className="work-row">
              <div
                className="work-card"
                id="sketch-work"
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
              >
                <div
                  className="circle"
                  style={{
                    top: `${circlePosition.y}px`,
                    left: `${circlePosition.x}px`,
                  }}
                />
                <div className="work-text" style={{ zIndex: 2 }}>
                  Sketches</div>

              </div>
              <div
                className="work-card"
                id="github-work"
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
              >
              <div
                className="circle"
                style={{
                  top: `${circlePosition.y}px`,
                  left: `${circlePosition.x}px`,
                }}
              />
                  <div className="work-text" style={{zIndex: 2}}>
                Github</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
