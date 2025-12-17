
export const register = (req, res) => {
  try {
    res.json({ message: "REGISTER" });
  } catch (e) {
    console.error(e.message);
  }
};

export const login = (req, res) => {
  try {
    res.json({ message: "login" });
  } catch (e) {
    console.error(e.message);
  }
};
