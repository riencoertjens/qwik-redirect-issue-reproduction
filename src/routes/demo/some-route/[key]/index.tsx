import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

export default component$(() => (
  <div>
    <Link href="/demo/broken">
      go to <code>/broken</code>
    </Link>
    <p>
      this should redirect to <code>/demo/broken/route</code>, but instead ends
      up at <code>/demo/broken/q-data.json/route</code>
    </p>
    <p>
      manually navigating to <code>/demo/broken/route</code> works as expected
    </p>
    <Link href="/demo/working">
      go to <code>/working</code>
    </Link>
    <p>
      this redirects to <code>/demo/working/route</code>, as expected
    </p>
  </div>
));
