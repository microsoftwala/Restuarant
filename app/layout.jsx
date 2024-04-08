import '@styles/globals.css';
import '@styles/cart.css';
import '@styles/button.css';
import '@styles/pop.css';

import Provider from '@components/Provider';
import ProtectedRoute from '@components/ProtectedRoute';

export const metadata={
    title:"Menu App",
    description:"Ordering Made Easier"
}


const RootLayout = ({children}) => {
    return (
      <html lang="en">
      
          <body>
            <ProtectedRoute>
            <Provider>
            
              <div className='main'>
                  <div className='gradient'/>
              </div>
              <main className='app'>
                
                  {children}
              </main>
              </Provider>
              </ProtectedRoute>
          </body>
      </html>
    )
  }
  
  export default RootLayout