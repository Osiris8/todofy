export default function Introduction() {
  return (
    <div className="collapse bg-base-100 border border-base-300">
      <input type="radio" name="my-accordion-1" defaultChecked />
      <div className="collapse-title font-semibold">Use your API Client</div>
      <div className="collapse-content text-sm">
        <p>Use Postman or your favorite API Client</p>
        <ul className="list-disc ml-8">
          <li>
            <a
              href="https://hoppscotch.io/"
              className="link link-primary"
              target="_blank"
            >
              https://hoppscotch.io/
            </a>
          </li>
          <li>
            <a
              href="https://insomnia.rest/"
              className="link link-primary"
              target="_blank"
            >
              https://insomnia.rest/
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
