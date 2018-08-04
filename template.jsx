export default ({ markup, helmet }) => {
    return `
    <!doctype html>
        <html>
            <head>
            ${helmet.title.toString()}
            ${helmet.meta.toString()}
            ${helmet.link.toString()}
            </head>
        <body ${helmet.bodyAttributes.toString()}>
	        <div id="root">${markup}</div>
	        <script src="/static/client.js" async></script>
        </body>
    </html>
    `
}