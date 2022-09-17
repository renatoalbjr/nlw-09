import { StyleSheet } from "react-native";
import { THEME } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 292,
    width: 180,
    padding: 20,
    flexDirection: "column",
    backgroundColor: THEME.COLORS.SHAPE,
    borderRadius: 8,
    marginRight: 16,
  },
  heading: {
    flex: 1,
    flexDirection: "column",
    marginBottom: 16,
  },
  label: {
    color: THEME.COLORS.CAPTION_AD,
    fontSize: THEME.FONT_SIZE.SM,
  },
  info: {
    marginTop: 4,
    color: THEME.COLORS.TEXT,
    fontFamily: THEME.FONT_FAMILY.BOLD,
    fontSize: THEME.FONT_SIZE.SM,
  },
  audioTrue: {
    color: THEME.COLORS.SUCCESS,
    fontFamily: THEME.FONT_FAMILY.BOLD,
    fontSize: THEME.FONT_SIZE.SM,
  },
  audioFalse: {
    color: THEME.COLORS.ALERT,
    fontFamily: THEME.FONT_FAMILY.BOLD,
    fontSize: THEME.FONT_SIZE.SM,
  },
  button: {
    backgroundColor: THEME.COLORS.PRIMARY,
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 6,
    paddingHorizontal: 25,
    paddingVertical: 8,
  },
  buttonContent: {
    marginLeft: 8,
    color: THEME.COLORS.TEXT,
    fontFamily: THEME.FONT_FAMILY.SEMI_BOLD,
    fontSize: THEME.FONT_SIZE.SM,
  },
});
