import React from 'react';
import get_socials_data from '../../../src/helper/socials';

function SocialLink({ link }) {
  const data = get_socials_data(link);

  return (
    <a className='team__icon margin-horiz--sm' href={link}>
      <div>{data.icon}</div>
    </a>
  );
}

const TeamMember = function (props) {
  const { name, title, image_url, social_links } = props;

  return (
    <div className='col margin-vert--md'>
      <div className='card card--full-height'>
        <div className='card__header'>
          <div className='avatar avatar--vertical'>
            <img
              className='avatar__photo avatar__photo--xl margin-vert--md'
              src={image_url}
            />
            <div className='avatar__intro'>
              <div className='avatar__name'>{name}</div>
              <small className='avatar__subtitle'>{title}</small>
            </div>
          </div>
        </div>

        <div className='card__footer'>
          <div className='link-list'>
            {social_links &&
              social_links.map((props, idx) => (
                <SocialLink key={idx} link={props} />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamMember;
