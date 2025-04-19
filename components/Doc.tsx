export default function Doc() {
  return (
    <div className="container mx-auto px-4 mt-4">
      <div className="collapse bg-base-100 border border-base-300">
        <input type="radio" name="my-accordion-1" defaultChecked />
        <div className="collapse-title font-semibold">Use your API Client</div>
        <div className="collapse-content text-sm">
          <p>Use Postman or your favorite API Client</p>
          <ul className="list-disc ml-8">
            <li>
              <a href="https://hoppscotch.io/" className="link link-primary">
                https://hoppscotch.io/
              </a>
            </li>
            <li>
              <a href="https://hoppscotch.io/" className="link link-primary">
                https://insomnia.rest/
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="collapse bg-base-100 border border-base-300">
        <input type="radio" name="my-accordion-1" defaultChecked />
        <div className="collapse-title font-semibold">Create Todo List</div>
        <div className="collapse-content text-sm">
          <p>Send request</p>
          <ul className="list-disc ml-8">
            <li>Method : POST</li>
            <li>
              Url :{" "}
              <a href="https://insomnia.rest/" className="link link-primary">
                https://insomnia.rest/
              </a>
            </li>
            <li>
              Parameter JSON example :
              <div className="mockup-code w-full">
                <pre data-prefix="$">
                  <code>
                    {"{"} "text": "Hello World" {"}"}
                  </code>
                </pre>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="collapse bg-base-100 border border-base-300">
        <input type="radio" name="my-accordion-1" defaultChecked />
        <div className="collapse-title font-semibold">Read Todo List</div>
        <div className="collapse-content text-sm">
          <p>Send request</p>
          <ul className="list-disc ml-8">
            <li>METHOD : GET</li>
            <li>
              Url :
              <a href="https://hoppscotch.io/" className="link link-primary">
                https://insomnia.rest/
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="collapse bg-base-100 border border-base-300">
        <input type="radio" name="my-accordion-1" defaultChecked />
        <div className="collapse-title font-semibold">Update Todo List</div>
        <div className="collapse-content text-sm">
          <p>After to make GET, Send request using your todo list ID</p>
          <ul className="list-disc ml-8">
            <li>Method : PATCH</li>
            <li>
              Url :{" "}
              <a href="https://insomnia.rest/" className="link link-primary">
                https://insomnia.rest/your-todo-list-id
              </a>
            </li>
            <li>
              Parameter JSON example :
              <div className="mockup-code w-full">
                <pre data-prefix="$">
                  <code>
                    {"{"} "text": "Update my todo list with my todo list ID"{" "}
                    {"}"}
                  </code>
                </pre>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="collapse bg-base-100 border border-base-300">
        <input type="radio" name="my-accordion-1" defaultChecked />
        <div className="collapse-title font-semibold">Toggle Todo List</div>
        <div className="collapse-content text-sm">
          <p>Send request using your todo list ID</p>
          <ul className="list-disc ml-8">
            <li>METHOD : PATCH</li>
            <li>
              <a
                href=" https://insomnia.rest/your-todo-list-id"
                className="link link-primary"
              >
                https://insomnia.rest/your-todo-list-id
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="collapse bg-base-100 border border-base-300">
        <input type="radio" name="my-accordion-1" defaultChecked />
        <div className="collapse-title font-semibold">DELETE Todo List</div>
        <div className="collapse-content text-sm">
          <p>Send request using your todo list ID</p>
          <ul className="list-disc ml-8">
            <li>METHOD : DELETE</li>
            <li>
              <a
                href=" https://insomnia.rest/your-todo-list-id"
                className="link link-primary"
              >
                https://insomnia.rest/your-todo-list-id
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
