import { component$ } from "@builder.io/qwik";
import type { RequestHandler } from "@builder.io/qwik-city";

export const onRequest: RequestHandler<void> = async (onRequestArgs) => {
  const { redirect, url } = onRequestArgs;

  throw redirect(303, `${url.pathname}/route`);
};

// comment to make redirect break
export default component$(() => (
  <div>
    welcome to <code>/working/nested</code>
  </div>
));
