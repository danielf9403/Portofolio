import React from 'react';
import {faInstagram, faGithub, faLinkedin, faDiscord, faReddit, faGoogle, faWhatsapp} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Container } from 'react-bootstrap';



const Sidebar = () => {
  return (
    <div className="sidebar">
       <Container>
        <div className='icon'>
          <a href='https://github.com/danielf9403'>
            <FontAwesomeIcon icon={faGithub} />
          </a>

          <a href='https://www.linkedin.com/in/daniel-emanuel-funaru-4b59b722b/'>
            <FontAwesomeIcon icon={faLinkedin} />
          </a>

          <a href="mailto:daniel94.dd@gmail.com?subject={subject}&body={body}">
            <FontAwesomeIcon icon={faGoogle} />
          </a>

          <a href='mailto:daniel94@gmail.com'>
          <FontAwesomeIcon icon={faWhatsapp} />
          </a>

          <a href='https://www.instagram.com/daniel.ef94'>
            <FontAwesomeIcon icon={faInstagram} />
          </a>

          <a href='https://discord.com/channels/@Daniel%20Funaru#6756'>
            <FontAwesomeIcon icon={faDiscord} />
          </a>

          <a href='https://www.instagram.com/daniel.ef94'>
            <FontAwesomeIcon icon={faReddit} />
          </a>

        </div>
       </Container>
    </div>
  );
};



export default Sidebar;