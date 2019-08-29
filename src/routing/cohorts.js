const COHORTS = '/cohorts';

export const CohortsFilters = {
  ARCHIVED: 'archived'
}

export const ValidCohortsFilters = Object.values(CohortsFilters).join('|');

export const cohortsRoute = ({ filter, cohortId } = {}) => {
  let route = COHORTS;

  if (cohortId) {
    route += `/${cohortId}`;
  }

  if (filter) {
    route += `/${filter}`;
  }

  return route;
}

export const newCohortRoute = () => `${COHORTS}/new`;

export const editCohortRoute = cohortId => `${COHORTS}/${cohortId}/edit`;
