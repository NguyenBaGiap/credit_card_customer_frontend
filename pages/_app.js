import { Provider } from 'react-redux'
import { configureStore } from 'redux/store/configureStore'
import AppContainer from 'redux/AppContainer'
import { ConnectedRouter } from 'connected-next-router'
import 'bootstrap/dist/css/bootstrap.min.css'

const store = configureStore()

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <ConnectedRouter>
        <AppContainer>
          <Component {...pageProps} />
        </AppContainer>
      </ConnectedRouter>
    </Provider>
  )
}

export default MyApp
