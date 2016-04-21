import keyMirror from 'keyMirror';

// Input: {key1: val1, key2: val2}
//Output: {key1: key1, key2: key2}

module.exports = keyMirror({
    TODO_CREATE: null,
    TODO_COMPLETE: null,
    TODO_DESTROY: null,
    TODO_DESTROY_COMPLETED: null,
    TODO_TOGGLE_COMPLETE_ALL: null,
    TODO_UNDO_COMPLETE: null,
    TODO_UPDATE_TEXT: null
});
