export default function ToggleTodo() {
  return (
    <div className="collapse bg-base-100 border border-base-300">
      <input type="radio" name="my-accordion-1" defaultChecked />
      <div className="collapse-title font-semibold">Toggle Todo List</div>
      <div className="collapse-content text-sm">
        <p>Send request using your todo list ID</p>
        <ul className="list-disc ml-8">
          <li>METHOD : PATCH</li>
          <li>
            <a
              href="https://todofy-omega.vercel.app/api/todo/toggle/your-todo-list-ID"
              className="link link-primary"
              target="_blank"
            >
              https://todofy-omega.vercel.app/api/todo/toggle/your-todo-list-ID
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
