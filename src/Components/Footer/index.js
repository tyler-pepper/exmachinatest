import React from 'react';

import ShareLogo from '../../Components/ShareLogo';

import { Wrapper } from './Footer.theme';

const Footer = () => (
  <Wrapper>
    <ShareLogo type="github" />
    <ShareLogo type="drupal" />
  </Wrapper>
);

export default Footer;
