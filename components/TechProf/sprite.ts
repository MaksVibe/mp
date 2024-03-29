export const sprite: SpriteType = {
  languages: [
    { src: '/icon-javascript.svg' },
    { src: '/icon-typescript.svg' },
    { src: '/icon-html5.svg' },
    { src: '/icon-css3.svg' },
    { src: '/icon-sass.svg' },
  ],
  libraries: [
    { src: '/icon-react.svg' },
    { src: '/icon-redux.svg' },
    { src: '/icon-mongoose.svg' },
    { src: '/icon-axios.svg' },
    { src: '/icon-tailwind.svg' },
    { src: '/icon-styled-components.svg' },
  ],
  frameworks: [
    { src: '/icon-nodejs.svg' },
    { src: '/icon-next-js.svg' },
    { src: '/icon-bootstrap.svg' },
    { src: '/icon-express-js.svg' },
    { src: '/icon-reactn.svg' },
  ],
  tools: [
    { src: '/icon-npm.svg' },
    { src: '/icon-yarn.svg' },
    { src: '/icon-git.svg' },
    { src: '/icon-postman.svg' },
    { src: '/icon-babel.svg' },
    { src: '/icon-eslint.svg' },
    { src: '/icon-prettier.svg' },
    { src: '/icon-mongodb.svg' },
    { src: '/icon-parceljs.svg' },
    { src: '/icon-gulp.svg' },
  ],
  deploy: [
    { src: '/icon-githubb.svg' },
    { src: '/icon-bitbucket.svg' },
    { src: '/icon-netlify.svg' },
    { src: '/icon-heroku.svg' },
    { src: '/icon-vercell.svg' },
  ],
  other: [
    { src: '/icon-docker.svg' },
    { src: '/icon-jira.svg' },
    { src: '/icon-teamwork.svg' },
    { src: '/icon-trello.svg' },
  ],
};

type SpriteType = {
  languages: IconSpriteType[];
  libraries: IconSpriteType[];
  frameworks: IconSpriteType[];
  tools: IconSpriteType[];
  deploy: IconSpriteType[];
  other: IconSpriteType[];
};

export type IconSpriteType = {
  src: string;
};
