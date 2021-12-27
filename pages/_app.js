import { Provider } from 'react-redux'
import { configureStore } from 'redux/store/configureStore'
import 'bootstrap/dist/css/bootstrap.min.css'

const store = configureStore()

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
