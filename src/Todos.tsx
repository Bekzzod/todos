import React from 'react'

interface IState {
  todo: string;
  todos: string[];
}

class Todos extends React.Component<{}, IState> {
  public state: IState = {
    todo: '',
    todos: [],
  };

  public handleEnter = (event: React.KeyboardEvent) => {
    console.log(event.key)

    if (event.key === 'Enter') {
      const arr = this.state.todos.slice();
      arr.push(this.state.todo);

      this.setState({
        todo: '',
        todos: arr,
      })
    }
  }

  public handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget
    this.setState({
      todo: value,
    })

  }
  
  public render() {
    let res:any;

    if (this.state.todos.length > 0 ) {
      const arr = this.state.todos.slice()
      res = arr.map(item => {
        return (
          <div className='todoItem'>
            {item}
          </div>
        )
      })
    }

    return (
      <div className='todosContainer'>
        <input
          type='text'
          name='todo'
          value={this.state.todo}
          placeholder='What needs to be done?'
          onChange={this.handleChange}
          onKeyPress={this.handleEnter}
        />
        {res}
      </div>
    )
  }
}

export default Todos