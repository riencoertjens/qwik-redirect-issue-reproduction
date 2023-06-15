import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Link, useNavigate } from "@builder.io/qwik-city";

export default component$(() => {
  const navigate = useNavigate();
  return (
    <>
      <ul>
        <li>
          <Link href="/serverdata">
            go to <code>/serverdata</code> using{" "}
            <code>{'<Link href="/serverdata"/>'}</code>
          </Link>
        </li>
        <li>
          <button onClick$={() => navigate("/serverdata")}>
            go to <code>/serverdata</code> using{" "}
            <code>{'<button onClick$={() => navigate("/serverdata")}>'}</code>
          </button>
        </li>
        <li>
          <a href="/serverdata">
            go to <code>/serverdata</code> using{" "}
            <code>{'<a href="/serverdata"/>'}</code>
          </a>
        </li>
      </ul>
    </>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
