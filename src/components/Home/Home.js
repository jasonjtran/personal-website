import React from 'react';

import ProfilePic from '../../assets/images/cropped_nlc_pfp.jpg';
import { Button, Icon } from 'semantic-ui-react';
import './Home.css';

const links = (
    <div className='Links'>
        <a href='/'>
            <Icon className='facebook' size='big' />
        </a>
        <a href='/'>
            <Icon className='github' size='big' />
        </a>
        <a href='/'>
            <Icon className='linkedin' size='big' />
        </a>
    </div>
)

const Home = () => {
    return (
        <div className='HomeCard'>
            <h1>Jason Tran</h1>
            <img className="Profile" src={ProfilePic} alt={ProfilePic}></img>
            {links}
            <Button primary animated='fade' size='medium' className='ResumeButton'>
                <Button.Content visible>
                    <Icon className='dochub' size='large'/>
                </Button.Content>
                <Button.Content hidden>
                    Click for my Resume!
                </Button.Content>
            </Button>
        </div>
    );
}

export default Home;