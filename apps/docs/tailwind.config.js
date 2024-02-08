const { join } = require('path');

module.exports = {
  content: [
    join(__dirname, 'src/**/!(*.stories|*.spec).{ts,html}'),
    './libs/flowbite-angular/src/**/!(*.stories|*.spec).{ts,html}',
  ],
  darkMode: 'class',
  theme: {
    extend: {},
  },
  plugins: [],
};
