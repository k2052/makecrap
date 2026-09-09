import React from "react";
import styleSheetUrl from "@/styles/style.css?url";

export const Document: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => (
  <html lang="en">
    <head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <title>Make Crap. Now not later</title>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin=""
      />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Arvo:400,400i,700,700i&display=swap"
      />
      <link rel="stylesheet" href={styleSheetUrl} />
      <link rel="icon" href="/favicon.ico" />
      <link rel="modulepreload" href="/src/client.tsx" />
    </head>
    <body>
      {children}
      <script>import("/src/client.tsx")</script>
    </body>
  </html>
);
