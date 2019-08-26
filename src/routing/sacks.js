const SACKS = '/sacks';

export const SacksFilters = {
  ARCHIVED: 'archived',
  FAVORITIES: 'favorities'
}

export const ValidSacksFilters = Object.values(SacksFilters).join('|');

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

export const newSackRoute = () => `${SACKS}/new`;

export const sackEditRoute = sackId => `${SACKS}/${sackId}/edit`;
