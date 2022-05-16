import React, { Fragment,useRef, useEffect  } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

import ErrorFallback from '../../components/ErrorFallback';

// const CriptosNews = React.lazy(() => import('NEWSCRIPTOS/CriptosNews'));

// const HelloVue = React.lazy(() => import('helloVue/HelloVueApp'));
import { mount } from 'helloVue/HelloVueApp'

// export default function News () {
//   return (
//     <Fragment>
//       <React.Suspense fallback='Loading ...'>
//         <ErrorBoundary
//           FallbackComponent={ErrorFallback}
//           onReset={() => {}}
//         >
//         <CriptosNews items="BTC" apiKeyNumber={1} />
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

    return <div ref={ref} />
}
