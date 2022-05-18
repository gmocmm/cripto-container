import React, { Fragment,useRef, useEffect,useState  } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

import ErrorFallback from '../../components/ErrorFallback';

const CriptosNews = React.lazy(() => import('NEWSCRIPTOS/CriptosNews'));
const CriptosList = React.lazy(() => import('CRIPTOS/CriptosList'));
// const AngularApp = React.lazy(() => import('angularTest/angularTest'));

// import AngularApp from 'angularTest/angularTest';
import { mount } from 'helloVue/HelloVueApp'




import {AppBar, CardMedia, Typography, Button, IconButton, Grid,
  Card, CardActions, CardContent   
} from '@mui/material';


// export default function News () {
//   return (
//     <Fragment>
//       <React.Suspense fallback='Loading ...'>
//         <ErrorBoundary
//           FallbackComponent={ErrorFallback}
//           onReset={() => {}}
//         >
//           <CriptosNews items="BTC" apiKeyNumber={1} />
//         </ErrorBoundary>
//       </React.Suspense>
//     </Fragment>
//   );
// }


export default () => {

  // const [isModalDisplayed, setModalDisplayed] = useState(false);
  // const [ModalComponent, setModalComponent] = useState(null);

  // const loadModalComponent = async () => {
  //   const loadResult = await import('angularTest/angularTest');
  //   setModalComponent(() => loadResult.default);
  // };


  const ref = useRef(null);

  useEffect(() => {
      mount(ref.current)
  }, [])


  return <>
    
      
        {/* {isModalDisplayed && ModalComponent ? <ModalComponent /> : null}
        <button onClick={() => {
          setModalDisplayed(true);
          loadModalComponent();
        }} /> */}
     

      <Grid container spacing={1} style={{ marginTop: '1rem'}}>
        <Grid item xs={1} sm={1} md={1} xl={1}  >
          
        </Grid>
        <Grid item xs={10} sm={10} md={10} xl={10} style={{padding: '5px'}}>
          <div ref={ref} />
        </Grid>
        <Grid item xs={1} sm={1} md={1} xl={1} >
          
        </Grid>
        
      </Grid>
      <Grid container spacing={1} style={{ marginTop: '2rem', possition: 'absolute', buttom: '0px'}}>
        <Grid item xs={1} sm={1} md={1} xl={1}  >
          
        </Grid>

        <Grid item xs={10} sm={10} md={10} xl={10} style={{padding: '5px'}}>

          <React.Suspense fallback='Loading ...'>
            <ErrorBoundary
              FallbackComponent={ErrorFallback}
              onReset={() => {}}
            >
              <CriptosNews items="BTC" apiKeyNumber={2} />
              {/* <CriptosList history={ history } /> */}

              {/* <AngularApp/> */}
            </ErrorBoundary>
          </React.Suspense>

        </Grid>
        <Grid item xs={1} sm={1} md={1} xl={1} >
          
        </Grid>
        
      </Grid>
      
    </>

}
