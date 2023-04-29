/**
 * @jest-environment jsdom
 */

import CommentsCounter from './modules/commentsCounter.js';

describe('Test Comments Counter', () => {
  const p = document.createElement('p');
  const data = [
    {
      comment: 'Hello Poki',
      creation_date: '2023-04-19',
      username: 'Mahdi',
    },
    {
      comment: 'Hello Poki',
      creation_date: '2023-04-19',
      username: 'Mahdi',
    },
    {
      comment: 'Nice pokemon!',
      creation_date: '2023-04-20',
      username: 'Hernán',
    },
  ];

  const counter = CommentsCounter(data.length, p);

  test('The amount of items = 3', () => {
    expect(counter).toBe(3);
  });
});