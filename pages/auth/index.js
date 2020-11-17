import React from 'react';
import User from '../../components/User';

export default function index() {
  return (
    <div>
      Auth index page
      <User name="Max" age="28" />
    </div>
  );
}
