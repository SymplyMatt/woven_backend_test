'use strict';
const bcrypt = require('bcrypt');

module.exports = {
  async up(queryInterface) {
    const password1 = await bcrypt.hash('password123', 10);
    const password2 = await bcrypt.hash('password123', 10);
    const password3 = await bcrypt.hash('password123', 10);
    const password4 = await bcrypt.hash('password123', 10);

    await queryInterface.bulkInsert('profiles', [
      {
        id: '6c714246-6dde-40a1-a209-616b09a22d59',
        type: 'client',
        profession: null,
        firstName: 'John',
        lastName: 'Doe',
        email: 'johndoe@example.com',
        password: password1, 
        createdAt: new Date(),
        updatedAt: new Date(),
        balance:200
      },
      {
        id: 'b2a940ee-987c-4832-9fc4-bbceef7f54ac',
        type: 'contractor',
        profession: 'Developer',
        firstName: 'Jane',
        lastName: 'Smith',
        email: 'janesmith@example.com',
        password: password2, 
        createdAt: new Date(),
        updatedAt: new Date(),
        balance:2000
      },
      {
        id: 'b0edeee6-6cbf-4350-931c-a46a48f4d14c',
        type: 'client',
        profession: null,
        firstName: 'Alice',
        lastName: 'Johnson',
        email: 'alicejohnson@example.com',
        password: password3, 
        createdAt: new Date(),
        updatedAt: new Date(),
        balance:1000
      },
      {
        id: 'c0b16f1a-c5ac-4a08-91ad-0f4efa320beb',
        type: 'contractor',
        profession: 'Designer',
        firstName: 'Bob',
        lastName: 'Brown',
        email: 'bobbrown@example.com',
        password: password4, 
        createdAt: new Date(),
        updatedAt: new Date(),
        balance:1200
      },
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('profiles', null, {});
  }
};
