import { useLikes } from '../context/LikesContext';
import { Button } from './ui/Button';

export function LikeButton() {
  const { likes, addLike } = useLikes();

  const buttonText = likes > 0 ? `❤️ Liked (${likes})` : '♡ Like';

  return (
    <Button 
      variant="secondary" 
      aria-label={`Like (${likes} likes)`} 
      onClick={addLike}
    >
      {buttonText}
    </Button>
  );
}