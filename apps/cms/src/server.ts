import http from 'node:http';

const port = Number(process.env.PORT ?? 1337);

const server = http.createServer((_request, response) => {
  response.writeHead(200, { 'Content-Type': 'application/json' });
  response.end(
    JSON.stringify({
      status: 'ok',
      service: 'cms',
      note: 'Strapi scaffold — Phase 2',
    }),
  );
});

server.listen(port, () => {
  console.log(`CMS stub listening on http://localhost:${port}`);
});
