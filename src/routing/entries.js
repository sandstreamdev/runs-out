const ENTRIES = '/entries';

export const EntriesFilters = {
  ARCHIVED: 'archived',
  COMPLETED: 'completed',
  UNHANDLED: 'unhandled'
}

export const entriesRoute = filter => filter ? `${ENTRIES}/${filter}` : ENTRIES;

export const newEntryRoute = () => `${ENTRIES}/new`;
