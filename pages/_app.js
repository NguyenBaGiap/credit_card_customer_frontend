import { Provider } from 'react-redux'
import { configureStore } from 'redux/store/configureStore'
import AppContainer from 'redux/AppContainer'
import 'bootstrap/dist/css/bootstrap.min.css'

const store = configureStore()

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <AppContainer>
        <Component {...pageProps} />
      </AppContainer>
    </Provider>
  )
}

export default MyApp
