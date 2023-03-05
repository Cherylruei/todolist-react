import TodoItem from './TodoItem';

const TodoCollection = ({
  todos,
  onSave,
  onDelete,
  onToggleDone,
  onChangeMode,
}) => {
  return (
    <div>
      {todos.map((todo) => {
        return (
          <TodoItem
            key={todo.id}
            todo={todo}
            // 拿到 todo item 的 id, 並在把 onToggleDone event 所帶的 id 往上傳
            onToggleDone={(id) => onToggleDone?.(id)}
          />
        );
      })}
    </div>
  );
};

export default TodoCollection;
