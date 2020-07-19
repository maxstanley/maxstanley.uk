import { createMuiTheme } from "@material-ui/core/styles";

export default createMuiTheme({
  overrides: {
    MuiDrawer: {
      paper: {
        justifyContent: "space-between",
      },
    },
  },
});
