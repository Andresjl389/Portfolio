import React from "react";
import { HeaderComponent } from "./ui/components";
import AppRouter from "./domain/router/Router";

const App: React.FC = () => {
  return (
    <>
      <AppRouter />
    </>
  );
};

export default App;
