import React from 'react';
import { useSelector } from 'react-redux';

// components
import CircularLoading from 'components/atoms/CircularLoading';

// selectors
import { isLoadingSelector } from 'selectors/app.selector';

function Spinner() {
  const isLoading = useSelector(isLoadingSelector);

  return (
    <>
      {isLoading ? <CircularLoading /> : null }
    </>
  );
}

export default Spinner;
