import React from "react";
import styled from "@emotion/styled";

const HowItFunctionsContainer = styled.section`
  padding: 3.5vh 0;
`;

const HowItFunctions = () => (
    <HowItFunctionsContainer>
        <h2 className="font-semibold text-xl md:text-2xl mb-4 lg:text-3xl xl:text-4xl">
            How we function?
        </h2>
        <p>
            Woodman 123 Team operates as a close-knit family, fostering a mentorship model where seasoned design
            students impart their knowledge and skills to their junior counterparts. This dynamic learning environment
            is enriched through a variety of activities, workshops, and collaborative projects that the team actively
            organizes and participates in.
        </p>
    </HowItFunctionsContainer>
);

export default HowItFunctions;
