import { StyleSheet } from 'react-native';

const layout = StyleSheet.create({
  // Row styles
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },

  // Column styles
  col1: {
    flexBasis: '8.33%', // 1/12 of the width
    maxWidth: '8.33%',
  },
  col2: {
    flexBasis: '16.66%', // 2/12 of the width
    maxWidth: '16.66%',
  },
  col3: {
    flexBasis: '25%', // 3/12 of the width
    maxWidth: '25%',
  },
  col4: {
    flexBasis: '33.33%', // 4/12 of the width
    maxWidth: '33.33%',
  },
  col5: {
    flexBasis: '41.66%', // 5/12 of the width
    maxWidth: '41.66%',
  },
  col6: {
    flexBasis: '50%', // 6/12 of the width
    maxWidth: '50%',
  },
  col7: {
    flexBasis: '58.33%', // 7/12 of the width
    maxWidth: '58.33%',
  },
  col8: {
    flexBasis: '66.66%', // 8/12 of the width
    maxWidth: '66.66%',
  },
  col9: {
    flexBasis: '75%', // 9/12 of the width
    maxWidth: '75%',
  },
  col10: {
    flexBasis: '83.33%', // 10/12 of the width
    maxWidth: '83.33%',
  },
  col11: {
    flexBasis: '91.66%', // 11/12 of the width
    maxWidth: '91.66%',
  },
  col12: {
    flexBasis: '100%', // Full width
    maxWidth: '100%',
  },

  // Utilities for alignment
  justifyContentCenter: {
    justifyContent: 'center',
  },
  alignItemsCenter: {
    alignItems: 'center',
  },
  justifyContentBetween: {
    justifyContent: 'space-between',
  },
  alignItemsStretch: {
    alignItems: 'stretch',
  },

  // Padding Utilities
  p0: { padding: 0 },
  p1: { padding: 4 },
  p2: { padding: 8 },
  p3: { padding: 12 },
  p4: { padding: 16 },
  p5: { padding: 20 },

  // Padding Horizontal and Vertical
  px0: { paddingHorizontal: 0 },
  px1: { paddingHorizontal: 4 },
  px2: { paddingHorizontal: 8 },
  px3: { paddingHorizontal: 12 },
  px4: { paddingHorizontal: 16 },
  px5: { paddingHorizontal: 20 },
  py0: { paddingVertical: 0 },
  py1: { paddingVertical: 4 },
  py2: { paddingVertical: 8 },
  py3: { paddingVertical: 12 },
  py4: { paddingVertical: 16 },
  py5: { paddingVertical: 20 },

  // Padding Top, Bottom, Left, Right
  pt0: { paddingTop: 0 },
  pt1: { paddingTop: 4 },
  pt2: { paddingTop: 8 },
  pt3: { paddingTop: 12 },
  pt4: { paddingTop: 16 },
  pt5: { paddingTop: 20 },
  pb0: { paddingBottom: 0 },
  pb1: { paddingBottom: 4 },
  pb2: { paddingBottom: 8 },
  pb3: { paddingBottom: 12 },
  pb4: { paddingBottom: 16 },
  pb5: { paddingBottom: 20 },
  pl0: { paddingLeft: 0 },
  pl1: { paddingLeft: 4 },
  pl2: { paddingLeft: 8 },
  pl3: { paddingLeft: 12 },
  pl4: { paddingLeft: 16 },
  pl5: { paddingLeft: 20 },
  pr0: { paddingRight: 0 },
  pr1: { paddingRight: 4 },
  pr2: { paddingRight: 8 },
  pr3: { paddingRight: 12 },
  pr4: { paddingRight: 16 },
  pr5: { paddingRight: 20 },

  // Margin Utilities
  m0: { margin: 0 },
  m1: { margin: 4 },
  m2: { margin: 8 },
  m3: { margin: 12 },
  m4: { margin: 16 },
  m5: { margin: 20 },

  // Margin Horizontal and Vertical
  mx0: { marginHorizontal: 0 },
  mx1: { marginHorizontal: 4 },
  mx2: { marginHorizontal: 8 },
  mx3: { marginHorizontal: 12 },
  mx4: { marginHorizontal: 16 },
  mx5: { marginHorizontal: 20 },
  my0: { marginVertical: 0 },
  my1: { marginVertical: 4 },
  my2: { marginVertical: 8 },
  my3: { marginVertical: 12 },
  my4: { marginVertical: 16 },
  my5: { marginVertical: 20 },

  // Margin Top, Bottom, Left, Right
  mt0: { marginTop: 0 },
  mt1: { marginTop: 4 },
  mt2: { marginTop: 8 },
  mt3: { marginTop: 12 },
  mt4: { marginTop: 16 },
  mt5: { marginTop: 20 },
  mb0: { marginBottom: 0 },
  mb1: { marginBottom: 4 },
  mb2: { marginBottom: 8 },
  mb3: { marginBottom: 12 },
  mb4: { marginBottom: 16 },
  mb5: { marginBottom: 20 },
  ml0: { marginLeft: 0 },
  ml1: { marginLeft: 4 },
  ml2: { marginLeft: 8 },
  ml3: { marginLeft: 12 },
  ml4: { marginLeft: 16 },
  ml5: { marginLeft: 20 },
  mr0: { marginRight: 0 },
  mr1: { marginRight: 4 },
  mr2: { marginRight: 8 },
  mr3: { marginRight: 12 },
  mr4: { marginRight: 16 },
  mr5: { marginRight: 20 },
});

export default layout;
