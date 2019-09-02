const ENTRIES = '/entries';

export const EntriesFilters = {
  ARCHIVED: 'archived',
  COMPLETED: 'completed'
}

export const ValidEntriesFilters = Object.values(EntriesFilters).join('|');

export const entriesRoute = ({ filter, sackId } = {}) => {
  let route = ENTRIES;

  if (sackId) {
    route += `/${sackId}`;
  }

  if (filter) {
    route += `/${filter}`;
  }

  return route;
}

export const newEntryRoute = () => `${ENTRIES}/new`;
