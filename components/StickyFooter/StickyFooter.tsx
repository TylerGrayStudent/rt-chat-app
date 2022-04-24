import { Box, Container, CssBaseline, Typography } from "@mui/material";
import Link from "next/link";

const Copyright: React.FC = () => {
  return (
    <Typography variant="body2" color="text.secondary">
      {"Copyright © "}
      <Link href="https://github.com/tylergraystudent">
        Tyler Gray Dev
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
};

const StickyFooter: React.FC = () => {
  return (
    <>
      <div className="grow-0">
        <CssBaseline />
        <Box
          component="footer"
          sx={{
            py: 3,
            px: 2,
            mt: "auto",
            backgroundColor: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.grey[200]
                : theme.palette.grey[800],
          }}
          className="fixed bottom-0 left-0 right-0"
        >
          <Container maxWidth="sm">
            <Copyright />
          </Container>
        </Box>
      </div>
    </>
  );
};

export default StickyFooter;
