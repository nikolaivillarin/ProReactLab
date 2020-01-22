import { combineReducers } from 'redux'
import { 
    ADD_TODO, 
    TOGGLE_TODO,
    SET_VISIBILITY_FILTER,
    VisibilityFilters
} from '../Actions/actions'

const { SHOW_ALL } = VisibilityFilters

// The function name is used as the property name
// The return value is used as the property value
function visibilityFilter(state = SHOW_ALL, action) {
    switch (action.type) {
        case SET_VISIBILITY_FILTER:
            return action.filter
        default:
            return state
    }
}

// The function name is used as the property name
// The return value is used as the property value
function todos(state = [], action) {
    switch (action.type) {
        case ADD_TODO:
            return [
                ...state,
                {
                    text: action.text,
                    completed: false
                }
            ]
        case TOGGLE_TODO:
            return state.map((todo, index) => {
                if (index === action.index) {
                    return Object.assign({}, todo, {
                        completed: !todo.completed
                    })
                }

                return todo
            })
        default:
            return state
    }
}

// This is your state tree
const todoApp = combineReducers({
    visibilityFilter,
    todos
})

export default todoApp