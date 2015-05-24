import DS from 'ember-data';


let Photo = DS.Model.extend({
  url: DS.attr('string'),
  albums: DS.hasMany('album')
});

Photo.reopenClass({
  FIXTURES : [
    {
      id: 1,
      url: 'https://s3-us-west-2.amazonaws.com/collected-1-nyc/assets/IMG_1418.JPG',
      albums: [1]
    }, {
      id: 2,
      url: 'https://s3-us-west-2.amazonaws.com/collected-1-nyc/assets/IMG_1648.JPG',
      albums: [1]
    }, {
      id: 3,
      url: 'https://s3-us-west-2.amazonaws.com/collected-1-nyc/assets/IMG_1654.JPG'
    }, {
      id: 4,
      url: 'https://s3-us-west-2.amazonaws.com/collected-1-nyc/assets/IMG_1655.JPG'
    }, {
      id: 5,
      url: 'https://s3-us-west-2.amazonaws.com/collected-1-nyc/assets/IMG_1666.JPG'
    }, {
      id: 6,
      url: 'https://s3-us-west-2.amazonaws.com/collected-1-nyc/assets/IMG_1667.JPG'
    }, {
      id: 7,
      url: 'https://s3-us-west-2.amazonaws.com/collected-1-nyc/assets/IMG_1668.JPG'
    }, {
      id: 8,
      url: 'https://s3-us-west-2.amazonaws.com/collected-1-nyc/assets/IMG_1669.JPG'
    }, {
      id: 9,
      url: 'https://s3-us-west-2.amazonaws.com/collected-1-nyc/assets/IMG_1681.JPG'
    }, {
      id: 10,
      url: 'https://s3-us-west-2.amazonaws.com/collected-1-nyc/assets/IMG_1683.JPG'
    }, {
      id: 11,
      url: 'https://s3-us-west-2.amazonaws.com/collected-1-nyc/assets/IMG_1685.JPG'
    }, {
      id: 12,
      url: 'https://s3-us-west-2.amazonaws.com/collected-1-nyc/assets/IMG_1745.JPG'
    }, {
      id: 13,
      url: 'https://s3-us-west-2.amazonaws.com/collected-1-nyc/assets/IMG_1851.JPG'
    }, {
      id: 14,
      url: 'https://s3-us-west-2.amazonaws.com/collected-1-nyc/assets/IMG_1878.JPG'
    }, {
      id: 15,
      url: 'https://s3-us-west-2.amazonaws.com/collected-1-nyc/assets/IMG_1905.JPG'
    }, {
      id: 16,
      url: 'https://s3-us-west-2.amazonaws.com/collected-1-nyc/assets/IMG_1964.JPG'
    }, {
      id: 17,
      url: 'https://s3-us-west-2.amazonaws.com/collected-1-nyc/assets/IMG_1975.JPG'
    }, {
      id: 18,
      url: 'https://s3-us-west-2.amazonaws.com/collected-1-nyc/assets/IMG_2029.JPG'
    }, {
      id: 19,
      url: 'https://s3-us-west-2.amazonaws.com/collected-1-nyc/assets/IMG_2030.JPG'
    }, {
      id: 20,
      url: 'https://s3-us-west-2.amazonaws.com/collected-1-nyc/assets/IMG_2031.JPG'
    }, {
      id: 21,
      url: 'https://s3-us-west-2.amazonaws.com/collected-1-nyc/assets/IMG_2032.JPG'
    }, {
      id: 22,
      url: 'https://s3-us-west-2.amazonaws.com/collected-1-nyc/assets/IMG_2191.JPG'
    }, {
      id: 23,
      url: 'https://s3-us-west-2.amazonaws.com/collected-1-nyc/assets/IMG_2192.JPG'
    }, {
      id: 24,
      url: 'https://s3-us-west-2.amazonaws.com/collected-1-nyc/assets/IMG_2299.JPG'
    }, {
      id: 25,
      url: 'https://s3-us-west-2.amazonaws.com/collected-1-nyc/assets/IMG_2384.JPG'
    }, {
      id: 26,
      url: 'https://s3-us-west-2.amazonaws.com/collected-1-nyc/assets/IMG_2477.JPG'
    }, {
      id: 27,
      url: 'https://s3-us-west-2.amazonaws.com/collected-1-nyc/assets/IMG_2519.JPG',
      albums: [2]
    }, {
      id: 28,
      url: 'https://s3-us-west-2.amazonaws.com/collected-1-nyc/assets/IMG_2596.JPG'
    }, {
      id: 29,
      url: 'https://s3-us-west-2.amazonaws.com/collected-1-nyc/assets/IMG_2597.JPG'
    }, {
      id: 30,
      url: 'https://s3-us-west-2.amazonaws.com/collected-1-nyc/assets/IMG_2598.JPG'
    }, {
      id: 31,
      url: 'https://s3-us-west-2.amazonaws.com/collected-1-nyc/assets/IMG_2609.JPG'
    }, {
      id: 32,
      url: 'https://s3-us-west-2.amazonaws.com/collected-1-nyc/assets/IMG_2698.JPG'
    }, {
      id: 33,
      url: 'https://s3-us-west-2.amazonaws.com/collected-1-nyc/assets/IMG_2744.JPG',
      albums: [3, 2]
    }, {
      id: 34,
      url: 'https://s3-us-west-2.amazonaws.com/collected-1-nyc/assets/IMG_2814.JPG'
    }]
});

export default Photo;
