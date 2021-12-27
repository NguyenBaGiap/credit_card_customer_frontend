import React from 'react'
import ReduxToastr from 'react-redux-toastr'
import AppHeader from 'uies/components/_header/AppHeader'
import AppFooter from 'uies/components/_footer/AppFooter'
import Loading from 'uies/components/_loading/Loading'
import AOS from 'aos'

function AppContainer(props) {
  const { children, requestStatus } = props
  React.useEffect(() => {
    AOS.init({
      easing: 'ease',
      duration: 1000,
      delay: 200,
    })
    window.onload = function () {
      AOS.refresh()
    }
  }, [])
  return (
    <React.Fragment>
      <section className="app-header-section">
        <AppHeader />
      </section>
      <section className="app-content-section">{children}</section>
      <section className="app-footer-section">
        <AppFooter />
      </section>
      <section className="app-loading-section">
        <Loading visible={requestStatus?.isLoading} />
      </section>
      <section className="app-notification-section">
        <ReduxToastr
          timeOut={5000}
          newestOnTop={false}
          preventDuplicates
          position="top-right"
          getState={(state) => state.toastReducer} // This is the default
          transitionIn="fadeIn"
          transitionOut="fadeOut"
        />
      </section>
    </React.Fragment>
  )
}

export default AppContainer
