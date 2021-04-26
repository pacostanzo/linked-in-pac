import React from 'react';
import CreateIcon from '@material-ui/icons/Create';

import './Feed.styles.css';

const Feed = (props) => {
  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <CreateIcon />
          <form action="">
            <input type="text" />
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Feed;
