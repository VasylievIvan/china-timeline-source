import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import App from './App';
import registerServiceWorker from './registerServiceWorker';
import vis from 'vis';
import 'vis/dist/vis.css'

var container = document.getElementById('timeline');

var items = new vis.DataSet([
    {id: 1, group: 1, content: 'Ткаченко С', start: '2016-03-16', end: '2016-07-10'},
    {id: 2, group: 2, content: 'Ковалев А', start: '2016-03-08', end: '2016-06-25'},
    {id: 3, group: 3, content: 'Толочко М', start: '2016-05-11', end: '2016-10-22'},
    {id: 4, group: 4, content: 'Ковалев М', start: '2016-03-08', end: '2016-03-23'},
    {id: 5, group: 5, content: 'Ермоленко А', start: '2016-05-11', end: '2016-10-22'},
    {id: 6, group: 1, content: 'Ткаченко С', start: '2016-10-28', end: '2017-04-04'},
    {id: 7, group: 3, content: 'Толочко М', start: '2017-01-09', end: '2017-06-28'},
    {id: 8, group: 5, content: 'Ермоленко А', start: '2017-01-09', end: '2017-06-28'},
    {id: 9, group: 4, content: 'Ковалев М', start: '2017-05-24', end: '2017-11-15'}
  ]);

  var options = {
  };

  var groups = [
  {
  	id: 1,
  	content: 'Ткаченко С'
  },
  {
  	id: 2,
  	content: 'Ковалев А'
  },
  {
  	id: 3,
  	content: 'Толочко М'
  },
  {
  	id: 4,
  	content: 'Ковалев М'
  },
  {
  	id: 5,
  	content: 'Ермоленко А'
  }];

  var timeline = new vis.Timeline(container, items, groups, options);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
