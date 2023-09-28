import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { StoreProvider } from './redux/store.jsx'
import { AdminProvider } from './redux/admin.jsx'
import { FiltersProvider } from './redux/filters.jsx'
import { CarritoProvider } from './redux/carritoContext.jsx'
import { LoadingProvider } from './redux/loading.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
    <StoreProvider>
        <AdminProvider>
            <FiltersProvider>
                <CarritoProvider>
                    <LoadingProvider>
                        <App />
                    </LoadingProvider>
                </CarritoProvider>
            </FiltersProvider>
        </AdminProvider>
    </StoreProvider>


)
