import { ComponentStylesProps } from 'types/global';
import { createUseStyles } from 'react-jss';
import { TablePropsType } from 'types/Table';

const styles: ComponentStylesProps<TablePropsType> = {
  tableWrapper: {
    width: '120rem',
    margin: '2rem auto',
    backgroundColor: '#F8F8F8',
  },
  table: {
    boxSizing: 'border-box',
    font: {
      family: ['Lato', 'sans-serif'],
    },
    borderCollapse: 'collapse',
    border: 'none',
    tableLayout: 'fixed',
    position: 'relative',
    overflowX: 'auto',
    width: '100%',
  },
  paginationController: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '10rem',
    padding: '0.5rem 2rem',
    margin: { left: 'auto' },
  },
  currentPageNumber: {
    font: {
      size: '1.8rem',
      lineHeight: '2.4rem',
      weight: 600,
    },
    letterSpacing: '0.02rem',
  },
};

const createStyles = createUseStyles(styles);

export { createStyles };
