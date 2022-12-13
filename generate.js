
// 
// import { lowdb } from 'lowdb';
// var jsonServer = require('json-server')
// import { jsonServer } from 'json-server';

// Articles
// -1- Generate articles ==> 3 articles
// Comments
// Generate comments for articles 1 ==> 2 comments
// Generate comments for articles 2 ==> 3 comments
// Generate comments for articles 3 ==> no comments
// Tags
// Generate tags for articles 1 ==> 2 tags
// Generate tags for articles 2 ==> 3 tags
// Generate tags for articles 3 ==> 1 tag

// import { faker } from '@faker-js/faker';
// const faker = require('@faker-js/faker');
const { faker } = require('@faker-js/faker');

var database = { articles: [],  comments: [], tags: [] };

var nbComments = 1;
var nbTags = 1;

// -1- Generate articles ==> 3 articles
for (var i = 1; i<= 3; i++) {
  const comments = [];
  comments.push({
    id: i,
    content: faker.lorem.lines(2),
    username:faker.name.fullName(),
  });

  database.articles.push({
    id: i,
    name: faker.commerce.productName(),
    reference: faker.commerce.productName(),
    content: faker.lorem.lines(4),
    fileUrl: faker.image.technics(1234, 2345, true),
    createdAt: faker.date.past(),
    updatedAt: faker.date.past(),
    draft: true,
    username:faker.name.fullName(),

    // status: faker.random.arrayElement(['planned', 'done']),
    // faker.random.arrayElement(comments),

  });
} //end for articles


// Generate comments for articles 1 ==> 2 comments
for (var i = 1; i<= 2; i++) {
  database.comments.push({
    id: nbComments,
    content: faker.lorem.lines(2),
    username:faker.name.fullName(),
    articleId: 1,
  });
  nbComments++;
} //end for comments

// Generate comments for articles 2 ==> 3 comments
for (var i = 1; i<= 3; i++) {
  database.comments.push({
    id: nbComments,
    content: faker.lorem.lines(2),
    username:faker.name.fullName(),
    articleId: 2,
  });
  nbComments++;
} //end for comments

// Generate tags for articles 1 ==> 2 tags
for (var i = 1; i<= 2; i++) {
  database.tags.push({
    id: nbTags,
    title: faker.lorem.slug(2),
    createdAt: faker.date.past(),
    articleId: 1,
  });
  nbTags++;
} //end for tags

// Generate tags for articles 2 ==> 3 tags
for (var i = 1; i<= 3; i++) {
  database.tags.push({
    id: nbTags,
    title: faker.lorem.slug(2),
    createdAt: faker.date.past(),
    articleId: 2,
  });
  nbTags++;
} //end for tags

// Generate tags for articles 3 ==> 1 tag
for (var i = 1; i<= 1; i++) {
  database.tags.push({
    id: nbTags,
    title: faker.lorem.slug(2),
    createdAt: faker.date.past(),
    articleId: 3,
  });
  nbTags++;
} //end for tags

console.log(JSON.stringify(database));