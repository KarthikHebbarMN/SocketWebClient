import Document, {Html, Head, Main, NextScript} from 'next/document'


class MainDocument extends Document{
    render(){
        return(
            <Html lang="en">
              <Head>
             
               <meta httpEquiv="Content-Type" content="text/html; charset=utf-8"/>
              </Head>
              <body>
              <Main/>
              <NextScript />
              </body>
         
            </Html>

        );
    }
}

export default MainDocument;