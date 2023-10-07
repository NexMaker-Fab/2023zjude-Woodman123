import React from "react";
import styled from "@emotion/styled";

const HeaderSection = styled.header`
  min-height: 65vh;
  display: flex;
  align-items: center;
  padding: 1rem;

  h1 {
    line-height: 1.35;
  }

  p {
    width: 600px;
    max-width: 100%;
  }
`;

const LandingHeader = () => (
    <HeaderSection>
        <div style={{maxWidth: '100%'}}>
            <h1 className="font-bold text-3xl md:text-3xl lg:text-4xl xl:text-5xl mb-6">
                {/*India&apos;s No.1 Ranked CTF Team & {' '}*/}
                <div className="inline md:inline-block">Team 3 - Woodman 123 Team</div>
            </h1>
            <p>
                We are a team college students from from Zhejiang University, passionate about using design to make a
                difference in the world. We are dedicated to improving lives through the combination of AI and design.

            </p>
        </div>
    </HeaderSection>
);

export default LandingHeader;
