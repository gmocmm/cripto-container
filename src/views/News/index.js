import React, { Fragment,useRef, useEffect  } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

import ErrorFallback from '../../components/ErrorFallback';

const CriptosNews = React.lazy(() => import('NEWSCRIPTOS/CriptosNews'));
const CriptosList = React.lazy(() => import('CRIPTOS/CriptosList'));
const AngularApp = React.lazy(() => import('angularTest/angularTest'));

// import AngularApp from 'angularTest/angularTest';


import { mount } from 'helloVue/HelloVueApp'

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

  const ref = useRef(null);

  useEffect(() => {
      mount(ref.current)
  }, [])


  return <>
    
        <div ref={ref} />
      
      
        <ErrorBoundary
          FallbackComponent={ErrorFallback}
          onReset={() => {}}
        >
          {/* <CriptosNews items="BTC" apiKeyNumber={1} /> */}
          {/* <CriptosList history={ history } /> */}

          <AngularApp/>
        </ErrorBoundary>
    </>

}
