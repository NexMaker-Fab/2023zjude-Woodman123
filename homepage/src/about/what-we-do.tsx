import React from "react";
import styled from "@emotion/styled";

const WhatWeDoContainer = styled.section`
  padding: 3.5vh 0;

  ol {
    list-style: decimal;
    margin-left: 2.5rem;

    li {
      margin-bottom: 0.5rem;
      font-size: 110%;
    }
  }
`;

const WhatWeDoSection = () => (
    <WhatWeDoContainer id="what-we-do">
        <h2 className="font-semibold text-xl md:text-2xl mb-4 lg:text-3xl xl:text-4xl">
            What do we do?
        </h2>
        <p className="mb-3">
            Here are some of the things our members do:
        </p>
        <ol>
            Here are some of the key areas our team members are involved in:

            <li>In-depth exploration and research across various design domains.</li>
            <li>Crafting and refining user experiences to enhance everyday interactions.</li>
            <li>Utilizing cutting-edge technology to bring design concepts to life.</li>
            <li>Organizing workshops, training programs, and events to share insights and skills.</li>
            <li>Contributing to open-source design tools to advance the design community.</li>
            <li>Collaborating on international design projects to drive innovation.</li>
            <li>Conducting user testing and feedback analysis for iterative design improvements.</li>
        </ol>
    </WhatWeDoContainer>
);

export default WhatWeDoSection;
