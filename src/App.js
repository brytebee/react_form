import { Button } from "@mui/material";

const App = () => {
  return (
    <div className="App">
      <Button variant="contained" style={{ alignSelf: "center" }}>
        Sign Up
      </Button>

      <Button variant="contained" color="secondary">
        Sign In
      </Button>
    </div>
  );
};

export default App;
