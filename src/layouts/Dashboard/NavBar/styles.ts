import { makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => ({
  drawer: {
    width: `${process.env.REACT_APP_DRAWER_WIDTH}px`,
    flexShrink: 0,
  },
  drawerPaper: {
    width: `${process.env.REACT_APP_DRAWER_WIDTH}px`,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    fontSize: 20,
    '& img': {
      width: 36,
      height: 36,
      marginRight: 16,
    },
  },
}));

export default useStyles;
