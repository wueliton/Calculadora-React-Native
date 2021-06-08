import {parse} from '@babel/core';
import React, {useState, useEffect, useCallback} from 'react';
import {SafeAreaView, Text, View, Alert} from 'react-native';
import {MyButton} from './components/';
import {LayoutGrid} from './theme/style';

const App = (): JSX.Element => {
  const [value, setValue] = useState('0');
  const [valueb, setValueb] = useState('');
  const [operator, setOperator] = useState('');

  const handleValue = number => {
    if (operator) setValueb(valueb + number.toString());
    else if (value === '0' && number !== ',') setValue(number.toString());
    else setValue(value + number.toString());
  };

  const handleClear = useCallback(() => {
    setValue('0');
    setValueb('');
    setOperator('');
  }, []);

  const handleOperator = simbol => {
    if (operator && valueb !== '' && value !== '') {
      let result;

      switch (operator) {
        case '+':
          result = convertToFloat(value) + convertToFloat(valueb);
          break;
        case '-':
          result = convertToFloat(value) - convertToFloat(valueb);
          break;
        case 'x':
          result = convertToFloat(value) * convertToFloat(valueb);
          break;
        case '/':
          result = convertToFloat(value) / convertToFloat(valueb);
          break;
      }

      setValue(result.toString());
      setValueb('');
    }
    if (simbol !== '=' && simbol !== '%') setOperator(simbol);
    else setOperator('');
  };

  const convertToFloat = (number: string) => Number(number.replace(/,/g, '.'));
  const formatMask = (number: string) => number.replace('.', ',');
  const percent = useCallback((value, valueb) => {
    const result = (convertToFloat(value) * convertToFloat(valueb)) / 100;
    setValueb(result.toString());
  }, []);
  const negative = () => {
    if(valueb !== '') {
      let inverseNumber = convertToFloat(valueb) * -1;
      setValueb(inverseNumber.toString());
    }
    else {
      let inverseNumber = convertToFloat(value) * -1;
      setValue(inverseNumber.toString());
    }
  }

  return (
    <SafeAreaView style={LayoutGrid.container}>
      <View style={LayoutGrid.calcHeader}>
        <View style={LayoutGrid.calcValues}>
          <Text>{operator !== '' ? `${value} ${operator}` : valueb}</Text>
        </View>
        <View style={LayoutGrid.calcValues}>
          <Text style={LayoutGrid.result}>
            {valueb !== '' ? formatMask(valueb) : formatMask(value)}
          </Text>
        </View>
      </View>
      <View style={LayoutGrid.calcBottom}>
        <View style={LayoutGrid.gridItens}>
          <View style={[LayoutGrid.buttonView]}>
            <MyButton
              title="A/C"
              color="#269887"
              onPress={() => handleClear()}></MyButton>
          </View>
          <View style={LayoutGrid.buttonView}>
            <MyButton
              title="+/-"
              color="#269887"
              onPress={() => negative()}></MyButton>
          </View>
          <View style={LayoutGrid.buttonView}>
            <MyButton
              title="%"
              color="#269887"
              onPress={() => percent(value, valueb)}></MyButton>
          </View>
          <View style={LayoutGrid.buttonView}>
            <MyButton
              title="+"
              color="#a95255"
              onPress={() => handleOperator('+')}></MyButton>
          </View>
        </View>
        <View style={LayoutGrid.gridItens}>
          <View style={LayoutGrid.buttonView}>
            <MyButton title="7" onPress={() => handleValue(7)}></MyButton>
          </View>
          <View style={LayoutGrid.buttonView}>
            <MyButton title="8" onPress={() => handleValue(8)}></MyButton>
          </View>
          <View style={LayoutGrid.buttonView}>
            <MyButton title="9" onPress={() => handleValue(9)}></MyButton>
          </View>
          <View style={LayoutGrid.buttonView}>
            <MyButton
              title="x"
              color="#a95255"
              onPress={() => handleOperator('x')}></MyButton>
          </View>
        </View>
        <View style={LayoutGrid.gridItens}>
          <View style={LayoutGrid.buttonView}>
            <MyButton title="4" onPress={() => handleValue(4)}></MyButton>
          </View>
          <View style={LayoutGrid.buttonView}>
            <MyButton title="5" onPress={() => handleValue(5)}></MyButton>
          </View>
          <View style={LayoutGrid.buttonView}>
            <MyButton title="6" onPress={() => handleValue(6)}></MyButton>
          </View>
          <View style={LayoutGrid.buttonView}>
            <MyButton
              title="-"
              color="#a95255"
              onPress={() => handleOperator('-')}></MyButton>
          </View>
        </View>
        <View style={LayoutGrid.gridItens}>
          <View style={LayoutGrid.buttonView}>
            <MyButton title="1" onPress={() => handleValue(1)}></MyButton>
          </View>
          <View style={LayoutGrid.buttonView}>
            <MyButton title="2" onPress={() => handleValue(2)}></MyButton>
          </View>
          <View style={LayoutGrid.buttonView}>
            <MyButton title="3" onPress={() => handleValue(3)}></MyButton>
          </View>
          <View style={LayoutGrid.buttonView}>
            <MyButton
              title="/"
              color="#a95255"
              onPress={() => handleOperator('/')}></MyButton>
          </View>
        </View>
        <View style={LayoutGrid.gridItens}>
          <View style={[LayoutGrid.buttonView, {flex: 2.3}]}>
            <MyButton title="0" onPress={() => handleValue(0)}></MyButton>
          </View>
          <View style={LayoutGrid.buttonView}>
            <MyButton title="," onPress={() => handleValue(',')}></MyButton>
          </View>
          <View style={LayoutGrid.buttonView}>
            <MyButton
              title="="
              color="#a95255"
              onPress={() => handleOperator('=')}></MyButton>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default App;
