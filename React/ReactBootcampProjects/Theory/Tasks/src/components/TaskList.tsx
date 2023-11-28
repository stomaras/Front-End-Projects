import React from 'react'
import { TaskState } from '../reducer/reducers'
import { ITask } from '../models/models';

export interface TaskListProps {
    tasks:any[]
}

const TaskList = (props:TaskListProps) => {

    const {tasks} = props;

  return (
    <div>
        {
            tasks.map((task) => {
                return (
                    <div>
                        {task.text}
                    </div>
                )
            })
        }
    </div>
  )
}

export default TaskList