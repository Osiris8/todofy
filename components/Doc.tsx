export default function Doc() {
  return (
    <div className="container mx-auto px-4 mt-4">
      {/* Presentation*/}
      <div className="collapse bg-base-100 border border-base-300 mb-2 mt-2">
        <input type="radio" name="my-accordion-1" defaultChecked />
        <div className="collapse-title font-semibold">Use your API Client</div>
        <div className="collapse-content text-sm">
          <p>
            Use Postman or your favorite API Client{" "}
            <ul className="list-disc ml-8">
              <li>
                {" "}
                <a
                  href="https://hoppscotch.io/"
                  className="link link-primary"
                  target="_blank"
                >
                  https://hoppscotch.io/
                </a>
              </li>
              <li>
                {" "}
                <a
                  href="https://insomnia.rest/"
                  className="link link-primary"
                  target="_blank"
                >
                  https://insomnia.rest/
                </a>
              </li>
            </ul>
          </p>
        </div>
      </div>

      {/* Create todo List */}
      <div className="collapse bg-base-100 border border-base-300 mb-2 mt-2">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title font-semibold">Create Todo List</div>
        <div className="collapse-content text-sm">
          <p>
            Send request
            <ul className="list-disc ml-8">
              <li>Method : POST</li>
              <li>
                Url :{" "}
                <a
                  href="https://insomnia.rest/"
                  className="link link-primary"
                  target="_blank"
                >
                  https://insomnia.rest/
                </a>
              </li>
              <li>
                Parameter JSON example :{" "}
                <div className="mockup-code w-full mt-4">
                  <pre>
                    <code>
                      {"{"} "text": "Hello World" {"}"}
                    </code>
                  </pre>
                </div>
              </li>
            </ul>
          </p>
        </div>
      </div>

      {/* Read todo List */}
      <div className="collapse bg-base-100 border border-base-300 mb-2 mt-2">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title font-semibold">Read Todo List</div>
        <div className="collapse-content text-sm">
          <p>
            Send request
            <ul className="list-disc ml-8">
              <li>Method : GET</li>
              <li>
                Url :{" "}
                <a
                  href="https://insomnia.rest/"
                  className="link link-primary"
                  target="_blank"
                >
                  https://insomnia.rest/
                </a>
              </li>
            </ul>
          </p>
        </div>
      </div>

      {/* Update todo List */}
      <div className="collapse bg-base-100 border border-base-300 mb-2 mt-2">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title font-semibold">Update Todo List</div>
        <div className="collapse-content text-sm">
          <p>
            After to make GET, Send request using your todo list ID
            <ul className="list-disc ml-8">
              <li>Method : PATCH</li>
              <li>
                Url :{" "}
                <a
                  href="https://insomnia.rest/"
                  className="link link-primary"
                  target="_blank"
                >
                  https://insomnia.rest/your-todo-list-id
                </a>
              </li>
              <li>
                Parameter JSON example :{" "}
                <div className="mockup-code w-full mt-4">
                  <pre>
                    <code>
                      {"{"} "text": "Update my todo list with my todo list ID"{" "}
                      {"}"}
                    </code>
                  </pre>
                </div>
              </li>
            </ul>
          </p>
        </div>
      </div>

      {/* Validate todo : toogle TODO*/}
      <div className="collapse bg-base-100 border border-base-300 mb-2 mt-2">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title font-semibold">Toogle Todo List</div>
        <div className="collapse-content text-sm">
          <p>
            Send request using your todo list ID
            <ul className="list-disc ml-8">
              <li>Method : PATCH</li>
              <li>
                Url :{" "}
                <a
                  href="https://insomnia.rest/"
                  className="link link-primary"
                  target="_blank"
                >
                  https://insomnia.rest/your-todo-list-id
                </a>
              </li>
            </ul>
          </p>
        </div>
      </div>
      {/*Delete todo List*/}
      <div className="collapse bg-base-100 border border-base-300 mb-2 mt-2">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title font-semibold">DELETE Todo List</div>
        <div className="collapse-content text-sm">
          <p>
            Send request using your todo list ID
            <ul className="list-disc ml-8">
              <li>Method : DELETE</li>
              <li>
                Url :{" "}
                <a
                  href="https://insomnia.rest/"
                  className="link link-primary"
                  target="_blank"
                >
                  https://insomnia.rest/your-todo-list-id
                </a>
              </li>
            </ul>
          </p>
        </div>
      </div>
    </div>
  );
}
