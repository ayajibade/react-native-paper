/* @flow */

import * as React from 'react';
import renderer from 'react-test-renderer';
import { Text } from 'react-native';
import Snackbar from '../Snackbar';

jest.useFakeTimers();

it('renders snackbar with content', () => {
  const tree = renderer
    .create(
      <Snackbar visible onDismiss={jest.fn()}>
        Snackbar content
      </Snackbar>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});

it('renders not visible snackbar with content wrapper but no actual content', () => {
  const tree = renderer
    .create(
      <Snackbar visible={false} onDismiss={jest.fn()}>
        Snackbar content
      </Snackbar>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});

it('renders snackbar with Text as a child', () => {
  const tree = renderer
    .create(
      <Snackbar visible onDismiss={jest.fn()}>
        <Text>Snackbar content</Text>
      </Snackbar>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});

it('renders snackbar with action button', () => {
  const tree = renderer
    .create(
      <Snackbar
        visible
        onDismiss={() => {}}
        action={{ label: 'Undo', onPress: jest.fn() }}
      >
        Snackbar content
      </Snackbar>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
