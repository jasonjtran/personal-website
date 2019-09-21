import React from 'react';

import ProfilePic from '../../assets/images/cropped_nlc_pfp.jpg';
import { Button, Icon } from 'semantic-ui-react';
import './Home.css';

const links = (
    <div className='Links'>
        <a href='https://www.facebook.com/jason.tran.355744'>
            <Icon className='facebook' size='big' />
        </a>
        <a href='https://github.com/jasonjtran'>
            <Icon className='github' size='big' />
        </a>
        <a href='https://www.linkedin.com/in/jasonjtran/'>
            <Icon className='linkedin' size='big' />
        </a>
    </div>
)

const Home = () => {
    return (
        <div className='Home'>
            <h1 className='HomeText'>Jason J. Tran</h1>
            <img className="Profile" src={ProfilePic} alt={ProfilePic}></img>
            {links}
            <Button 
                primary 
                compact 
                animated='fade' 
                size='medium'
                className='ResumeButton'
                href='https://drive.google.com/file/d/1mGWDrMOXMpapCj3riz4eeotYE34b54--/view?usp=sharing'>
                <Button.Content visible>
                    <Icon className='paperclip'/>
                </Button.Content>
                <Button.Content hidden>
                    <span className='HomeText'>Get Resume</span>
                </Button.Content>
            </Button>
        </div>
    );
}

export default Home;