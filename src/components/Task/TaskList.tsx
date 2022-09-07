import React from "react";
import Task from "./Task";
import PropTypes from "prop-types";

type Props = {
  loading: boolean;
  onPinTask: any;
  onArchiveTask: any;
  tasks: object[];
};

export default function TaskList({
  loading,
  tasks,
  onPinTask,
  onArchiveTask,
}: Props) {
  const events = {
    onPinTask,
    onArchiveTask,
  };

  const LoadingRow = (
    <div className="loading-item">
      <span className="glow-checkbox" />
      <span className="glow-text">
        <span>Loading</span> <span>cool</span> <span>state</span>
      </span>
    </div>
  );
  //加载时的状态
  if (loading) {
    return (
      <div className="list-items">
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
      </div>
    );
  }
  //task为0时的状态
  if (tasks.length === 0) {
    return (
      <div className="list-items">
        <div className="wrapper-message">
          <span className="icon-check" />
          <div className="title-message">You have no tasks</div>
          <div className="subtitle-message">Sit back and relax</div>
        </div>
      </div>
    );
  }

  const tasksInOrder = [
    ...tasks.filter((t: any) => t.state === "TASK_PINNED"),
    ...tasks.filter((t: any) => t.state !== "TASK_PINNED"),
  ];

  return (
    <div className="list-items">
      {tasks.map((task: any) => (
        <Task key={task.id} task={task} {...events} />
      ))}
    </div>
  );
}
