export default function UpdateTodo() {
  return (
    <div className="collapse bg-base-100 border border-base-300">
      <input type="radio" name="my-accordion-1" defaultChecked />
      <div className="collapse-title font-semibold text-violet-500">
        Update Todo List
      </div>
      <div className="collapse-content text-sm">
        <p>After to make GET, Send request using your todo list ID</p>
        <ul className="list-disc ml-8">
          <li>Method : PATCH</li>
          <li>
            Url :{" "}
            <a
              href="https://todofy-omega.vercel.app/api/todo/your-todo-list-id"
              className="link link-primary"
              target="_blank"
            >
              https://todofy-omega.vercel.app/api/todo/your-todo-list-id
            </a>
          </li>
          <li>
            Parameter JSON example :
            <div className="mockup-code w-full">
              <pre data-prefix="$">
                <code>
                  {"{"} &quot;text&quot;: &quot;Update my todo list with my todo
                  list ID&quot; {"}"}
                </code>
              </pre>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
