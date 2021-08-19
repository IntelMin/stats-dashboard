import block from 'bem-cn-lite';
import { NavLink } from 'react-router-dom';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import {
  faTwitter,
  faTelegram,
  faDiscord,
  faMedium,
} from '@fortawesome/free-brands-svg-icons';
import { faBook } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Text } from 'components';

import './style.scss';

export type SidebarNavItems = {
  to: string;
  text: string;
  icon: IconProp;
}[];

type SocialMediaItem = {
  name: string;
  icon: IconProp;
  url: string;
};

interface Props {
  className?: string;
  navItems: SidebarNavItems;
}

const b = block('sidebar');

const socialMediaItems: SocialMediaItem[] = [
  {
    name: 'twitter',
    icon: faTwitter,
    url: 'https://twitter.com/StripsFinance',
  },
  {
    name: 'telegram',
    icon: faTelegram,
    url: 'http://t.me/stripsfi',
  },
  {
    name: 'discord',
    icon: faDiscord,
    url: 'http://discord.gg/xuvGUdC6Cb',
  },
  {
    name: 'medium',
    icon: faMedium,
    url: ' http://strips-finance.medium.com',
  },
  {
    name: 'docs',
    icon: faBook,
    url: 'https://docs.strips.finance',
  },
];

const Sidebar = ({ navItems }: Props) => {
  return (
    <div className={b()}>
      <ul className={b('nav')}>
        {navItems.map((item, i) => (
          <li className={b('nav-item')} key={i}>
            <NavLink
              className={b('nav-link')}
              key={item.to}
              to={item.to}
              activeClassName={b('nav-link', { active: true })}
            >
              <FontAwesomeIcon
                icon={item.icon}
                className={b('nav-link-icon')}
              />
              {item.text}
            </NavLink>
          </li>
        ))}
      </ul>
      <div className={b('social-media')}>
        <Text className={b('social-title')}>Community: </Text>
        <div className={b('social-links')}>
          {socialMediaItems.map((x) => (
            <a
              className={b('social-link', { color: x.name })}
              key={x.url}
              href={x.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={x.icon} />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
