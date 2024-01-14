export function CreateTodo(){

    return (
        <div>
            <input id="title" style={{
            padding: 10,
            margin: 10
        }}  type="text" placeholder="Add Todo" /><br /><br />
            <input id="desc" style={{
            padding: 10,
            margin: 10
        }} type="text" placeholder="Add Description" /><br />
            <button style={{
            padding: 10,
            margin: 10
        }}> Add Todo</button>
        </div>
    )
}

