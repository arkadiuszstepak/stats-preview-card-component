import React from "react";

import Image from "../../image-header-desktop.jpg";

import CountUp from "react-countup";

const card = () => {
  return (
    <div className="Card">
      <div className="LeftBlock">
        <div className="Content">
          <div>
            <div className="CardHeader">
              Get <span className="AccentText">insights</span> that help your
              business grow.
            </div>

            <div className="CardDescription">
              Discover the benefits if data analytics and make better decisions
              regarding revenue, customer experience, and overall efficiency.
            </div>
          </div>

          <div className="Stats">
            <div className="StatsElement">
              <div className="StatsValue">
                <CountUp end={10} />
                k+
              </div>
              <div className="StatsTitle">COMPANIES</div>
            </div>
            <div className="StatsElement">
              <div className="StatsValue">
                <CountUp end={314} />
              </div>
              <div className="StatsTitle">TEMPLATES</div>
            </div>
            <div className="StatsElement">
              <div className="StatsValue">
                <CountUp end={12} />
                M+
              </div>
              <div className="StatsTitle">QUERIES</div>
            </div>
          </div>
        </div>
      </div>
      <div className="RightBlock">
        <img className="Image" src={Image} alt="Img" />
      </div>
    </div>
  );
};

export default card;
