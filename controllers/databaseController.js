const landing_get = (req, rsp) => {
  rsp.render("database/home", { 
    title: "Home"
  });
};

module.exports = {
  landing_get
}
