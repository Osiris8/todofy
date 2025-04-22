export default function DeleteTodo() {
  return (
    <div className="collapse bg-base-100 border border-base-300">
      <input type="radio" name="my-accordion-1" defaultChecked />
      <div className="collapse-title font-semibold text-red-500">
        DELETE Todo List
      </div>
      <div className="collapse-content text-sm">
        <p>Send request using your todo list ID</p>
        <ul className="list-disc ml-8">
          <li>METHOD : DELETE</li>
          <li>
            <a
              href="https://todofy-omega.vercel.app/api/todo/your-todo-list-id"
              className="link link-primary"
              target="_blank"
            >
              https://todofy-omega.vercel.app/api/todo/your-todo-list-id
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
