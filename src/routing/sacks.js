const SACKS = '/sacks';

export const SacksFilters = {
  ARCHIVED: 'archived',
  FAVORITES: 'favorites'
}

export const ValidSacksFilters = Object.values(SacksFilters).join('|');

export const SackFormActions = {
  EDIT: 'edit',
  NEW: 'new'
}

export const sacksRoute = ({ filter, sackId } = {}) => {
  let route = SACKS;

  if (sackId) {
    route += `/${sackId}`;
  }

  if (filter) {
    route += `/${filter}`;
  }

  return route;
}

export const newSackRoute = cohortId => {
  let route = `${SACKS}/new`;

  if (cohortId) {
    route += `/${cohortId}`;
  }

  return route;
}

export const editSackRoute = sackId => `${SACKS}/${sackId}/edit`;
