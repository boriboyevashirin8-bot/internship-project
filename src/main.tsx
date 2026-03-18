import "material-symbols/outlined.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { BrowserRouter } from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  HttpLink,
  ApolloLink,
} from "@apollo/client";
import { ApolloProvider } from "@apollo/client/react";
import { store, persistor } from "./store";
import "./index.css";
import App from "./App";
import Spinner from "./components/atoms/Spinner";

// Har so'rovga JWT token qo'shadi
const authLink = new ApolloLink((operation, forward) => {
  const token = store.getState().auth.user?.token;
  if (token) {
    operation.setContext({
      headers: { Authorization: `Bearer ${token}` },
    });
  }
  return forward(operation);
});

const client = new ApolloClient({
  link: authLink.concat(new HttpLink({ uri: "/graphql" })),
  cache: new InMemoryCache(),
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ApolloProvider client={client}>
      <Provider store={store}>
        <PersistGate
          loading={
            <div className="min-h-screen bg-background-light flex items-center justify-center">
              <Spinner size="lg" color="primary" />
            </div>
          }
          persistor={persistor}
        >
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </PersistGate>
      </Provider>
    </ApolloProvider>
  </StrictMode>,
);
