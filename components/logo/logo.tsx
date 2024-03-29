/** @jsxImportSource theme-ui */
import { Box } from '@theme-ui/components';
import Image from 'next/image';
import logo from '../../public/mark.svg';
import Tooltip from '../tooltip/tooltip';
import * as styles from './logo.styles';

export const Logo = () => {
  return (
    <Box sx={styles.logoContainerCss}>
      <Tooltip text="View the source code for this portfolio">
        <a
          href="https://github.com/draekien/portfolio"
          target="_blank"
          rel="noopener noreferrer">
          <Image
            src={logo}
            alt="The logo of William Pei"
            style={{ width: '100%', height: '100%' }}
          />
        </a>
      </Tooltip>
    </Box>
  );
};

export default Logo;
