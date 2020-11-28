import React, { useState } from 'react';

// services
import httpRequest from 'services/httpRequest';

// libs
import clsx from 'clsx';

// material core
import CssBaseline from '@material-ui/core/CssBaseline';

// context
import { useGlobalContext } from 'context/GlobalContext';
import ErrorBoundary from 'containers/ErrorBoundary';


// components
import NavBar from './NavBar';
import TopBar from './TopBar';

// styles
import useStyles from './styles';

export default function PersistentDrawerLeft() {
  const classes = useStyles();
  const { isDrawer } = useGlobalContext();
  const [count, setCount] = useState<any>(null);

  const _fetchTodo = async () => {
    const res = await  httpRequest.get('/users', {
      showSpinner: true,
    });

    console.log('fetch: ', res);
  };

  const _handleShowError = () => {
    setCount({
      number: 1,
    });
  };

  return (
    <div className={classes.root}>
      <CssBaseline />

      <TopBar />

      <NavBar isDrawer={isDrawer} />
      <ErrorBoundary>
        <main
          className={clsx(classes.content, {
            [classes.contentShift]: !isDrawer,
          })}
        > 
          <button type="button" onClick={_fetchTodo}>fetch todo</button>
          <h3>React error boundary</h3>
          <button type="button" onClick={_handleShowError}>test demo</button>
          {count}
        </main>
      </ErrorBoundary>
      
    </div>
  );
}
