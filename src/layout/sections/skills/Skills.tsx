import React from 'react';
import { SectionTitle } from '../../../components/SectionTitle';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { theme } from '../../../style/Theme';
import { SectionText } from '../../../components/SectionText';
import { Skill } from './skill/Skill';
 
const skillsData = [
    { icon: 'code', title: 'html5' },
    { icon: 'css', title: 'css3' },
    { icon: 'styled', title: 'styled components' },
    { icon: 'typescript', title: 'typescript' },
    { icon: 'react', title: 'html5' },
    { icon: 'figma', title: 'figma' },
]

export const Skills: React.FC = () => {
    return (
        <section>
            <SectionTitle>My Skills</SectionTitle>
            <SectionText>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem, excepturi pariatur. Eligendi cum eaque, veritatis quod esse tempora corrupti libero veniam voluptatum fugiat, consectetur assumenda at nesciunt porro rem et!</SectionText>
            <FlexWrapper justify='space-evenly' wrap='wrap' gap='20px' >
                {skillsData.map((s, index) => {
                    return (
                        <Skill icon={s.icon} title={s.title} color={theme.colors.accent} />
                    )
                })}
            </FlexWrapper>
        </section>
    );
};

