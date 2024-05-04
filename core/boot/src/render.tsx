import React from 'react'
import { ConfigProvider } from 'antd'
import ReactDOM from 'react-dom/client'
import { RouterProvider, router } from '@slicesoft-core/router'
import { store } from '@slicesoft-core/store'
import { Provider } from '@slicesoft-core/redux'

export const render = () => {
  const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
  return root.render(
    <React.StrictMode>
      <Provider store={store}>
        <ConfigProvider theme={{ token: { colorPrimary: '#00b96b' } }}>
          <RouterProvider router={router} />
        </ConfigProvider>
      </Provider>
    </React.StrictMode>,
  )
}
