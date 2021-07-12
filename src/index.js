import React from 'react';
import ReactDom from 'react-dom';
import CommentDetail from './CommentDetail';

const App = () => {
  return (
    <div className='ui container comments'>
      <CommentDetail
        author='Sam'
        timeAgo='Today at 4pm'
        comment='nice blah blah'
      />
      <CommentDetail
        author='Jane'
        timeAgo='Yesterday at 3pm'
        comment='interesting'
      />
      <CommentDetail
        author='Alex'
        timeAgo='Last week'
        comment='blah blah blah'
      />
    </div>
  );
};

ReactDom.render(<App />, document.querySelector('#root'));
