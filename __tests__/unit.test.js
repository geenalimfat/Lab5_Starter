// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2

//isPhoneNumbers tests
test('checks true phoneNumber', () => {
  expect(isPhoneNumber("310-234-1111")).toBe(true);
});

test('checks true phoneNumber', () => {
  expect(isPhoneNumber("(310)234-1111")).toBe(true);
});

test('checks false number', () => {
  expect(isPhoneNumber("310-234-111")).toBe(false);
});

test('checks false phoneNumber', () => {
  expect(isPhoneNumber("2341111")).toBe(false);
});

//isEmail tests
test('checks valid email', () => {
  expect(isEmail("cdelira@ucsd.edu")).toBe(true);
});

test('checks valid email', () => {
  expect(isEmail("111aa@gmail.com")).toBe(true);
});

test('checks false email', () => {
  expect(isEmail("cdelira@ucsd")).toBe(false);
});

test('checks false email', () => {
  expect(isEmail("aaaaaa")).toBe(false);
});

//test isStrongPassword
test('checks strong password', () => {
  expect(isStrongPassword("Computer_5")).toBe(true);
});

test('checks strong password', () => {
  expect(isStrongPassword("CSE110")).toBe(true);
});

test('checks non strong password', () => {
  expect(isStrongPassword("a")).toBe(false);
});

test('checks non strong password', () => {
  expect(isStrongPassword("1computer")).toBe(false);
});

//isDate function
test('check valid date', () => {
  expect(isDate("05/06/2024")).toBe(true);
});

test('check valid date', () => {
  expect(isDate("5/5/2024")).toBe(true);
});

test('check invalid date', () => {
  expect(isDate("05052024")).toBe(false);
});

test('check invalid date', () => {
  expect(isDate("05/05/24")).toBe(false);
});

//isHexCode tests
test('check valid hex code', () => {
  expect(isHexColor("#7E1A05")).toBe(true);
});

test('check valid hex code', () => {
  expect(isHexColor("7E1A05")).toBe(true);
});

test('check invalid hex code', () => {
  expect(isHexColor("#7E105")).toBe(false);
});

test('check invalid hex code', () => {
  expect(isHexColor("3")).toBe(false);
});