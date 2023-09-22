const React = require('react');
const ReactDOMServer = require('react-dom/server');

function renderComponentFn(component, props, { doctype = true } = {}) {
  const reactElement = React.createElement(component, {
    ...this.app.locals,
    // отсюда в объект попадёт ключ user (мы положили его в res.locals  в мидлваркe getUser)
    // this - это res (так как renderComponentMethod - это метод объекта res)
    ...this.locals,
    // передаётся из роута
    ...props,
  });

  const html = ReactDOMServer.renderToStaticMarkup(reactElement);

  return doctype ? `<!DOCTYPE html>${html}` : html;
}

function ssr(req, res, next) {
  res.renderComponent = renderComponentFn;
  next();
}

module.exports = ssr;
