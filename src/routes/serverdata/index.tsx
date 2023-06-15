import { component$, useServerData } from "@builder.io/qwik";
import { SERVER_DATA } from "~/entry.ssr";

export default component$(() => {
  const serverData = useServerData(SERVER_DATA);

  return (
    <div>
      welcome to <code>/serverdata</code>
      <h4>expected server data:</h4>
      <pre>
        {JSON.stringify(
          {
            test: "value",
          },
          null,
          2
        )}
      </pre>
      <h4>actualt server data:</h4>
      <pre>{JSON.stringify(serverData, null, 2)}</pre>
    </div>
  );
});
