import SkillBadge from '../components/SkillBadge';

export function SkillsPage() {
  const skills = [
    { id: 1, label: 'HTML / CSS' },
    { id: 2, label: 'JavaScript' },
    { id: 3, label: 'React + TypeScript' }
  ];

  return (
    <div className="page-content">
      <h2>My Skills</h2>
      <div className="skills-list">
        {skills.map(skill => (
          <SkillBadge key={skill.id} skill={skill} />
        ))}
      </div>
    </div>
  );
}