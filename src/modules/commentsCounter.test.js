/**
 * @jest-environment jsdom
 */

import CommentsCounter from './commentsCounter.js';

describe('Test Comments Counter', () => {
  const p = document.createElement('p');
  const data = [
    {
      comment: 'Hello',
      creation_date: '2023-03-12',
      username: 'Cisco',
    },
    {
      comment: 'This looks nice!',
      creation_date: '2019-01-05',
      username: 'Mia',
    },
    {
      comment: 'I am not watching this',
      creation_date: '2013-12-20',
      username: 'Fede',
    },
  ];

  const counter = CommentsCounter(data.length, p);

  test('The amount of items = 3', () => {
    expect(counter).toBe(3);
  });
});