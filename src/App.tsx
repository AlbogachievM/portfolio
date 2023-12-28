import './App.css';
import styled from 'styled-components';
import { Main } from './layout/sections/main/Main';
import { FlexWrapper } from './components/FlexWrapper';
import { Slidebar } from './layout/slidebar/Slidebar';
import { Social } from './components/social/Social';
import { ContentWrapper } from './components/ContentWrapper';
import { Skills } from './layout/sections/skills/Skills';


const slidebarItem = ['Main', 'Project', 'My Skills', 'Contact']

function App() {
    return (
        <div className="App">
            <FlexWrapper>
                <Slidebar />
                <ContentWrapper>
                    {/* <Main /> */}
                    <Skills/>
                </ContentWrapper>
                <Social />
            </FlexWrapper>
        </div>
    );
}



export default App;

