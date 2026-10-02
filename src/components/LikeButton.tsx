import { useLikes } from '../context/LikesContext';

export function LikeButton() {
  const { likes, addLike } = useLikes();

  return (
    <button
      className={likes > 0 ? 'liked-state' : ''}
      onClick={addLike}
      style={{
        backgroundColor: likes > 0 ? '#fecaca' : '#f3f4f6',
        color: likes > 0 ? '#ef4444' : '#374151',
        padding: '8px 16px',
        border: 'none',
        borderRadius: '8px',
        cursor: 'pointer',
        marginTop: '10px'
      }}
    >
      {likes > 0 ? `❤️ Liked (${likes})` : '♡ Like'}
    </button>
  );
}