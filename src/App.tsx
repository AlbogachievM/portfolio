import './App.css';
import Vanta from './Vanta'
import { Main } from './layout/sections/main/Main';
import { FlexWrapper } from './components/FlexWrapper';
import { Sidebar } from './layout/sidebar/Sidebar';
import { Social } from './layout/social/Social';
import { Skills } from './layout/sections/skills/Skills';
import { Projects } from './layout/sections/projects/Projects';
import { Contacts } from './layout/sections/contacts/Contacts';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Container } from './components/Container';
import { MobileMenu } from './components/mobileMenu/MobileMenu';



function App() {

    return (
        <BrowserRouter>
            <div className="App">
                <div className='vanta-bg' id={"app-van"}></div>
                <Container maxWidth='1920px'>
                    <FlexWrapper justify='center'>
                        <Sidebar/>
                        <Container >
                            <Routes>
                                <Route path="*" element={<Main />} />
                                <Route path="/Projects" element={<Projects />} />
                                <Route path="/Skills" element={<Skills />} />
                                <Route path="/Contacts" element={<Contacts/>} />
                            </Routes>
                        </Container>
                        <MobileMenu/>
                        <Social />
                    </FlexWrapper>
                </Container>
                <Vanta />
            </div>
        </BrowserRouter>
    );
}



export default App;

