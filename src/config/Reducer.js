

const loadState = () =>{
    const state = localStorage.getItem('users');
    if (state !== null) {
        return JSON.parse(state);
    }
    return {
        users: []
    }
}

export const saveState = (state) => {
    console.log('saved..');
    localStorage.setItem('users', JSON.stringify(state));
}

// const initState = {
//     users: [
//         { id: 1, title: "mohammed allaoui", note: "allaoui@gmail.com" },
//         { id: 2, title: "said Hamdan", note: "Hamdan@gmail.com" },
//         { id: 3, title: "mohammed charif", note: "charif@gmail.com" },
//         { id: 4, title: "khalid  riad", note: "riad@gmail.com" },
//     ]
// }

const reducer = (state = loadState(), action) => {
    switch (action.type) {
        case "AddUser":
            return { ...state, users: [...state.users, action.payload] }

        case "UpdateUser":
            const user = state.users.find((u) => u.id === parseInt(action.payload.id))
            if (user) {
                user.title = action.payload.title
                user.note = action.payload.note
            }
            return state;
        case "DeleteUser":
            return { ...state, users: [...state.users.filter((u)=>u.id !== parseInt(action.payload))] }

        default:
            return state
    }
}

export default reducer;