import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

export default component$(() => (
  <div>
    test
    <Link href="/demo/another/nested">
      go to /another/nested which redirects to /another/nested/route
    </Link>
  </div>
));
