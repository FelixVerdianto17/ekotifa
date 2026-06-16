const fs = require('fs');

const path = 'd:/Ekotifa-next/data/programs.ts';
let content = fs.readFileSync(path, 'utf8');

const map = {
  'swasana': 'swasana.webp',
  'forest-healing': 'forest-healing.webp',
  'discoffeery': 'discoffeery.webp',
  'bike-heritage': 'bike-hertiage.webp',
  'couple-journey': 'couple-journey.webp',
  'adrenaline-junkie': 'ardenaline-junkie.webp',
  'trip-in-tribe': 'trip-in-tribe.webp',
  'life-cycle': 'life-cycle.webp',
  'ecocamp': 'ecocamp.webp',
  'local-genius': 'local-genius.webp',
  'human-uniqueness': 'human-qniqueness.webp',
  'youth-research-camp': 'youth-research-camp.webp',
  'live-in-story': 'live-in-story.webp',
  'feelocity': 'feelocity.webp',
  'community-service': 'Comunity Service.webp',
  'future-leader-camp': 'Future Leader Camp.webp',
  'future-campus-program': 'Future Campus Program.webp',
  'indoestrip': 'IndoeStrip.webp',
  'cultural-mission': 'Cultural Mission.webp',
  'school-vacation': 'School Vaction.webp',
  'farewell-party': 'Farrewel Party.webp',
  'corporate-vacation': 'Corporate Vaction.webp',
  'employee-gathering': 'Employee Gathering.webp',
  'team-building': 'Team Building.webp',
  'company-celebration': 'Company Celebration.webp',
  'business-leisure': 'Business Leisure.webp'
};

let missing = [];

for (const [id, filename] of Object.entries(map)) {
  const regex = new RegExp(`(id:\\s*"${id}"[\\s\\S]*?imageUrl:\\s*")([^"]+)(")`, 'g');
  if (content.match(regex)) {
    content = content.replace(regex, `$1/images/programs/${filename}$3`);
  } else {
    missing.push(id);
  }
}

fs.writeFileSync(path, content);
console.log('Update complete. Missing IDs:', missing);
