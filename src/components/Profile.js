import React from 'react';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import IconButton from '@material-ui/core/IconButton';
import Link from './Link';

export default function Profile() {
  return (
    <IconButton component={Link} href="/ich">
      <AccountCircleIcon fontSize="large" />
    </IconButton>
  );
}
