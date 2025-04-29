    // app/layout.js
    import './global.css'
    export default function RootLayout({ children }) {
        return (
          <html lang="en">
            <head>
                <title>Basket of Bananas</title>
                <link rel="icon" type="image/x-icon" href="/icon.png"></link>
            </head>
            <body>
                <nav>
                    <ul>
                        <li><img src="/icon.png"></img></li>
                        <li><a href="/">Home</a></li>
                        <li><a href="/about">About</a></li>
                    </ul>
                </nav>
                {children}
            </body>
          </html>
        );
      }