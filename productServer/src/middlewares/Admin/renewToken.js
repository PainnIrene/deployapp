const renewToken = (req, res, next) => {
  if (req.newAT) {
    res.cookie("AAT", req.newAT, {
      httpOnly: false,
      secure: false,
      maxAge: 1800000, // 30 mins
      sameSite: "lax",
    });
    console.log("Renew ToKENNNN");
  }

  if (req.newRT) {
    res.cookie("ART", req.newRT, {
      httpOnly: false,
      secure: false,
      maxAge: 24 * 60 * 60 * 1000,
      sameSite: "lax",
    });
  }
  next();
};
export default renewToken;