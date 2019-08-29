export const cohorts = [
  {
    id: '1',
    name: 'Family',
    description: 'Cohort description',
    sacksCount: 8,
    membersCount: 13,
    notificationsCount: 8
  },
  {
    id: '2',
    name: 'Company',
    description: 'Sack description that can be only one line height, longer than screen width',
    sacksCount: 8,
    membersCount: 13,
  },
  {
    id: '3',
    name: 'Joga class',
    description: 'Cohort description',
    sacksCount: 1,
    membersCount: 6,
    isArchived: true
  },
  {
    id: '4',
    name: 'Soccer team',
    sacksCount: 3,
    membersCount: 12
  }
];

export const getCohort = cohortId => cohorts.find(cohort => cohort.id === cohortId);
