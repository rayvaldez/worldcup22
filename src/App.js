import Header from "./Header";
import Rules from "./Rules";
import UserTable from "./UserTable";
import FixturesToday from "./FixturesToday";
import { Container, Box } from "@mui/material";

function App() {
  return (
    <Box sx={{ backgroundColor: "#f5f5f5" }}>
      <Header />
      <Container>
        <Rules />
        <FixturesToday />
        <UserTable />
      </Container>
    </Box>
  );
}

export default App;
