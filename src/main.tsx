import { createRoot } from "react-dom/client"
import App from "./App"
import FloorsCtxProvier from "./context/Floors/Provider"
import ThemeCtxProvider from "./context/Theme/Provider"
import UserCtxProvider from "./context/User/Provider"
import "./index.css"

createRoot(document.getElementById("root")!).render(
  <ThemeCtxProvider>
    <UserCtxProvider>
      <FloorsCtxProvier>
        <App />
      </FloorsCtxProvier>
    </UserCtxProvider>
  </ThemeCtxProvider>
)
