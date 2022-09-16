import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: THEME.COLORS.OVERLAY,
  },
  content: {
    backgroundColor: THEME.COLORS.SHAPE,
    height: 322,
    width: 311,
    flexDirection: 'column',
    alignItems: 'center',
    borderRadius: 8,
    paddingHorizontal: 40,
    paddingTop: 32,
  },
  footer: {
    marginBottom: 32,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  add: {
    color: THEME.COLORS.TEXT,
    fontSize: THEME.FONT_SIZE.MD,
    fontFamily: THEME.FONT_FAMILY.SEMI_BOLD,
    marginBottom: 8,
  },
  discordContainer:{
    minWidth: '100%',
    paddingVertical: 11,
    paddingHorizontal: 16,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: THEME.COLORS.BACKGROUND_900,
    borderRadius: 4,
  },
  discordHandle: {
    fontFamily: THEME.FONT_FAMILY.REGULAR,
    fontSize: THEME.FONT_SIZE.MD,
    color: THEME.COLORS.CAPTION_200,
  }
});