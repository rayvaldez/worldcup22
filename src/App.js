import Header from "./Header";
import Rules from "./Rules";
import UserTable from "./UserTable";
import { Container, Box } from "@mui/material";

function App() {
  return (
    <Box sx={{ backgroundColor: "#f5f5f5" }}>
      <Header />
      <Container>
        <Rules />
        <UserTable />
      </Container>
    </Box>
  );
}

export default App;
