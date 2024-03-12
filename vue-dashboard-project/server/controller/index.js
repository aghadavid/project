const { Op } = require("sequelize");
const { Employee } = require("../models");

module.exports = class Controller {
  static async getEmployee(req, res) {
    const { page, limit } = req.query;
    // limit = 10
    const offset = +limit * (+page - 1);

    console.log(req.query, `<<<<<<<<<<++++++`, offset, limit, page);

    let options = {
      // where : {
      //    job : {
      //     // [Op.like] :"%Fullstack%"
      //   }
      // },
      limit: limit,
      offset: offset,
    };
    try {
      const [data,totalCount] = await Promise.all([
        Employee.findAll(options),
        Employee.count(),
      ]);
      // console.log(data);
      const result = {
        data: data,
        total: totalCount
      }

      console.log(result, "<<<<<<<<<<<<<<<<<");
      res.status(202).json(result);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  static async getTotal(req, res) {
    try {
      const [frontEndTotal, backEndTotal, fullStackTotal] = await Promise.all([
        Employee.count({
          where: {
            job: {
              [Op.like]: "%Front end%",
            },
          },
        }),
        Employee.count({
          where: {
            job: {
              [Op.like]: "%Back end%",
            },
          },
        }),
        Employee.count({
          where: {
            job: {
              [Op.like]: "%Fullstack%",
            },
          },
        }),
      ]);
      const obj = {
        frontEnd: frontEndTotal,
        backEnd: backEndTotal,
        fullStack: fullStackTotal,
      };
      res.status(200).json(obj);
    } catch (error) {
      console.error(error);
      res.status(500).json(error);
    }
  }
};
