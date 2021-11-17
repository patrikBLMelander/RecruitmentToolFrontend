const onDragEnd = result => {
    //const { destination, source, draggableId, type } = result;

    if (!destination) {
    return;
    }

    if (
    destination.droppableId === source.droppableId &&
    destination.index === source.index
    ) {
    return;
    }

    if (type === 'column') {
    const newColumnOrder = Array.from(state.columnOrder);
    newColumnOrder.splice(source.index, 1);
    newColumnOrder.splice(destination.index, 0, draggableId);

    const newState = {
        ...state,
        columnOrder: newColumnOrder,
    };
    setState(newState);
    return;
    }


    const home = state.columns[source.droppableId];
    const foreign = state.columns[destination.droppableId];

    if (home === foreign) {
    const newTaskIds = Array.from(home.taskIds);
    newTaskIds.splice(source.index, 1);
    newTaskIds.splice(destination.index, 0, draggableId);

    const newHome = {
        ...home,
        taskIds: newTaskIds,
    };

    const newState = {
        ...state,
        columns: {
        ...state.columns,
        [newHome.id]: newHome,
        },
    };

    setState(newState);
    return;
    }


    // moving from one list to another
    const homeTaskIds = Array.from(home.taskIds);
    homeTaskIds.splice(source.index, 1);
    const newHome = {
    ...home,
    taskIds: homeTaskIds,
    };

    const foreignTaskIds = Array.from(foreign.taskIds);
    foreignTaskIds.splice(destination.index, 0, draggableId);
    const newForeign = {
    ...foreign,
    taskIds: foreignTaskIds,
    };

    const newState = {
    ...state,
    columns: {
        ...state.columns,
        [newHome.id]: newHome,
        [newForeign.id]: newForeign,
    },
    };
    setState(newState);
}