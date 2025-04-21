export default function CreateTodo() {
  return (
    <div className="collapse bg-base-100 border border-base-300">
      <input type="radio" name="my-accordion-1" defaultChecked />
      <div className="collapse-title font-semibold">Create Todo List</div>
      <div className="collapse-content text-sm">
        <p>Send request</p>
        <ul className="list-disc ml-8">
          <li>Method : POST</li>
          <li>
            Url :{" "}
            <a
              href="https://todofy-omega.vercel.app/api/todo"
              className="link link-primary"
              target="_blank"
            >
              https://todofy-omega.vercel.app/api/todo
            </a>
          </li>
          <li>
            Parameter JSON example :
            <div className="mockup-code w-full">
              <pre data-prefix="$">
                <code>
                  {"{"} &quot;text&quot;: &quot;Hello World&quot; {"}"}
                </code>
              </pre>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
