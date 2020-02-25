export const state = {
    users: [
        {id: "1", name: "Artur1"},
        {id: "2", name: "Artur2"},
        {id: "3", name: "Artur3"},
        {id: "4", name: "Artur4"},
        {id: "5", name: "Artur5"},
        {id: "6", name: "Artur6"}
    ],
    messages: [
        {info: "Hey React 1"},
        {info: "Hey React 2"},
        {info: "Hey React 3"},
        {info: "Hey React 4"},
        {info: "Hey React 5"},
    ]

}

export const addPost = (text) => {
    debugger;
    const data = {
        id: "7",
        name: "End"
    }
    state.users.push(data);
    state.users.map( (item) => console.log(item));
    alert(text)
}
