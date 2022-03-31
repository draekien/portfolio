/** @jsxImportSource theme-ui */
import * as styles from './heading.styles';

export type HeadingVariant = 'h1' | 'h2' | 'h3' | 'h4';

export interface HeadingProps {
  variant?: HeadingVariant;
  fontSize?: HeadingVariant;
  children: React.ReactNode;
}

export const Heading: React.FC<HeadingProps> = ({
  variant = 'h1',
  fontSize,
  children,
}) => {
  const h1 = <h1 sx={styles.headingCss(variant, fontSize)}>{children}</h1>;
  const h2 = <h2 sx={styles.headingCss(variant, fontSize)}>{children}</h2>;
  const h3 = <h3 sx={styles.headingCss(variant, fontSize)}>{children}</h3>;
  const h4 = <h4 sx={styles.headingCss(variant, fontSize)}>{children}</h4>;

  switch (variant) {
    case 'h1':
      return h1;
    case 'h2':
      return h2;
    case 'h3':
      return h3;
    case 'h4':
      return h4;
    default:
      return h1;
  }
};
