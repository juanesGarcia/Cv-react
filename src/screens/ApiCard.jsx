import React from 'react'

export const ApiCard = ({task}) => {
  return (
    <>
    <tr key={task.id}>
                  <th scope={task.id}>{task.id}</th>
                  <td >
                    {(task.title)}</td>
                  <th>{task.completed ? "✅" : "❌"}</th>
                </tr>
    </>
  )
}
