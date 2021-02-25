import Document,{Html, Head, Main, NextScript} from 'next/document';
export default class MyDocument extends Document{
    render(){
        return (
            <Html>
                <Head>
                    <link rel="preconnect" href="https://gstatic.google.com" />
                    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Rajdhani:wght@600&display=swap" rel="stylesheet"/> 
                    <title>Moveit Next</title>
                </Head>

                <body>
                    <Main/>
                    <NextScript/>
                </body>
                
            </Html>
        )
    }
}