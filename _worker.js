export default {
  async fetch(request, env) {
    let url = new URL(request.url);
    if (url.pathname.startsWith('/9d37fbdd-e7a7-42b0-a53f-14eff5179870')) {
      url.hostname = 'eu-trojan.jjyut.repl.co'
      let new_request = new Request(url, request);
      return fetch(new_request);
    }
    return env.ASSETS.fetch(request);
  },
};
