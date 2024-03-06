import './PostInfo.scss';

import { CommentList } from '../CommentList/CommentList';
import { UserInfo } from '../UserInfo/UserInfo';

export const PostInfo = ({ post }) => {
  const { title, body, user, comments } = post;

  return (
    <>
      <div className="PostInfo">
        <div className="PostInfo__header">
          <h3 className="PostInfo__title">{title}</h3>
        </div>

        <UserInfo user={user} key={user.id} />

        <p className="PostInfo__body">{body}</p>

        <hr />

        {comments.length !== 0 ? (
          <CommentList comments={comments} />
        ) : (
          <b data-cy="NoCommentsMessage">No comments yet</b>
        )}
      </div>
    </>
  );
};
