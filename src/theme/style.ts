import {StyleSheet} from 'react-native';

export const ThemeColors = {};

export const LayoutGrid = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'flex-end',
    height: '100%',
    width: '100%',
    backgroundColor: '#22252d',
  },
  calcBottom: {
    height: '60%',
    borderRadius: 30,
    backgroundColor: '#292d36',
    padding: 20,
    alignItems: 'stretch',
    flexDirection: 'column',
  },
  gridItens: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'stretch',
  },
  buttonView: {
    flex: 1,
    padding: 10,
  },
  calcHeader: {
    flexDirection: 'column',
    height: '40%',
    alignContent: 'flex-end',
    justifyContent: 'flex-end',
  },
  calcValues: {
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  result: {
    fontSize: 60,
    fontWeight: 'bold',
    lineHeight: 60,
    textAlign: 'right',
  },
});
