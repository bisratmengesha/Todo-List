function TodoForm({addTodo}){
    const [value, SetValue] = React.useState(' ');
    const handleSubmit = e => {
        e.preventDefault();
        if (!value) return;
        addTodo(value);
        
        SetValue('');
    }

    return(
        <form onSubmit ={handleSubmit}>
        <input
        type="text"
        className="input"
         value={value}
         placeholder="Add Todo  ..."
         onChange={e => SetValue(e.target.value)}
         />
    </form>

    );
}