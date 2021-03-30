import React from 'react';
import './Home.css'
import Logo from '../../components/Logo/Logo';
import Button from '../../components/Button/Button';
import Card from '../../components/Card/Card';
import {Grid} from '@material-ui/core';
import Accordion from '../../components/Accordion/Accordion';

function Home(){
    const [firstNames, setFirstNames] = React.useState(['henry','jason','alexa','khalil']);
    const [currentUser, setCurrentUser] = React.useState('Brandon')

    const changefirstName = ()=> {
        setCurrentUser('Jason')
    }

    return(
        <Grid container spacing={3}>
            <Button buttonName="Back" color="blue" onClick={changefirstName}/>
            <Button buttonName="Play" color="pink"/>
            <Button buttonName="Pause" color="black"/>
            <Button buttonName="Next" color="red"/>
            {/* <Logo/> */}
            <Card titleName={currentUser} date="September 15, 1999" bodyText="loream fhewuahfowehifuiwef jfewuifh iuweefwh" image="https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8cGljfGVufDB8fDB8&ixlib=rb-1.2.1&w=1000&q=80"/>
            <Grid item xs={3}>
                <Accordion title="react" body="fuwheaiufhuiewhuifhweofhguiywehio"/>
                <Accordion title="JS" body="fjowefwe"/>
                <Accordion title="HTML" body="for noobs"/>
                <Accordion title="CSS" body="not today"/>
                <Accordion title="AWS" body="cloud computing"/>
            </Grid>

            {/* looks through the firstNames state and for each value inside the array, maps out a button with the name of the values inside of state. */}
            {firstNames.map(item=>
                <div>
                    <Button buttonName={item}/>
                </div>
            )}
        </Grid>
    )
}

export default Home;