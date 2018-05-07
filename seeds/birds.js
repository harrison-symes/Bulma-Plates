
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('birds').del()
    .then(function () {
      // Inserts seed entries
      return knex('birds').insert([
        {id: 1, name: 'Piwakawaka', image_url: 'http://nzbirdsonline.org.nz/sites/all/files/1200555fantail-%20piwakawakaA.JPG'},
        {id: 2, name: 'Kokako', image_url: 'https://www.radionz.co.nz/assets/galleries/38940/full_Poutama.jpg?1495967696'},
        {id: 3, name: 'Kahu', image_url: 'https://ih0.redbubble.net/image.25719532.1456/flat,800x800,070,f.u2.jpg'}
      ]);
    });
};
