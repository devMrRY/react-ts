// global error handles errors at root level like layout.js
"use client";

export default function GlobalError({
  error,
  reset,
}) {
  return (
    <html>
      <body>
        <h2>Something went wrong!</h2>
        <button onClick={() => reset()}>Try again</button>
      </body>
    </html>
  );
}
