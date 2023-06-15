import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Link, useNavigate } from "@builder.io/qwik-city";

export default component$(() => {
  const navigate = useNavigate();
  return (
    <>
      <ul>
        <li>
          <Link href="/broken">
            go to <code>/broken</code>
          </Link>
        </li>
        <li>
          <button onClick$={() => navigate("/broken")}>
            go to <code>/broken</code> (button)
          </button>
        </li>
        <li>
          <Link href="/working">
            go to <code>/working</code>
          </Link>
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
