import { SectionTitle } from "../../../components/SectionTitle";
import {Contact} from './contact/Contact'
import { FlexWrapper } from "../../../components/FlexWrapper";
import { SectionText } from "../../../components/SectionText";



export const Contacts = () => {
    return (
        <section id='contact'>
            <SectionTitle>Contact</SectionTitle>
            <SectionText>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto amet atque quae magni cumque debitis est aspernatur qui.
            </SectionText>
            <FlexWrapper wrap="wrap" justify="center" gap="20px">
                <Contact text="+7 (922) 677 - XX - XX" icon="phone" title="phone"/>
                <Contact text="albogachiev-2014@mail.ru" icon="email" title="email" href="mailto:albogachiev-2014@mail.ru" />
                <Contact text="@ALEM_OF_STEEL" icon="telegram" title="telegram" href="https://t.me/ALEM_OF_STEEL" />
            </FlexWrapper>
        </section>
    );
};

