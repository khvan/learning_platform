const passport = require ('passport');

module.exports = app => {
  app.get (
    '/auth/google',
    passport.authenticate ('google', {
      scope: ['profile', 'email'],
    }),
    (req, res) => {
      res.redirect ('http://localhost:3000');
    }
  );
  app.get ('/api/logout', (req, res) => {
    req.logout ();
    res.send (req.user);
  });

  app.get ('/auth/google/callback', (req, res) => {
    passport.authenticate ('google')
    (res.redirect("http://localhost:3000"))
  });

  app.get ('/api/current_user', (req, res) => {
    res.send (req.user);
  });
};
