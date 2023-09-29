import React from "react";
import styled from "@emotion/styled";

const TestimonialsContainer = styled.section`
  padding: 3.5vh 0;

  blockquote {
    font-size: calc(1.15rem + 0.15vw);
    font-style: italic;
    width: 720px;
    max-width: 100%;
    margin-bottom: 0.25rem;
  }

  cite {
    display: block;
    opacity: 0.65;
    font-size: calc(1.1rem + 0.15vw);
    margin-bottom: 5vh;
  }
`;

const Testimonials = () => (
    <TestimonialsContainer id="testimonials">
        <h2 className="font-semibold text-xl md:text-2xl mb-4 lg:text-3xl xl:text-4xl">
            Here&apos;s what recruiters had to say about us
        </h2>
        <div className="my-5">
            <blockquote>
                Fresh graduates from Zhejiang University bring a unique blend of creativity and technical acumen to the
                table.
                They are a valuable asset to any design team.
            </blockquote>
            <cite>
                Senior Design Manager, Leading Tech Company
            </cite>
        </div>
        <div className="my-5">
            <blockquote>
                I have been consistently impressed by their dedication, creative thinking, and their ability to
                seamlessly
                integrate design with technology.
            </blockquote>
            <cite>
                UX Research Lead, Innovative Start-up
            </cite>
        </div>
        <div className="my-5">
            <blockquote>
                At Zhejiang University, they instill a deep understanding of user-centric design principles, which sets
                their
                graduates apart in the design field.
            </blockquote>
            <cite>
                Design Director, International Design Agency
            </cite>
        </div>
    </TestimonialsContainer>
);

export default Testimonials;
