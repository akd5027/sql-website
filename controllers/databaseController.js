const landing_get = (req, rsp) => {
  rsp.render("database/home", { 
    title: "Home"
  });
};

const landing_post = (req, rsp) => {
  console.log(req.body);
  rsp.status(301).end();
};

module.exports = {
  landing_get,
  landing_post,
}
