const gamesRouter = require("express").Router();

const {
  getAllGamesMiddleware,
  checkIsTitleInArrayMiddleware,
  updateGamesArrayMiddleware,
  updateGamesFileMiddleware,
  findGameByIdMiddleware,
  deleteGameMiddleware,
} = require("../middlewares/games");
const { sendAllGames, sendUpdatedGames } = require("../controllers/games");

gamesRouter.get("/games", getAllGamesMiddleware, sendAllGames);

gamesRouter.post(
  "/games",
  getAllGamesMiddleware,
  checkIsTitleInArrayMiddleware,
  updateGamesArrayMiddleware,
  updateGamesFileMiddleware,
  sendUpdatedGames,
);

gamesRouter.delete(
  "/games/:id",
  getAllGamesMiddleware,
  findGameByIdMiddleware,
  deleteGameMiddleware,
  updateGamesFileMiddleware,
  sendUpdatedGames,
);

module.exports = gamesRouter;