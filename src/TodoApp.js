import React from 'react';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import useTodoState from './hooks/useTodoState';
import {TodosProvider} from './contexts/todos.context';

function TodoApp() {

    const initialTodos = [{id: 1, task: 'Pet dog', completed: true}];

    const { todos, addTodo, removeTodo, toggleTodo, editTodo } 
    = useTodoState(initialTodos); 

    return (
        <Paper style = {{
            padding: 0,
            margin: 0,
            heigh: "100vh",
            backgroundColor: "#FAFAFA"
        }}
        elevation={0}>

            <AppBar color='primary' position='static' style={{heigh: "64px"}}>
                <Toolbar>
                    <Typography color="inherit">
                        TODOS WITH HOOKS
                    </Typography>
                </Toolbar>
            </AppBar>
            <Grid container justify="center" style={{marginTop: "1rem"}}>
                <Grid item xs={11} md={8} lg={4}>
                    <TodosProvider>
                    <TodoForm addTodo={addTodo}/>
                    <TodoList todos={todos} removeTodo={removeTodo} editTodo={editTodo} toggleTodo={toggleTodo}/>
                    </TodosProvider>
                </Grid>
            </Grid>
            
        </Paper>
    );
}

export default TodoApp;