import CreateTodo from "./docs/CreateTodo";
import DeleteTodo from "./docs/DeleteTodo";
import Introduction from "./docs/Introduction";
import ReadTodo from "./docs/ReadTodo";
import ToggleTodo from "./docs/ToggleTodo";
import UpdateTodo from "./docs/UpdateTodo";

export default function Doc() {
  return (
    <div className="container mx-auto px-4 mt-4">
      <Introduction />
      <CreateTodo />
      <ReadTodo />
      <UpdateTodo />
      <ToggleTodo />
      <DeleteTodo />
    </div>
  );
}
