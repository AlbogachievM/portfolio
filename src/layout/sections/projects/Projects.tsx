import { SectionTitle } from '../../../components/SectionTitle';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { Project } from './project/Project';
import imageProjectOne from '../../../assets/images/projects/project-1.png'
import imageProjectTwo from '../../../assets/images/projects/project-2.png'
import { SectionText } from '../../../components/SectionText';

const projectsData = [
    { title: 'Project Portfolio', imageProject: imageProjectOne,  link: '#' },
    { title: 'Project TuoTown', imageProject: imageProjectTwo,  link: '#' },
]

export const Projects = () => {
    return (
        <section>
            <SectionTitle>My Projects</SectionTitle>
            <SectionText>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem, excepturi pariatur. Eligendi cum eaque, veritatis quod esse tempora corrupti libero veniam voluptatum fugiat, consectetur assumenda at nesciunt porro rem et!</SectionText>
            <FlexWrapper wrap='wrap' justify='space-between' gap='30px'>
                {projectsData.map((p, index) => {
                    return (
                        <Project title={p.title + ' #' + (index + 1)} image={p.imageProject} link={p.link} key={index} />
                    )
                })}
            </FlexWrapper>
        </section>
    );
};

