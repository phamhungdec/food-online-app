import React, { useState } from 'react';

// libs
import clsx from 'clsx';

// material core
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';

// material icon
import HomeIcon from '@material-ui/icons/Home';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import Brightness7Icon from '@material-ui/icons/Brightness7';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

// configs
import { THEMES, LANGUAGE } from 'configs';

// context
import { useGlobalContext } from 'context/GlobalContext';

// components
import TopBarAccount from './TopBarAccount';

// styles
import useStyles from './styles';

function TopBar() {
  const classes = useStyles();
  const { modeTheme, isDrawer, setModeTheme, setDrawer, setLanguage, language } = useGlobalContext();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const _handleOpenLanguage = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const _handleChooseLanguage = (lang: string) => () => {
    setLanguage(lang);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const _handleDrawerOpen = () => {
    setDrawer(!isDrawer);
  };

  const _handleChangeTheme = () => {
    const type = modeTheme === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT;
    setModeTheme(type);
  };

  const renderTextLanguage = () => {
    switch (language) {
      case LANGUAGE.ENGLISH: {
        return 'ENGLISH';
      }
      case LANGUAGE.VIETNAMESE: {
        return 'VIETNAMESE';
      }
      default:
        return null;
    }
  };

  return (
    <AppBar
      position="fixed"
      className={clsx(classes.appBar, {
        [classes.appBarShift]: !isDrawer,
      })}
    >
      <Toolbar>
        <IconButton color="inherit" aria-label="open drawer" edge="start" className={clsx(classes.menuButton)}>
          <HomeIcon />
        </IconButton>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={_handleDrawerOpen}
          edge="start"
          className={clsx(classes.menuButton)}
        >
          <MenuIcon />
        </IconButton>
        <div className={classes.search}>
          <div className={classes.searchIcon}>
            <SearchIcon />
          </div>
          <InputBase
            placeholder="Search…"
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
            inputProps={{ 'aria-label': 'search' }}
          />
        </div>
        <div className={classes.grow} />
        <div className={classes.topBar_setting}>
          <Button
            className={classes.menuLanguage}
            aria-controls="simple-menu"
            title="Change Language"
            aria-haspopup="true"
            onClick={_handleOpenLanguage}
          >
            {renderTextLanguage()} <ExpandMoreIcon />
          </Button>
          <Menu id="simple-menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
            <MenuItem selected={language === LANGUAGE.ENGLISH} onClick={_handleChooseLanguage(LANGUAGE.ENGLISH)}>
              English
            </MenuItem>
            <MenuItem selected={language === LANGUAGE.VIETNAMESE} onClick={_handleChooseLanguage(LANGUAGE.VIETNAMESE)}>
              Vietnamese
            </MenuItem>
          </Menu>

          <IconButton
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            color="inherit"
            title="Change Theme"
            onClick={_handleChangeTheme}
          >
            {modeTheme === THEMES.LIGHT ? <Brightness4Icon /> : <Brightness7Icon />}
          </IconButton>

          <TopBarAccount />
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default TopBar;
