import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, Text, TouchableOpacity} from 'react-native';

import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
  MaskSymbol,
  isLastFilledCell,
} from 'react-native-confirmation-code-field';

const CELL_COUNT = 4;
const VerifyEmail = () => {
  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
  const renderCell = ({index, symbol, isFocused}) => {
    let textChild = null;

    if (symbol) {
      textChild = (
        <MaskSymbol
          maskSymbol="*"
          isLastFilledCell={isLastFilledCell({index, value})}>
          {symbol}
        </MaskSymbol>
      );
    } else if (isFocused) {
      textChild = <Cursor />;
    }

    return (
      <Text
        key={index}
        style={[styles.cell, isFocused && styles.focusCell]}
        onLayout={getCellOnLayoutHandler(index)}>
        {textChild}
      </Text>
    );
  };

  return (
    <SafeAreaView style={styles.root}>
      <Text style={styles.title}>Verify Email</Text>
      <Text style={styles.title_details}>
        Please enter the code we sent to{'\n'}your email address.
      </Text>
      <CodeField
        ref={ref}
        {...props}
        value={value}
        onChangeText={setValue}
        cellCount={CELL_COUNT}
        rootStyle={styles.codeFieldRoot}
        keyboardType="number-pad"
        textContentType="oneTimeCode"
        renderCell={renderCell}
      />
      <TouchableOpacity>
        <Text style={styles.signInBtn}>Continue</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.resend}>resend code</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default VerifyEmail;

const styles = StyleSheet.create({
  root: {padding: 30, minHeight: 300, backgroundColor: '#fff', flex: 1},
  title: {
    fontSize: 36,
    color: '#056721',
    fontWeight: 'bold',
    marginLeft: 20,
  },
  codeFieldRoot: {
    marginTop: 40,
    padding: 20,
  },
  cell: {
    width: 60,
    height: 60,
    lineHeight: 40,
    fontSize: 34,
    borderWidth: 2,
    borderColor: '#00000030',
    textAlign: 'center',
    borderRadius: 15,
    padding: 15,
    color: '#056721',
  },
  focusCell: {
    borderColor: '#4E4B66',
  },
  title_details: {
    fontSize: 18,
    marginLeft: 20,
  },
  signInBtn: {
    textAlign: 'center',
    backgroundColor: '#056721',
    borderRadius: 10,
    padding: 20,
    color: 'white',
    marginTop: 60,
    width: '100%',
    fontSize: 18,
  },
  resend: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 18,
    color: '#A5907E',
    fontWeight: 'bold',
  },
});
