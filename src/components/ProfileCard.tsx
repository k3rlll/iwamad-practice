import { LikeButton } from './LikeButton';
import SkillBadge from './SkillBadge';

type ProfileCardProps = {
  name: string;
  role: string;
  avatarUrl?: string;
  bio: string;
  skills: { id: number; label: string }[];
};

export default function ProfileCard({ name, role, avatarUrl, bio, skills }: ProfileCardProps) {
  return (
    <div className="profile-card">
      {avatarUrl && (
        <img src={avatarUrl} alt={name} className="avatar" />
      )}
      
      <div className="profile-info">
        <h2>{name}</h2>
        <p className="role">{role}</p>
        <p className="bio">{bio}</p>
        <ul className="skills-list">
          {skills.map(skill => (
            <SkillBadge key={skill.id} skill={skill} />
          ))}
        </ul>
      </div>

      <div className="profile-actions">
        <LikeButton />
      </div>
    </div>
  );
}