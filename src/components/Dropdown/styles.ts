import { createUseStyles } from 'react-jss';
import { DropdownPropsType } from 'types/Dropdown';
import { ComponentStylesProps } from 'types/global';

const styles: ComponentStylesProps<DropdownPropsType> = {
  button: {
    borderRadius: '5px',
    boxSizing: 'border-box',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    letterSpacing: '0.03rem',
    '&:focus': {
      outline: ['none'],
    },
    cursor: 'pointer',
    color: '#ffffff',
    backgroundColor: '#0F62FE',
    boxShadow: {
      x: '0rem',
      y: '0.4rem',
      blur: '0.8rem',
      color: 'rgba(0, 0, 0, 0.14)',
    },
    border: '2px solid #0F62FE',
    textTransform: 'uppercase',
    padding: '0.5rem',
  },
  dropdownWrapper: {
    position: 'relative',
    display: 'inline-block',
  },
  optionsList: {
    margin: [0],
    position: 'absolute',
    borderRadius: '6px',
    listStyle: 'none',
    zIndex: 100,
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.14)',
    padding: [0],
    overflow: 'hidden',
    letterSpacing: '0.02rem',
  },
  option: {
    font: {
      family: 'Lato, sans-serif',
      size: '1.2rem',
      lineHeight: '1.8rem',
      weight: 400,
    },
    boxSizing: 'border-box',
    padding: {
      top: '1.6rem',
      bottom: '1.6rem',
      left: '2.4rem',
      right: '2.4rem',
    },
    cursor: 'pointer',
    '&:last-of-type': {
      '&::after': {
        display: 'none',
      },
    },
    '&::after': {
      content: '""',
      display: 'block',
      height: '0.5px',
      width: '100%',
      backgroundColor: '#000000',
      position: 'relative',
      bottom: '-1.6rem',
    },
  },
};
const createStyles = createUseStyles(styles);

export { createStyles };
