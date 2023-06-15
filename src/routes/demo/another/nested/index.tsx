import type { RequestHandler } from "@builder.io/qwik-city";

export const onRequest: RequestHandler<void> = async (onRequestArgs) => {
  const { redirect, url } = onRequestArgs;

  throw redirect(303, `${url.pathname}/route`);
};
