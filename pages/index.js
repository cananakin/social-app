import Head from 'next/head';

// Components
import Header from '../components/Header/Header';
import Sidebar from '../components/Sidebar/Sidebar';
import Feed from '../components/Feed/Feed';
import Widgets from '../components/Widgets/Widgets';
import Grid from '@material-ui/core/Grid';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {/** Header **/}
        <Header />
        
        <div className="app__body">
          <Grid container spacing={3} style={{margin: 0}}>
            <Sidebar />
            <Feed />
            <Widgets />
          </Grid>
        </div>
        {/** App Body */}
          {/** 
           * Sidebar
           * Feed
           * Widgets
           */}
      </main>

      

     <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
        body {
          background-color: #191A1A;
        }
        .app__body {
          flexGrow: 1;
          display: flex;
          
        }
      `}</style>
      <script src="https://www.gstatic.com/firebasejs/7.21.0/firebase-app.js"></script>

      <script src="https://www.gstatic.com/firebasejs/7.21.0/firebase-analytics.js"></script>

    </div>
  )
}
