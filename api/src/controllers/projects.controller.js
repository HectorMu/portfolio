const connection = require("../database");
const controller = {};

controller.ListAll = async (req, res) => {
  try {
    const projects = await connection.query("select * from projects");
    res.json(projects);
  } catch (error) {
    console.log(error);
    res.json({ status: false, statusText: error });
  }
};
controller.Save = async (req, res) => {
  try {
    await connection.query("insert into projects set ?", [req.body]);
    res.json({ status: true, statusText: "Data inserted" });
  } catch (error) {
    console.log(error);
    res.json({ status: false, statusText: error });
  }
};
controller.Update = async (req, res) => {
  const { id } = req.params;
  try {
    await connection.query("update projects set ? where id = ?", [
      req.body,
      id,
    ]);
    res.json({ status: true, statusText: "Data updated" });
  } catch (error) {
    console.log(error);
    res.json({ status: false, statusText: error });
  }
};
controller.Delete = async (req, res) => {
  const { id } = req.params;
  try {
    await connection.query("delete from projects where id = ?", [id]);
    res.json({ status: true, statusText: "Data deleted" });
  } catch (error) {
    console.log(error);
    res.json({ status: false, statusText: error });
  }
};

module.exports = controller;
