export default function ReadTodo() {
  return (
    <div className="collapse bg-base-100 border border-base-300">
      <input type="radio" name="my-accordion-1" defaultChecked />
      <div className="collapse-title font-semibold text-green-500">
        Read Todo List
      </div>
      <div className="collapse-content text-sm">
        <p>Send request</p>
        <ul className="list-disc ml-8">
          <li>METHOD : GET</li>
          <li>
            Url :
            <a
              href="https://todofy-omega.vercel.app/api/todo"
              className="link link-primary"
              target="_blank"
            >
              https://todofy-omega.vercel.app/api/todo
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
