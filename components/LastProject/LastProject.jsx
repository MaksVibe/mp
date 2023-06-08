'use client';
import Image from 'next/image';
import { Description, Heading, ProjLink, Wrapper } from './LastProject.styles';

const LastProject = () => {
    return (
        <Wrapper>
            <ProjLink
                href="https://www.unit9.com/project/coke-zero-sugar-take-a-taste"
                target="_blank"
            >
                <Image
                    src="/cc-proj.png"
                    alt="Coca-cola project"
                    width={400}
                    height={210}
                />
            </ProjLink>
            <div>
                <h3>Last project</h3>
                <Description href="https://www.unit9.com/project/coke-zero-sugar-take-a-taste">
                    Coke Zero Sugar | Mobile Game
                </Description>
            </div>
        </Wrapper>
    );
};

export default LastProject;
