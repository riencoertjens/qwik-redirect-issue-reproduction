import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

export default component$(() => (
  <div>
    <Link href="/demo/broken/nested">
      go to <code>/broken/nested</code>
    </Link>
    <p>
      this should redirect to <code>/demo/broken/nested/route</code>, but
      instead ends up at <code>/demo/broken/nested/q-data.json/route</code>
    </p>
    <p>
      manually navigating to <code>/demo/broken/nested/route</code> works as
      expected
    </p>
    <Link href="/demo/working/nested">
      go to <code>/working/nested</code>
    </Link>
    <p>
      this redirects to <code>/demo/working/nested/route</code>, as expected
    </p>
  </div>
));
