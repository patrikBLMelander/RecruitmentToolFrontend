const initialData = {
    tasks: {
      'task-1': { id: 'task-1', content: 'Cribb' },
      'task-2': { id: 'task-2', content: 'Oscar Forss' },
      'task-3': { id: 'task-3', content: 'Patrik Melander' },
      'task-4': { id: 'task-4', content: 'Iryna Gnatenko' },
    },
    columns: {
      'column-1': {
        id: 'column-1',
        title: 'Applied',
        taskIds: ['task-1', 'task-2', 'task-3', 'task-4'],
      },
      'column-2': {
        id: 'column-2',
        title: 'Interesting',
        taskIds: [],
      },
      'column-3': {
        id: 'column-3',
        title: 'Interview',
        taskIds: [],
      },
      'column-4': {
        id: 'column-4',
        title: 'Hire',
        taskIds: [],
      },
      'column-5': {
        id: 'column-5',
        title: 'Dismiss',
        taskIds: [],
      },
    },
    // Facilitate reordering of the columns
    columnOrder: ['column-1', 'column-2', 'column-3', 'column-4', 'column-5'],
  };
  
  export default initialData;
  