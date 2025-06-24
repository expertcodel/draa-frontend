module.exports = {
  apps: [
    {
      script: "npm start",
    },
  ],

  deploy: {
    production: {
      user: "ecl",
      host: "195.35.23.37",
      ref: "origin/main",
      repo: "https://gitlab.com/expertcodelab/draa.git",
      path: "/var/www/draa",
      "pre-deploy-local": "",
      "post-deploy":
        "soursce ~/.nvm/.nvm.sh && npm install && npm run build && pm2 reload ecosystem.config.js --env production",
      "pre-setup": "",
      ssh_options: "ForwardAgent=yes",
    },
  },
};
