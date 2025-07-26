import { createSlice } from "@reduxjs/toolkit"

const taskSlice = createSlice({
    name: "tasks",
    initialState: {
        tasks: [
            {
                _id: "234234232r234234234",
                title: "something",
                description: "Implement CRUD task collections",
                directory: "Main",
                completed: false,
                important: true,
                deadline: "2024-10-20T00:00:00Z"
            },
            {
                _id: "task001",
                title: "task1",
                description: "Create UI layout using ",
                directory: "Main",
                completed: false,
                important: true,
                deadline: "2025-04-18T12:00:00Z"
            },
            {
                _id: "task2",
                title: "Team Meeting",
                description: "Discuss Q4 ",
                directory: "Main",
                completed: true,
                important: false,
                deadline: "2024-12-21T08:45:00Z"
            }
        ],
        directories: [
            {
                name: "Main",
                id: 123456
            },
            {
                name: "Secondary",
                id: 12345
            }
        ]
    },
    reducers: {


        toggleImportant: (state, action) => {
            const taskId = action.payload
            state.tasks = state.tasks.map(task =>
                task._id === taskId
                    ? { ...task, important: !task.important }
                    : task
            )
        },


        toggleCompleted: (state, action) => {
            const taskId = action.payload
            state.tasks = state.tasks.map(task =>
                task._id === taskId
                    ? { ...task, completed: !task.completed }
                    : task
            )
        },
        addDirectories: (state, action) => {
            const { id, name } = action.payload
            state.directories.push({ id, name })
        },

        deleteTask: (state, action) => {
            const taskId = action.payload
            state.tasks = state.tasks.filter(task => task._id !== taskId)
        },
        addTask: (state, action) => {
            state.tasks.unshift(action.payload);
        },
        editTask: (state, action) => {
            const { id, title, deadline, description, directory, important, completed } = action.payload
            const findTask = state.tasks.find(task => task._id === id)
            if (findTask) {
                Object.assign(findTask, action.payload)
            }

        },
        editDirectory: (state, action) => {
            // const { name, id } = action.payload
            // const findDirectory = state.directories.find(directory => directory.id === id)
            // if (findDirectory) {
            //     Object.assign(findDirectory, action.payload)
            // }



            const { id, name, oldName } = action.payload;

            // تغییر نام در دایرکتوری‌ها
            const dirIndex = state.directories.findIndex((dir) => dir.id === id);
            if (dirIndex !== -1) {
                state.directories[dirIndex].name = name;
            }

            // به‌روزرسانی تسک‌ها
            state.tasks = state.tasks.map(task =>
                task.directory === oldName
                    ? { ...task, directory: name }
                    : task
            );

        },
        deleteDirectory: (state, action) => {
            const { id, dirName } = action.payload
            state.directories = state.directories.filter(dir => dir.id !== id)
            console.log(dirName);

            state.tasks = state.tasks.filter(task => task.directory !== dirName)


        }

    }
})
export const { addData, toggleCompleted, toggleImportant, addDirectories, deleteTask, addTask, editTask, editDirectory, deleteDirectory } = taskSlice.actions
export default taskSlice.reducer