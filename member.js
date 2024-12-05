function skillsMember() {
  return {
    name: 'John Doe',
    age: 30,
    skills: ['HTML', 'CSS', 'JS'],
  };
}

function getSkills() {
  const member = skillsMember();
  const { skills } = member;
  return skills;
}