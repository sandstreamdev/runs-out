const ENTRIES = '/entries';

export const EntriesFilters = {
  ARCHIVED: 'archived',
  COMPLETED: 'completed'
}

export const ValidEntriesFilters = Object.values(EntriesFilters).join('|');

export const entriesRoute = filter => filter ? `${ENTRIES}/${filter}` : ENTRIES;

export const newEntryRoute = () => `${ENTRIES}/new`;
